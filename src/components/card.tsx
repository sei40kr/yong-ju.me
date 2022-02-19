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
      className: `bg-white shadow-[0_2px_20px_rgba(0,0,0,0.2)] ${
        className || ""
      }`,
      ...restProps,
    },
    children
  );

export default Card;
