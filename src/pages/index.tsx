import { graphql } from 'gatsby';
import * as React from 'react';
import Jumbotron from '../components/jumbotron';
import Project from '../components/project';
import Section from '../components/section';
import Skill from '../components/skill';
import './index.scss';

interface ProjectModel {
  startYYYYMM: string;
  endYYYYMM: string;
  name: string;
  company: string;
  workRole: string;
  themeColor: string;
  description: string;
  accomplishments: Array<{ content: string }>;
}

interface SkillModel {
  name: string;
  progress: 'beginner' | 'intermediate' | 'advanced';
  abilities: Array<{ content: string }>;
  experiences: Array<{ content: string }>;
}

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        skills: SkillModel[];
        projects: ProjectModel[];
      };
    };
  };
}

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        skills {
          name
          progress
          abilities {
            content
          }
          experiences {
            content
          }
        }
        projects {
          startYYYYMM
          endYYYYMM
          name
          company
          workRole
          themeColor
          description
          accomplishments {
            content
          }
        }
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <div className="index-page">
        <Jumbotron />
        <Section title="Skills">
          {this.renderSkills(this.props.data.site.siteMetadata.skills)}
        </Section>
        <Section title="Projects">
          {this.renderProjects(this.props.data.site.siteMetadata.projects)}
        </Section>
      </div>
    );
  }

  private renderSkills(skills: SkillModel[]) {
    return (
      <div className="index-page__skills">
        {skills.map((skill, i) => (
          <Skill
            key={i}
            name={skill.name}
            progress={skill.progress}
            abilities={skill.abilities.map((ability) => ability.content)}
            experiences={skill.experiences.map(
              (experience) => experience.content
            )}
          />
        ))}
      </div>
    );
  }

  private renderProjects(projects: ProjectModel[]) {
    return (
      <div className="index-page__projects">
        {projects.map((project, i) => (
          <Project
            key={i}
            startYYYYMM={project.startYYYYMM}
            endYYYYMM={project.endYYYYMM}
            name={project.name}
            company={project.company}
            workRole={project.workRole}
            themeColor={project.themeColor}
            description={project.description}
            accomplishments={project.accomplishments.map(
              (accomplishment) => accomplishment.content
            )}
          />
        ))}
      </div>
    );
  }
}
