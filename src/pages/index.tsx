import Img from 'gatsby-image';
import Link from 'gatsby-link';
import * as React from 'react';

import ExperienceItem from '../components/ExperienceItem';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Main from '../components/Main';
import Section from '../components/Section';
import SkillGroup from '../components/SkillGroup';
import SkillItem from '../components/SkillItem';

export interface IProps {
  data: {
    site: {
      siteMetadata: {
        copyrighter: string;
        copyrightYears: string;

        profile: {
          name: string;
          message: string;
        };

        experiences: IExperience[];

        skillGroups: ISkillGroup[];
      };
    };
    jumbotronBackgroundImage: object;
  };
}

class IndexPage extends React.Component<IProps> {
  public renderExperiences() {
    return (
      <Section title="経歴" secondaryTitle="Experiences" bgColor="light-gray">
        <div className="container py-5">
          {this.props.data.site.siteMetadata.experiences.map(
            (experience: IExperience, index: number) => (
              <ExperienceItem
                key={index}
                name={experience.title}
                date={experience.date}
              />
            )
          )}
        </div>
      </Section>
    );
  }

  public renderSkillGroups() {
    return (
      <Section title="スキル" secondaryTitle="Skills" bgColor="white">
        <div className="container py-4">
          {this.props.data.site.siteMetadata.skillGroups.map(
            (skillGroup: ISkillGroup, groupIndex: number) => (
              <SkillGroup
                key={groupIndex}
                title={skillGroup.title}
                secondaryTitle={skillGroup.secondaryTitle}
              >
                {skillGroup.items.map((skill: ISkill, index: number) => (
                  <SkillItem
                    key={index}
                    name={skill.name}
                    progress={skill.progress}
                  />
                ))}
              </SkillGroup>
            )
          )}
        </div>
      </Section>
    );
  }

  public render() {
    return (
      <div>
        <Jumbotron
          name={this.props.data.site.siteMetadata.profile.name}
          message={this.props.data.site.siteMetadata.profile.message}
          backgroundImage={this.props.data.jumbotronBackgroundImage}
        />
        <Main>
          {this.renderExperiences()}
          {this.renderSkillGroups()}
        </Main>
        <Footer
          copyrightYears={this.props.data.site.siteMetadata.copyrightYears}
          copyrighter={this.props.data.site.siteMetadata.copyrighter}
        />
      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        copyrighter
        copyrightYears
        profile {
          name
          message
        }
        experiences {
          title
          date
        }
        skillGroups {
          title
          secondaryTitle
          items {
            name
            progress
          }
        }
      }
    }

    jumbotronBackgroundImage: imageSharp(id: { regex: "/jumbotron-bg.png/" }) {
      sizes {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
