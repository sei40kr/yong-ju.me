import { For, Show } from "solid-js";
import Card from "~/components/card";

export interface ProjectProps {
  name: string | null;
  description: string | null;
  highlights: string[];
  startDate: Date | null;
  endDate: Date | null;
  roles: string[];
  entity: string | null;
}

const formatYearAndMonth = (date: Date) => {
  return `${date.getFullYear()}/${date.getMonth() + 1}`;
};

const formatDuration = (startDate: Date, endDate: Date) => {
  const diffMonths = Math.floor(
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth()),
  );
  const months = diffMonths % 12;
  const years = Math.floor(diffMonths / 12);
  return `${years > 0 ? `${years}y ` : ""}${months}m`;
};

const Project = ({
  name,
  description,
  highlights,
  startDate,
  endDate,
  roles,
  entity,
}: ProjectProps) => (
  <Card tagName="article" className="mb-8 pb-1">
    <header role="banner" class="mb-4 px-8 pb-4 pt-3 bg-gray-700 text-white">
      <section class="mb-2 text-right text-base text-white/60">
        {startDate ? `${formatYearAndMonth(startDate)} ` : ""}–
        {` ${endDate ? formatYearAndMonth(endDate) : "working"}`}
        {startDate && endDate ? "・" + formatDuration(startDate, endDate) : ""}
      </section>
      <h3 class="mb-1 text-2xl font-bold">{name}</h3>
      <p class="text-base">
        {entity}
        {entity && 0 < roles.length ? " / " : ""}
        {roles.join(", ")}
      </p>
    </header>
    <main class="px-8">
      <section class="mb-4 text-base">
        <p>{description}</p>
      </section>
      <Show when={0 < highlights.length}>
        <section class="mb-4">
          <h4 class="mb-1 font-montserrat text-sm font-medium uppercase text-slate-500">
            Highlights
          </h4>
          <ul>
            <For each={highlights}>
              {(highlight) => (
                <li class="text-base before:-ml-8 before:inline-block before:w-8 before:text-right before:text-slate-500 before:content-['・']">
                  {highlight}
                </li>
              )}
            </For>
          </ul>
        </section>
      </Show>
    </main>
  </Card>
);

export default Project;
