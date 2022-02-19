import { graphql } from "gatsby";
import React from "react";
import projects from "../../content/projects.yaml";
import Container from "../components/container";
import Layout from "../components/layout";
import { Nav, NavItem } from "../components/nav";
import Project from "../components/project";

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

interface ProjectsPageProps {
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

const ProjectsPage = (props: ProjectsPageProps) => (
  <Layout siteName={props.data.site.siteMetadata.siteName}>
    <div className="bg-gray-100">
      <Nav>
        <NavItem to="/projects" active>
          Projects
        </NavItem>
        <NavItem to="/skills">Skills</NavItem>
      </Nav>
      <Container>{renderProjects(projects)}</Container>
    </div>
  </Layout>
);

export default ProjectsPage;
