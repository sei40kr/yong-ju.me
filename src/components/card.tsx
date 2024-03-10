import { JSX } from 'solid-js'
import { Dynamic } from 'solid-js/web';

interface CardProps {
  tagName: string;
  children?: JSX.Element;
  className?: string;
}

const Card = ({ tagName, className, children, ...restProps }: CardProps) =>
  <Dynamic component={tagName} class={`bg-white shadow-lg ${className}`} {...restProps}>
    {children}
  </Dynamic>;

export default Card;
