import * as React from 'react';
import { ReactNode } from 'react';

import './index.scss';

export interface IProps {
  bgColor: 'white' | 'light-gray';
  title: string;
  secondaryTitle: string;
  children: ReactNode;
}

const Section = (props: IProps) => (
  <section className={`orig-section orig-section--bg-${props.bgColor}`}>
    <div className="p-3 orig-section__header">
      <h2 className="orig-section__title">{props.title}</h2>
      <span className="text-secondary text-uppercase orig-section__secondary-title">
        {props.secondaryTitle}
      </span>
    </div>
    {props.children}
  </section>
);

export default Section;
