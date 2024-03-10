import { For, Show } from "solid-js";
import Card from "~/components/card";

type Progress = "beginner" | "intermediate" | "advanced";

export interface SkillProps {
  name: string;
  progress: Progress;
  abilities: string[];
  experiences: string[];
}

const renderProgress = (progress: Progress) => (
  <div class={`mb-4 font-montserrat text-sm text-${progress} uppercase`}>
    {progress}
  </div>
);

const renderAbilities = (abilities: string[]) =>
  <Show when={0 < abilities.length}>
    <section class="mb-4">
      <h4 class="mb-1 font-montserrat text-sm uppercase text-slate-500">
        Abilities
      </h4>
      <ul>
        <For each={abilities}>
          {(ability) => (
            <li
              class="before:-ml-8 before:inline-block before:w-8 before:text-right before:text-slate-500 before:content-['・']"
            >
              {ability}
            </li>
          )}
        </For>
      </ul>
    </section>
  </Show>;

const renderExperiences = (experiences: string[]) =>
  <Show when={0 < experiences.length}>
    <section class="mb-4">
      <h4 class="mb-1 font-montserrat text-sm uppercase text-slate-500">
        Experiences
      </h4>
      <ul>
        <For each={experiences}>
          {experience => (
            <li
              class="before:-ml-8 before:inline-block before:w-8 before:text-right before:text-slate-500 before:content-['・']"
            >
              {experience}
            </li>
          )}
        </For>
      </ul>
    </section>
  </Show>;

const Skill = (props: SkillProps) => (
  <Card
    tagName="article"
    className={`border-t-3 border-${props.progress} px-8 pb-1 pt-4 md:w-full`}
  >
    <header>
      <h3 class="mb-1 text-2xl font-bold">{props.name}</h3>
      {renderProgress(props.progress)}
    </header>
    <main>
      {renderAbilities(props.abilities)}
      {renderExperiences(props.experiences)}
    </main>
  </Card>
);

export default Skill;
