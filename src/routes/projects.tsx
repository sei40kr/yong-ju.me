import Container from "~/components/container";
import Project from "~/components/project";
import { For } from "solid-js";
import { createAsync } from "@solidjs/router";
import { getResume } from "~/data/resume";

const Projects = () => {
  const projects = createAsync(async () => (await getResume()).projects ?? []);
  return (
    <div class="bg-gray-100 pt-8 pb-8">
      <Container>
        <For each={projects()}>
          {({
            name,
            description,
            highlights,
            startDate,
            endDate,
            roles,
            entity,
          }) => (
            <Project
              name={name ?? null}
              description={description ?? null}
              highlights={highlights ?? []}
              startDate={startDate ? new Date(startDate) : null}
              endDate={endDate ? new Date(endDate) : null}
              roles={roles ?? []}
              entity={entity ?? null}
            />
          )}
        </For>
      </Container>
    </div>
  );
};

export const route = {
  preload: () => getResume(),
};

export default Projects;
