import { GetStaticProps } from "next";
import Container from "@/components/Container";
import { Nav, NavItem } from "@/components/Nav";
import Project from "@/components/Project";
import { loadProjects } from "@/utils/loadProjects";

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

interface ProjectsPageProps {
  projects: ProjectModel[];
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => (
  <div className="bg-gray-100">
    <Nav>
      <NavItem to="/projects" active>
        Projects
      </NavItem>
      <NavItem to="/skills">Skills</NavItem>
    </Nav>
    <Container>{renderProjects(projects!)}</Container>
  </div>
);

export default ProjectsPage;

export const getStaticProps: GetStaticProps<ProjectsPageProps> = async () => ({
  props: {
    projects: await loadProjects(),
  },
});
