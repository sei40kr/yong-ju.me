import * as React from 'react';
import { ReactNode } from 'react';

import './index.scss';

export interface IProps {
  title: string;
  secondaryTitle: string;
  children: ReactNode;
}

const SkillGroup = (props: IProps) => (
  <div className="mb-4 orig-skill-group">
    <div className="mb-4 text-center orig-skill-group__header">
      <div className="orig-skill-group__title">{props.title}</div>
      <div className="text-secondary text-uppercase orig-skill-group__secondary-title">
        {props.secondaryTitle}
      </div>
    </div>
    <div className="row orig-skill-group__body">{props.children}</div>
  </div>
);

export default SkillGroup;
