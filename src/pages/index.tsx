import { graphql } from "gatsby";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import Jumbotron from "../components/jumbotron";
import Project from "../components/project";
import Section from "../components/section";
import Skill from "../components/skill";

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
  progress: "beginner" | "intermediate" | "advanced";
  abilities: Array<{ content: string }>;
  experiences: Array<{ content: string }>;
}

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string;
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
        siteName
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

const renderSkills = (skills: SkillModel[]) => (
  <div
    css={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: "32px 0",
    }}
  >
    {skills.map((skill, i) => (
      <Skill
        key={i}
        name={skill.name}
        progress={skill.progress}
        abilities={skill.abilities.map((ability) => ability.content)}
        experiences={skill.experiences.map((experience) => experience.content)}
      />
    ))}
  </div>
);

const renderProjects = (projects: ProjectModel[]) => (
  <div
    css={{
      padding: "32px 0",
    }}
  >
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

const IndexPage = (props: IndexPageProps) => (
  <Fragment>
    <Helmet>
      <title>{props.data.site.siteMetadata.siteName}</title>
    </Helmet>
    <div
      css={{
        background: "#f5f5f5",
        color: "#212121",
      }}
    >
      <Jumbotron />
      <Section title="Skills">
        {renderSkills(props.data.site.siteMetadata.skills)}
      </Section>
      <Section title="Projects">
        {renderProjects(props.data.site.siteMetadata.projects)}
      </Section>
    </div>
  </Fragment>
);

export default IndexPage;
