import * as React from 'react';
import Card from '../components/card';

import './skill.scss';

type Progress = 'beginner' | 'intermediate' | 'advanced';

interface Props {
  name: string;
  progress: Progress;
  abilities: string[];
  experiences: string[];
}

export class Skill extends React.Component<Props, {}> {
  public render() {
    return (
      <Card tagName="article" className={`skill skill--${this.props.progress}`}>
        <header className="skill__header">
          <h3 className="skill__name">{this.props.name}</h3>
          {this.renderProgress(this.props.progress)}
        </header>
        <main className="skill__content">
          {this.renderAbilities(this.props.abilities)}
          {this.renderExperiences(this.props.experiences)}
        </main>
      </Card>
    );
  }

  private renderProgress(progress: Progress) {
    return (
      <div className={`skill__progress skill__progress--${progress}`}>
        {progress}
      </div>
    );
  }

  private renderAbilities(abilities: string[]) {
    return 0 < abilities.length ? (
      <section className="skill__abilities">
        <h4 className="skill__abilities-title">Abilities</h4>
        <ul className="skill__ability-list">
          {abilities.map((ability, i) => (
            <li key={i} className="skill__ability-item">
              {ability}
            </li>
          ))}
        </ul>
      </section>
    ) : null;
  }

  private renderExperiences(experiences: string[]) {
    return 0 < experiences.length ? (
      <section className="skill__experiences">
        <h4 className="skill__experiences-title">Experiences</h4>
        <ul className="skill__experience-list">
          {experiences.map((experience, i) => (
            <li key={i} className="skill__experience-item">
              {experience}
            </li>
          ))}
        </ul>
      </section>
    ) : null;
  }
}

export default Skill;
