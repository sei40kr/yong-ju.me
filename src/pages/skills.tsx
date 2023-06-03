import { graphql } from "gatsby";
import React from "react";
import skills from "../../content/skills.yaml";
import Container from "../components/container";
import Layout from "../components/layout";
import { Nav, NavItem } from "../components/nav";
import Skill from "../components/skill";

interface SkillModel {
  name: string;
  progress: "beginner" | "intermediate" | "advanced";
  abilities: Array<{ content: string }>;
  experiences: Array<{ content: string }>;
}

interface SkillsPageProps {
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

const SkillsPage = (props: SkillsPageProps) => (
  <Layout siteName={props.data.site.siteMetadata.siteName}>
    <div className="bg-gray-100">
      <Nav>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/skills" active>
          Skills
        </NavItem>
      </Nav>
      <Container>{renderSkills(skills)}</Container>
    </div>
  </Layout>
);

export default SkillsPage;
