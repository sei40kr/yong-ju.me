import classNames from 'classnames';
import * as React from 'react';

import './card.scss';

interface CardProps {
  tagName: string;
  className: string;
}

export default class Card extends React.Component<CardProps, {}> {
  public render() {
    const { tagName, className, children, ...restProps } = this.props;
    return React.createElement(
      tagName,
      {
        className: classNames('card', className),
        ...restProps,
      },
      children
    );
  }
}
