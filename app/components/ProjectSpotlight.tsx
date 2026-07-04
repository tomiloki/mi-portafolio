import Image from "next/image";

type ProjectSpotlightProps = {
  title: string;
  tagline: string;
  status: string;
  stack: string[];
  highlights: string[];
  repoUrl: string;
  liveUrl?: string;
  imageUrl: string;
  academic?: boolean;
};

export default function ProjectSpotlight({
  title,
  tagline,
  status,
  stack,
  highlights,
  repoUrl,
  liveUrl,
  imageUrl,
  academic = true,
}: ProjectSpotlightProps) {
  const shownUrl = liveUrl ?? repoUrl.replace("https://github.com/", "github.com/");

  return (
    <article className="project-card content-card">
      <div className="project-media">
        <div className="browser-bar" aria-hidden="true">
          <span className="sb-dot" />
          <span className="sb-dot" />
          <span className="sb-dot" />
          <span className="sb-url">{shownUrl}</span>
        </div>
        <div className="project-shot">
          <Image
            src={imageUrl}
            alt={`Captura de ${title}`}
            width={1440}
            height={900}
            className="shot-img"
          />
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
          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="button-primary">
              Ver demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
