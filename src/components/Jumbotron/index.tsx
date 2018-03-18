import * as React from 'react';

import './index.scss';

export interface IProps {
  name: string;
  message: string;
}

const Jumbotron = (props: IProps) => (
  <div className="jumbotron orig-jumbotron">
    <div className="container text-center">
      <div className="orig-jumbotron-profile">
        <h1 className="orig-jumbotron-profile__name">{props.name}</h1>
        <p className="orig-jumbotron-profile__message">{props.message}</p>
      </div>
    </div>
  </div>
);

export default Jumbotron;
