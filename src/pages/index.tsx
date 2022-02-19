import { graphql } from "gatsby";
import React from "react";
import projects from "../../content/projects.yaml";
import skills from "../../content/skills.yaml";
import Jumbotron from "../components/jumbotron";
import Layout from "../components/layout";
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
      }
    }
  }
`;

const renderSkills = (skills: SkillModel[]) => (
  <div className="grid grid-cols-2 gap-8 py-8">
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
  <div className="my-8">
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
  <Layout siteName={props.data.site.siteMetadata.siteName}>
    <div className="bg-gray-100">
      <Jumbotron />
      <Section title="Skills">{renderSkills(skills)}</Section>
      <Section title="Projects">{renderProjects(projects)}</Section>
    </div>
  </Layout>
);

export default IndexPage;
