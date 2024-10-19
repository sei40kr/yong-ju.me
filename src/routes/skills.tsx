import { createAsync } from "@solidjs/router";
import { For } from "solid-js";
import Container from "~/components/container";
import Skill from "~/components/skill";
import { getResume } from "~/data/resume";

const Skills = () => {
  const skills = createAsync(async () => (await getResume()).skills ?? []);
  return (
    <div class="bg-gray-100">
      <Container>
        <div class="grid grid-cols-2 gap-8 py-8">
          <For each={skills()}>
            {({ name, level }) => <Skill name={name} level={level} />}
          </For>
        </div>
      </Container>
    </div>
  );
};

export const route = {
  preload: () => getResume(),
};

export default Skills;
