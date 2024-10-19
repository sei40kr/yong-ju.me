import { For, Show } from "solid-js";
import Card from "~/components/card";

type Level = "Beginner" | "Intermediate" | "Advanced";

const renderLevel = (level: Level) => (
  <div
    class={`mb-4 font-montserrat text-sm text-${level.toLowerCase()} uppercase`}
  >
    {level}
  </div>
);

const Skill = ({ name, level }: Skill) => (
  <Card
    tagName="article"
    className={`border-t-3 border-${level?.toLowerCase()} px-8 pb-1 pt-4 md:w-full`}
  >
    <header>
      <h3 class="mb-1 text-2xl font-bold">{name}</h3>
      {renderLevel((level ?? "Beginner") as Level)}
    </header>
  </Card>
);

export default Skill;
