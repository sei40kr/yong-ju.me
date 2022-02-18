import Card from "../components/card";

type Progress = "beginner" | "intermediate" | "advanced";

export interface SkillProps {
  name: string;
  progress: Progress;
  abilities: string[];
  experiences: string[];
}

const renderProgress = (progress: Progress) => (
  <div
    css={{
      color: {
        advanced: "#d32f2f",
        beginner: "#388e3c",
        intermediate: "#f57c00",
      }[progress],
      fontFamily: "Montserrat, sans-serif",
      fontSize: "14px",
      margin: "0 0 16px 0",
      textTransform: "uppercase",
    }}
  >
    {progress}
  </div>
);

const renderAbilities = (abilities: string[]) =>
  0 < abilities.length ? (
    <section
      css={{
        margin: "0 0 16px 0",
      }}
    >
      <h4
        css={{
          color: "#616161",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "14px",
          margin: "0 0 4px 0",
          textTransform: "uppercase",
        }}
      >
        Abilities
      </h4>
      <ul>
        {abilities.map((ability, i) => (
          <li
            key={i}
            css={{
              "&::before": {
                color: "#616161",
                content: "'・'",
                display: "inline-block",
                margin: "0 0 0 -32px",
                textAlign: "right",
                width: "32px",
              },
            }}
          >
            {ability}
          </li>
        ))}
      </ul>
    </section>
  ) : null;

const renderExperiences = (experiences: string[]) =>
  0 < experiences.length ? (
    <section
      css={{
        margin: "0 0 16px 0",
      }}
    >
      <h4
        css={{
          color: "#616161",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "14px",
          margin: "0 0 4px 0",
          textTransform: "uppercase",
        }}
      >
        Experiences
      </h4>
      <ul>
        {experiences.map((experience, i) => (
          <li
            key={i}
            css={{
              "&::before": {
                color: "#616161",
                content: "'・'",
                display: "inline-block",
                margin: "0 0 0 -32px",
                textAlign: "right",
                width: "32px",
              },
            }}
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
    css={{
      borderTopColor: {
        advanced: "#d32f2f",
        beginner: "#388e3c",
        intermediate: "#f57c00",
      }[props.progress],
      borderTopStyle: "solid",
      borderTopWidth: "3px",
      flex: "calc(50% - 16px) 0 0",
      margin: "0 0 32px 0",
      padding: "16px 32px 4px 32px",
      "@media screen and (max-width: 768px)": {
        flex: "100% 0 0",
      },
    }}
  >
    <header>
      <h3
        css={{
          flexGrow: 1,
          fontSize: "24px",
          fontWeight: 700,
          margin: "0 0 4px 0",
        }}
      >
        {props.name}
      </h3>
      {renderProgress(props.progress)}
    </header>
    <main>
      {renderAbilities(props.abilities)}
      {renderExperiences(props.experiences)}
    </main>
  </Card>
);

export default Skill;
