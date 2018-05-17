import Img from 'gatsby-image';
import * as React from 'react';

import './index.scss';

export interface IProps {
  name: string;
  message: string;
  backgroundImage: object;
}

const Jumbotron = (props: IProps) => (
  <div className="orig-jumbotron-container">
    <Img {...props.backgroundImage} className="orig-jumbotron-bg" />
    <div className="orig-jumbotron">
      <div className="text-center orig-jumbotron-profile">
        <h1 className="orig-jumbotron-profile__name">{props.name}</h1>
        <p className="orig-jumbotron-profile__message">{props.message}</p>
      </div>
    </div>
  </div>
);

export default Jumbotron;
