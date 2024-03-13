import Container from "~/components/container";
import { For, Show, createResource } from "solid-js";
import Project from "~/components/project";
import { ProjectObject } from "~/models";

const renderProjects = (projects: ProjectObject[]) => (
  <For each={projects}>
    {project => (
      <Project project={project} />
    )}
  </For>
);

const Projects = () => {
  const fetchData = async () => (await fetch("http://jsonresume.yong-ju.me/resume.json")).json();
  const [data] = createResource(fetchData);

  return (
    <div class="bg-gray-100 pt-8 pb-8">
      <Show when={!data.loading} fallback="Loading">
        <Container>{renderProjects(data().projects)}</Container>
      </Show>
    </div>
  )
};

export default Projects;
