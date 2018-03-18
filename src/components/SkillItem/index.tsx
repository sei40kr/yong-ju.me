import * as React from 'react';
import { ReactNode } from 'react';

interface IProgressProps {
  value: number;
}

const Progress = (props: IProgressProps) => (
  <div className="orig-skill-item-progress">
    <div className="progress orig-skill-item-progress__progress">
      <div
        role="progressbar"
        className="progress-bar orig-skill-progress__progress-bar"
        style={{ width: `${props.value}%` }}
        aria-valuenow={props.value}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  </div>
);

export interface IProps {
  name: string;
  progress: number;
}

const SkillItem = (props: IProps) => (
  <div className="col-12 col-md-6 col-lg-4 mb-4 orig-skill-item">
    <div className="clearfix pb-1 orig-skill-item__metadata">
      <div className="float-left orig-skill-item__name">{props.name}</div>
      <div className="float-right text-secondary orig-skill-item__progress-indicator">
        {props.progress} %
      </div>
    </div>
    <Progress value={props.progress} />
  </div>
);

export default SkillItem;
