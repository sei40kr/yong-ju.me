import { createElement, ReactNode } from "react";

interface CardProps {
  tagName: string;
  children: ReactNode;
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
