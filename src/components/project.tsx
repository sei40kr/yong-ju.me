import { For, Show } from "solid-js";
import Card from "~/components/card";

export interface ProjectProps {
  startYYYYMM: string;
  endYYYYMM: string | null;
  name: string;
  company: string;
  workRole: string;
  themeColor: string;
  description: string;
  accomplishments: string[];
}

const formatYYYYMM = (strYYYYMM: string) => {
  const yyyy = strYYYYMM.slice(0, 4);
  const MM = strYYYYMM.slice(4, 6);

  return `${yyyy}/${MM}`;
};

const formatPeriodLength = (startYYYYMM: string, endYYYYMM: string) => {
  const startYYYY = Number(startYYYYMM.slice(0, 4));
  const startMM = Number(startYYYYMM.slice(4, 6));
  const endYYYY = Number(endYYYYMM.slice(0, 4));
  const endMM = Number(endYYYYMM.slice(4, 6));

  const t = (endYYYY - startYYYY) * 12 + (endMM - startMM + 1);
  const months = t % 12;
  const years = (t - months) / 12;

  return (
    (years !== 0 ? `${years}y ` : "") +
    (years === 0 || months !== 0 ? `${months}m` : "")
  );
};

const renderPeriod = (startYYYYMM: string, endYYYYMM: string | null) => (
  <section class="mb-2 text-right text-base text-white/60">
    {formatYYYYMM(startYYYYMM)} –{" "}
    {endYYYYMM !== null ? formatYYYYMM(endYYYYMM) : "working"}
    {endYYYYMM !== null
      ? "・" + formatPeriodLength(startYYYYMM, endYYYYMM)
      : null}
  </section>
);

const renderAccomplishments = (accomplishments: string[]) =>
  <Show when={0 < accomplishments.length}>
    <section class="mb-4">
      <h4 class="mb-1 font-montserrat text-sm font-medium uppercase text-slate-500">
        Accomplishments
      </h4>
      <ul>
        <For each={accomplishments}>
          {accomplishment => (
            <li
              class="text-base before:-ml-8 before:inline-block before:w-8 before:text-right before:text-slate-500 before:content-['・']"
            >
              {accomplishment}
            </li>
          )}
        </For>
      </ul>
    </section>
  </Show>;

const Project = (props: ProjectProps) => (
  <Card tagName="article" className="mb-8 pb-1">
    <header
      role="banner"
      class="mb-4 px-8 pb-4 pt-3 text-white"
      style={{ "background-color": props.themeColor }}
    >
      {renderPeriod(props.startYYYYMM, props.endYYYYMM)}
      <h3 class="mb-1 text-2xl font-bold">{props.name}</h3>
      <p class="text-base">
        {props.company} / {props.workRole}
      </p>
    </header>
    <main class="px-8">
      <section class="mb-4 text-base">
        <p>{props.description}</p>
      </section>
      {renderAccomplishments(props.accomplishments)}
    </main>
  </Card>
);

export default Project;
