import { createElement } from "react";

interface CardProps {
  tagName: string;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ tagName, className, children, ...restProps }: CardProps) =>
  createElement(
    tagName,
    {
      className: `bg-white shadow-lg ${className || ""}`,
      ...restProps,
    },
    children
  );

export default Card;
