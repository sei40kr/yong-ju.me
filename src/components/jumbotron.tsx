import * as React from 'react';
import avatarImg from '../assets/img/avatar.png';
import './jumbotron.scss';

export class Jumbotron extends React.Component<{}, {}> {
  public render() {
    return (
      <header role="banner" className="jumbotron">
        <div className="jumbotron__avatar">
          <img
            src={avatarImg}
            width="128"
            height="128"
            className="jumbotron__avatar-img"
          />
        </div>
        <h1 className="jumbotron__name">
          <span className="jumbotron__name-text">Seong Yong-ju</span>
        </h1>
        <p className="jumbotron__role">
          <span className="jumbotron__role-text">
            Software Engineer/Systems Architect
          </span>
        </p>
        <section className="jumbotron__introduction">
          <p>
            I've been interested in developing an application since my childhood
            <br />
            and have extensive experience in engineering.
          </p>
        </section>
      </header>
    );
  }
}

export default Jumbotron;
