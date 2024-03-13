import Container from "~/components/container";
import Project from "~/components/project";
import { For } from "solid-js";

interface ProjectObject {
  startYYYYMM: string;
  endYYYYMM: string | null;
  name: string;
  company: string;
  workRole: string;
  themeColor: string;
  description: string;
  accomplishments: Array<{ content: string }>;
}

const projects: ProjectObject[] = [
  {
    startYYYYMM: "201811",
    endYYYYMM: null,
    name: "Subsystems of a Huge Financial System",
    company: "Pega Japan K.K.",
    workRole: "Systems Architect",
    themeColor: "#15183f",
    description: "Subsystems of a huge financial system. Built on Pega Platform.",
    accomplishments: [
      { content: "Develop some features" }
    ]
  },
  {
    startYYYYMM: "201709",
    endYYYYMM: "201806",
    name: "Attendance & Time Tracking System",
    company: "TeamSpirit Inc.",
    workRole: "Frontend Engineer",
    themeColor: "#107cad",
    description:
      "An enterprise application to provide an attendance management & time tracking. Built on Sales Cloud.",
    accomplishments: [
      { content: "Design specifications & develop some features" },
      { content: "Setup static type checking for the project" }
    ],
  },
  {
    startYYYYMM: "201702",
    endYYYYMM: "201704",
    name: "Frontend Developer Tools",
    company: "Works Applications Co., Ltd.",
    workRole: "Frontend Engineer",
    themeColor: "#20334c",
    description: "Frontend developer tools to improve product developers' productivities.",
    accomplishments: []
  },
  {
    startYYYYMM: "201610",
    endYYYYMM: "201701",
    name: "Domestic Datasync Framework",
    company: "Works Applications Co., Ltd.",
    workRole: "Frontend & Backend & Database Engineer",
    themeColor: "#20334c",
    description: "A domestic framework to sync data between RDB and Cassandra.",
    accomplishments: [
      { content: "Develop a distributed batch to sync data in bulk" },
      { content: "Create a testing tool to enable the framework users to test their modules easily" },
      { content: "Develop an useful feature to reproduce data-related issues in development environment" }
    ]
  },
  {
    startYYYYMM: "201608",
    endYYYYMM: "201609",
    name: "Employee Onboarding System Prototyping",
    company: "Works Applications Co., Ltd.",
    workRole: "Frontend Engineer",
    themeColor: "#20334c",
    description: "A prototype of an Employee Onboarding subsystem of an ERP product.",
    accomplishments: [
      { content: "Design & develop some mockup screens" }
    ]
  }
]

const renderProjects = (projects: ProjectObject[]) => (
  <For each={projects}>
    {project => (
      <Project
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
    )}
  </For>
);

const Projects = () => (
  <div class="bg-gray-100 pt-8 pb-8">
    <Container>{renderProjects(projects)}</Container>
  </div>
);

export default Projects;
