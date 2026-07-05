type Metric = { value: string; label: string };

type ProjectDataSpotlightProps = {
  title: string;
  tagline: string;
  status: string;
  stack: string[];
  highlights: string[];
  metrics: Metric[];
  repoUrl: string;
  reportUrl?: string;
  academic?: boolean;
};

export default function ProjectDataSpotlight({
  title,
  tagline,
  status,
  stack,
  highlights,
  metrics,
  repoUrl,
  reportUrl,
  academic = true,
}: ProjectDataSpotlightProps) {
  return (
    <article className="project-card content-card">
      <div className="project-metrics">
        <p className="metrics-head">Resultados del modelo</p>
        <div className="metric-grid">
          {metrics.map((metric) => (
            <div key={metric.label} className="metric-stat">
              <span className="metric-num">{metric.value}</span>
              <span className="metric-lab">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="project-body">
        <div className="badge-row">
          {academic && <span className="badge badge-academic">Proyecto académico</span>}
          <span className="badge">{status}</span>
        </div>

        <h3>{title}</h3>
        <p className="project-desc">{tagline}</p>

        <div className="chip-cloud">
          {stack.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>

        <ul className="bullet-list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project-actions">
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="button-secondary">
            Repo
          </a>
          {reportUrl ? (
            <a href={reportUrl} target="_blank" rel="noopener noreferrer" className="button-primary">
              Ver informe
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
