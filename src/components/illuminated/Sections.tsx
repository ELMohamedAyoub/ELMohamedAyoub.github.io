import { ReactNode, useState } from "react";
import {
  CASE_STUDIES,
  CURRENTLY,
  EXPERIENCE,
  LINKS,
  MADE,
  type Inline,
  type Made,
} from "@/content/site";
import { Filigree } from "./Ornaments";

export const Section = ({ id, title, children }: { id?: string; title: string; children: ReactNode }) => (
  <section id={id} className="section" data-reveal>
    <h2 className="section-title">{title}</h2>
    <div className="section-body">{children}</div>
  </section>
);

const isExternal = (href: string) => href.startsWith("http");

export const Lit = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    className="lit"
    href={href}
    {...(isExternal(href) ? { target: "_blank", rel: "noreferrer" } : {})}
  >
    {children}
  </a>
);

export const Prose = ({ paragraphs }: { paragraphs: Inline[][] }) => (
  <div className="prose">
    {paragraphs.map((runs, i) => (
      <p key={i}>
        {runs.map((run, j) =>
          run.href ? (
            <Lit key={j} href={run.href}>
              {run.text}
            </Lit>
          ) : (
            <span key={j}>{run.text}</span>
          ),
        )}
      </p>
    ))}
  </div>
);

export const WorkList = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="rows">
      {CASE_STUDIES.map((study, i) => {
        const isOpen = open === i;
        return (
          <li key={study.title} className={`work ${isOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="row row-button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="row-main">
                <span className="row-title">{study.title}</span>
                <span className="row-meta">· {study.area}</span>
              </span>
              <span className="row-plus" aria-hidden="true" />
            </button>
            <div className="work-panel">
              <div className="work-panel-inner">
                <dl className="work-detail">
                  <dt>Problem</dt>
                  <dd>{study.problem}</dd>
                  <dt>Build</dt>
                  <dd>{study.build}</dd>
                  <dt>Outcome</dt>
                  <dd>{study.outcome}</dd>
                </dl>
                {study.href && <Lit href={study.href}>See the code →</Lit>}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Cover = ({ item, index }: { item: Made; index: number }) =>
  item.image ? (
    <img className="card-img" src={item.image} alt="" loading="lazy" width={640} height={380} />
  ) : (
    <div className="card-img card-cover" aria-hidden="true">
      <svg viewBox="0 0 120 70" preserveAspectRatio="xMidYMid slice">
        {[34, 26, 18, 10].map((r) => (
          <circle key={r} cx="60" cy="35" r={r} fill="none" stroke="currentColor" strokeWidth="0.4" />
        ))}
        <path d="M0 35 H120 M60 0 V70" stroke="currentColor" strokeWidth="0.25" />
      </svg>
      <span className="card-numeral">{["I", "II", "III", "IV", "V", "VI", "VII", "VIII"][index]}</span>
    </div>
  );

export const MadeGrid = () => (
  <div className="cards">
    {MADE.map((item, i) => {
      const inner = (
        <>
          <Filigree />
          <Cover item={item} index={i} />
          <div className="card-text">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.description}</p>
            {item.badge && (
              <span className={`badge badge-${item.badge.replace(" ", "-").toLowerCase()}`}>{item.badge}</span>
            )}
          </div>
        </>
      );
      return item.href ? (
        <a key={item.title} className="card" href={item.href} target="_blank" rel="noreferrer" data-reveal>
          {inner}
        </a>
      ) : (
        <div key={item.title} className="card" data-reveal>
          {inner}
        </div>
      );
    })}
  </div>
);

export const ExperienceList = () => (
  <ul className="rows">
    {EXPERIENCE.map((job) => (
      <li key={`${job.role}-${job.place}`} className="row">
        <span className="row-main">
          <span className="row-title">{job.role}</span>
          <span className="row-meta">· {job.place}</span>
        </span>
        <span className="row-date">{job.date}</span>
      </li>
    ))}
  </ul>
);

export const Currently = () => (
  <ul className="rows">
    {CURRENTLY.map((item) => (
      <li key={item.label} className="row">
        <span className="row-main">
          <span className="row-meta row-label">{item.label}</span>
          <span className="row-title">{item.value}</span>
        </span>
      </li>
    ))}
  </ul>
);

export const WorkWithMe = () => (
  <div className="prose">
    <p>
      Open to project work, contract AI engineering, and full-time roles. The fastest way in is a
      30-minute call about one workflow you want off your plate.
    </p>
    <p className="link-line">
      <Lit href={LINKS.calendly}>Book a call</Lit>
      <span className="dot">·</span>
      <Lit href={LINKS.email}>Email</Lit>
      <span className="dot">·</span>
      <Lit href={LINKS.linkedin}>LinkedIn</Lit>
      <span className="dot">·</span>
      <Lit href={LINKS.github}>GitHub</Lit>
    </p>
  </div>
);

export const Elsewhere = () => (
  <div className="prose">
    <p className="link-line">
      <Lit href={LINKS.github}>GitHub</Lit>
      <span className="dot">·</span>
      <Lit href={LINKS.x}>X</Lit>
      <span className="dot">·</span>
      <Lit href={LINKS.linkedin}>LinkedIn</Lit>
      <span className="dot">·</span>
      <Lit href={LINKS.email}>Say hello</Lit>
    </p>
  </div>
);
