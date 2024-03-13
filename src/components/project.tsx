import { For, Show } from "solid-js";
import Card from "~/components/card";

const companyColorByName = new Map<string, string>([
  ["Pega Japan K.K.", "#15183f"],
  ["TeamSpirit Inc.", "#107cad"],
  ["Works Applications Co., Ltd.", "#20334c"],
]);

const formatISO8601Date = (iso8601date: string) => {
  const [yyyy, mm, dd] = iso8601date.split("-");
  return `${yyyy}${mm ? `/${mm}` : ""}${dd ? `/${dd}` : ""}`;
};

const formatISO8601DatePeriodLength = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const startMonth = start.getMonth();
  const endMonth = end.getMonth();
  const years = end.getFullYear() - start.getFullYear() + (endMonth < startMonth ? -1 : 0)
  const months = (endMonth - startMonth + 12) % 12;
  return `${0 < years ? `${years}y` : ""} ${0 < months ? `${months}m` : ""}`.trim();
};

const renderPeriod = (startDate: string, endDate: string | null) => (
  <section class="mb-2 text-right text-base text-white/60">
    {formatISO8601Date(startDate)} – {endDate !== null ? formatISO8601Date(endDate) : "working"}
    {endDate !== null ? `・${formatISO8601DatePeriodLength(startDate, endDate)}` : null}
  </section>
);

const renderHighlights = (highlights: string[]) =>
  <Show when={highlights && 0 < highlights.length}>
    <section class="mb-4">
      <h4 class="mb-1 font-montserrat text-sm font-medium uppercase text-slate-500">
        Accomplishments
      </h4>
      <ul>
        <For each={highlights}>
          {highlight => (
            <li
              class="text-base before:-ml-8 before:inline-block before:w-8 before:text-right before:text-slate-500 before:content-['・']"
            >
              {highlight}
            </li>
          )}
        </For>
      </ul>
    </section>
  </Show>;

interface ProjectProps {
  project: ProjectObject;
}

const Project = ({ project }: ProjectProps) => {
  const {
    name,
    description,
    highlights,
    startDate,
    endDate,
    roles,
    entity
  } = project
  const companyColor = companyColorByName.get(entity);

  return (
    <Card tagName="article" className="mb-8 pb-1">
      <header
        role="banner"
        class="mb-4 px-8 pb-4 pt-3 bg-gray-800 text-white"
        style={{ "background-color": companyColor }}
      >
        {renderPeriod(startDate, endDate || null)}
        <h3 class="mb-1 text-2xl font-bold">{name}</h3>
        <p class="text-base">
          {entity} / {roles.join(", ")}
        </p>
      </header>
      <main class="px-8">
        <section class="mb-4 text-base">
          <p>{description}</p>
        </section>
        {renderHighlights(highlights)}
      </main>
    </Card >
  )
};

export default Project;
