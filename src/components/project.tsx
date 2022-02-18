import Card from "../components/card";

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
  <section
    css={{
      color: "rgba(255, 255, 255, 0.6)",
      fontSize: "16px",
      margin: "0 0 8px 0",
      textAlign: "right",
    }}
  >
    {formatYYYYMM(startYYYYMM)} –{" "}
    {endYYYYMM !== null ? formatYYYYMM(endYYYYMM) : "working"}
    {endYYYYMM !== null
      ? "・" + formatPeriodLength(startYYYYMM, endYYYYMM)
      : null}
  </section>
);

const renderAccomplishments = (accomplishments: string[]) =>
  0 < accomplishments.length ? (
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
          fontWeight: 500,
          margin: "0 0 4px 0",
          textTransform: "uppercase",
        }}
      >
        Accomplishments
      </h4>
      <ul>
        {accomplishments.map((accomplishment, i) => (
          <li
            key={i}
            css={{
              fontSize: "16px",
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
            {accomplishment}
          </li>
        ))}
      </ul>
    </section>
  ) : null;

const Project = (props: ProjectProps) => (
  <Card
    tagName="article"
    css={{
      margin: "0 0 32px 0",
      padding: "0 0 4px 0",
    }}
  >
    <header
      role="banner"
      css={{
        background: props.themeColor,
        color: "#fff",
        margin: "0 0 16px 0",
        padding: "12px 32px 16px 32px",
      }}
    >
      {renderPeriod(props.startYYYYMM, props.endYYYYMM)}
      <h3
        css={{
          fontSize: "24px",
          fontWeight: 700,
          margin: "0 0 4px 0",
        }}
      >
        {props.name}
      </h3>
      <p
        css={{
          fontSize: "16px",
        }}
      >
        {props.company} / {props.workRole}
      </p>
    </header>
    <main
      css={{
        padding: "0 32px",
      }}
    >
      <section
        css={{
          fontSize: "16px",
          margin: "0 0 16px 0",
        }}
      >
        <p>{props.description}</p>
      </section>
      {renderAccomplishments(props.accomplishments)}
    </main>
  </Card>
);

export default Project;
