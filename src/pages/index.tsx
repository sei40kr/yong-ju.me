import { graphql } from "gatsby";
import ProjectsPage from "./projects";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

const IndexPage = ProjectsPage;

export default IndexPage;
