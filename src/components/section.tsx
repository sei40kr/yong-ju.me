import classNames from 'classnames';
import * as React from 'react';

import './section.scss';

interface SectionProps {
  title: string;
  className?: string;
}

export default class Section extends React.Component<SectionProps, {}> {
  public render() {
    return (
      <section className={classNames('section', this.props.className)}>
        <header className="section__header">
          <h2 className="section__title">{this.props.title}</h2>
        </header>
        <div className="section__content-outer">
          <main className="section__content">{this.props.children}</main>
        </div>
      </section>
    );
  }
}
