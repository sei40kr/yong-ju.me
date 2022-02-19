import React from "react";
import Card from "../components/card";

type Progress = "beginner" | "intermediate" | "advanced";

export interface SkillProps {
  name: string;
  progress: Progress;
  abilities: string[];
  experiences: string[];
}

const renderProgress = (progress: Progress) => (
  <div className={`mb-4 font-montserrat text-sm text-${progress} uppercase`}>
    {progress}
  </div>
);

const renderAbilities = (abilities: string[]) =>
  0 < abilities.length ? (
    <section className="mb-4">
      <h4 className="mb-1 font-montserrat text-sm uppercase text-[#616161]">
        Abilities
      </h4>
      <ul>
        {abilities.map((ability, i) => (
          <li
            key={i}
            className="before:-ml-8 before:inline-block before:w-8 before:text-right before:text-[#616161] before:content-['・']"
          >
            {ability}
          </li>
        ))}
      </ul>
    </section>
  ) : null;

const renderExperiences = (experiences: string[]) =>
  0 < experiences.length ? (
    <section className="mb-4">
      <h4 className="mb-1 font-montserrat text-sm uppercase text-[#616161]">
        Experiences
      </h4>
      <ul>
        {experiences.map((experience, i) => (
          <li
            key={i}
            className="before:-ml-8 before:inline-block before:w-8 before:text-right before:text-[#616161] before:content-['・']"
          >
            {experience}
          </li>
        ))}
      </ul>
    </section>
  ) : null;

const Skill = (props: SkillProps) => (
  <Card
    tagName="article"
    className={`mb-8 shrink-0 basis-[calc(50%-16px)] border-t-3 border-${props.progress} px-8 pb-1 pt-4 md:w-full`}
  >
    <header>
      <h3 className="mb-1 text-2xl font-bold">{props.name}</h3>
      {renderProgress(props.progress)}
    </header>
    <main>
      {renderAbilities(props.abilities)}
      {renderExperiences(props.experiences)}
    </main>
  </Card>
);

export default Skill;
