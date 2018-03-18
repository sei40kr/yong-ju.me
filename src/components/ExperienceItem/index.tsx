import * as React from 'react';
import { ReactNode } from 'react';

import './index.scss';

export interface IProps {
  name: string;
  date: string;
}

const formatDate = (dateString: string) =>
  new Intl.DateTimeFormat('ja-JP', { year: 'numeric', month: 'narrow' }).format(
    new Date(dateString)
  );

const ExperienceItem = (props: IProps) => (
  <article className="row orig-experience-item">
    <div
      role="presentation"
      className="d-none d-sm-flex pb-4 orig-experience-item__vertical-line"
    >
      <div role="presentation" className="d-block orig-experience-item__dot" />
    </div>
    <div
      role="presentation"
      className="d-none d-sm-flex mb-4 ml-4 orig-experience-item__body-bubble"
    />

    <section className="col mb-4 py-2 pl-4 orig-experience-item__body">
      <span className="d-block mb-1 text-secondary orig-experience-item__date">
        {formatDate(props.date)}
      </span>
      <h3 className="orig-experience-item__name">{props.name}</h3>
    </section>
  </article>
);

export default ExperienceItem;
