import { Interpolation, jsx, Theme } from '@emotion/react';
import { ReactNode } from 'react';

interface CardProps {
  tagName: string;
  children: ReactNode;
  css: Interpolation<Theme>;
}

const Card = ({ tagName, css, children, ...restProps }: CardProps) =>
  jsx(
    tagName,
    {
      css: [
        css,
        {
          background: '#fff',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.2)',
          fontFamily: "'Noto Sans', sans-serif",
        },
      ],
      ...restProps,
    },
    children
  );

export default Card;
