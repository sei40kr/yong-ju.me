import * as React from 'react';
import Card from '../components/card';
import './project.scss';

interface Props {
  startYYYYMM: string;
  endYYYYMM: string | null;
  name: string;
  company: string;
  workRole: string;
  themeColor: string;
  description: string;
  accomplishments: string[];
}

export class Project extends React.Component<Props, {}> {
  public render() {
    return (
      <Card tagName="article" className="project">
        <header
          role="banner"
          className="project__header"
          style={{ backgroundColor: this.props.themeColor }}
        >
          {this.renderPeriod(this.props.startYYYYMM, this.props.endYYYYMM)}
          <h3 className="project__name">{this.props.name}</h3>
          <p className="project__company-and-role">
            {this.props.company} / {this.props.workRole}
          </p>
        </header>
        <main className="project__content">
          <section className="project__description">
            <p>{this.props.description}</p>
          </section>
          {this.renderAccomplishments(this.props.accomplishments)}
        </main>
      </Card>
    );
  }

  private renderPeriod(startYYYYMM: string, endYYYYMM: string | null) {
    return (
      <section className="project__period">
        {this.formatYYYYMM(startYYYYMM)} –{' '}
        {endYYYYMM !== null ? this.formatYYYYMM(endYYYYMM) : 'working'}
        {endYYYYMM !== null
          ? '・' + this.formatPeriodLength(startYYYYMM, endYYYYMM)
          : null}
      </section>
    );
  }

  private formatYYYYMM(strYYYYMM: string) {
    const yyyy = strYYYYMM.slice(0, 4);
    const MM = strYYYYMM.slice(4, 6);

    return `${yyyy}/${MM}`;
  }

  private formatPeriodLength(startYYYYMM: string, endYYYYMM: string) {
    const startYYYY = Number(startYYYYMM.slice(0, 4));
    const startMM = Number(startYYYYMM.slice(4, 6));
    const endYYYY = Number(endYYYYMM.slice(0, 4));
    const endMM = Number(endYYYYMM.slice(4, 6));

    const t = (endYYYY - startYYYY) * 12 + (endMM - startMM + 1);
    const months = t % 12;
    const years = (t - months) / 12;

    return (
      (years !== 0 ? `${years}y ` : '') +
      (years === 0 || months !== 0 ? `${months}m` : '')
    );
  }

  private renderAccomplishments(accomplishments: string[]) {
    return 0 < accomplishments.length ? (
      <section className="project__accomplishments">
        <h4 className="project__accomplishments-title">Accomplishments</h4>
        <ul className="project__accomplishment-list">
          {accomplishments.map((accomplishment, i) => (
            <li key={i} className="project__accomplishment-item">
              {accomplishment}
            </li>
          ))}
        </ul>
      </section>
    ) : null;
  }
}

export default Project;
