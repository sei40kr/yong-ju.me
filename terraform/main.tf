terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.67.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.5.1"
    }
  }

  backend "s3" {
    bucket = "yong-ju.me-terraform-state-2"
    region = "us-east-1"
    key    = "terraform.tfstate"
  }
}

provider "aws" {
  region  = "us-east-1"
  profile = "yong-ju.me"

  default_tags {
    tags = {
      Project = "yong-ju.me"
    }
  }
}

data "aws_route53_zone" "zone" {
  name = "yong-ju.me"
}

resource "aws_acm_certificate" "cert" {
  domain_name       = "yong-ju.me"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => dvo
  }

  zone_id = data.aws_route53_zone.zone.zone_id
  name    = each.value.resource_record_name
  type    = each.value.resource_record_type
  records = [each.value.resource_record_value]
  ttl     = 60
}

resource "aws_s3_bucket" "website" {
  bucket = "yong-ju.me"
}

resource "random_string" "referer" {
  length  = 32
  special = false
}

data "aws_iam_policy_document" "website" {
  statement {
    sid       = "PublicReadGetObject"
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.website.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = ["*"]
    }

    condition {
      test     = "StringEquals"
      variable = "aws:Referer"
      values   = [random_string.referer.result]
    }
  }
}

resource "aws_s3_bucket_policy" "website" {
  bucket = aws_s3_bucket.website.id
  policy = data.aws_iam_policy_document.website.json
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.website.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404/index.html"
  }
}

resource "aws_cloudfront_function" "website" {
  name    = "RewriteDefaultIndexRequest"
  runtime = "cloudfront-js-1.0"
  comment = "Redirect if the path ends with / or does not end with .html"

  code = <<EOF
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  request.uri = "/index.html";

  return request;
}
EOF
}

resource "aws_cloudfront_distribution" "website" {
  origin {
    domain_name = aws_s3_bucket.website.bucket_regional_domain_name

    custom_header {
      name  = "Referer"
      value = random_string.referer.result
    }

    origin_id = aws_s3_bucket.website.id
  }

  enabled         = true
  is_ipv6_enabled = true

  aliases = ["yong-ju.me"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = aws_s3_bucket.website.id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.website.arn
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.cert.arn
    ssl_support_method  = "sni-only"
  }
}

resource "aws_route53_record" "website" {
  zone_id = data.aws_route53_zone.zone.zone_id
  name    = "yong-ju.me"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_iam_user" "ci" {
  name = "yong-ju.me-ci"
}

resource "aws_iam_access_key" "ci" {
  user = aws_iam_user.ci.name
}

data "aws_iam_policy_document" "ci" {
  statement {
    actions = [
      "s3:ListBucket",
      "s3:PutObject",
      "s3:PutObjectAcl",
    ]

    resources = [
      aws_s3_bucket.website.arn,
      "${aws_s3_bucket.website.arn}/*"
    ]
  }

  statement {
    actions = ["cloudfront:CreateInvalidation"]

    resources = [aws_cloudfront_distribution.website.arn]
  }
}

resource "aws_iam_policy" "ci" {
  name   = "yong-ju.me-ci"
  policy = data.aws_iam_policy_document.ci.json
}

resource "aws_iam_user_policy_attachment" "ci" {
  user       = aws_iam_user.ci.name
  policy_arn = aws_iam_policy.ci.arn
}

resource "aws_budgets_budget" "ci" {
  name              = "yong-ju.me"
  budget_type       = "COST"
  limit_amount      = "10"
  limit_unit        = "USD"
  time_period_start = "2023-05-21_00:00"
  time_unit         = "MONTHLY"

  cost_filter {
    name   = "TagKeyValue"
    values = ["Project$yong-ju.me"]
  }

  notification {
    comparison_operator        = "GREATER_THAN"
    threshold                  = 100
    threshold_type             = "PERCENTAGE"
    notification_type          = "FORECASTED"
    subscriber_email_addresses = ["sei40kr@gmail.com"]
  }
}
