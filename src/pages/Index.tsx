import { FormEvent, ReactNode, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const CONTACT_EMAIL = "ayubmousati@gmail.com";
const CALENDLY_URL = "https://calendly.com/ayubmousati/30min";
const PHONE = "[removed]";

const proof = [
  { value: "60%", label: "less manual prospecting time" },
  { value: "40%", label: "better pipeline follow-up" },
  { value: "30%", label: "better resource utilisation" },
  { value: "91%", label: "cardiac risk model accuracy" },
];

const services = [
  {
    title: "Agent systems",
    description:
      "For work that needs judgment, context, and more than one step. I build agents with tools, memory, review gates, and clear failure paths.",
    examples: "Sales follow-up, procurement, intake, research, operations",
  },
  {
    title: "RAG and knowledge tools",
    description:
      "For teams sitting on useful documents that nobody can search quickly. I turn that material into grounded answers, drafts, and decisions.",
    examples: "Internal search, onboarding, support, policy, clinical guidance",
  },
  {
    title: "System integrations",
    description:
      "For the work trapped between tools. I connect CRM, ERP, databases, APIs, inboxes, and automation platforms into one tracked flow.",
    examples: "Salesforce, Odoo, n8n, Zapier, REST APIs, PostgreSQL",
  },
  {
    title: "Internal AI products",
    description:
      "For workflows that need a proper interface, not another chat window. I build the backend, dashboard, review queue, and deployment.",
    examples: "React, Next.js, FastAPI, Node.js, Docker, cloud",
  },
];

const caseStudies = [
  {
    number: "01",
    company: "Sales operations",
    title: "A Salesforce co-agent that tells reps what to do next.",
    problem:
      "The blocker was not missing data. It was buried data. Reps had to inspect each opportunity, work out what was holding it up, then write the follow-up themselves.",
    build:
      "One agent queries Salesforce and surfaces the blocked deal. A second drafts the next message. The rep reviews it before anything is sent.",
    outcome:
      "The wider sales automation suite cut manual prospecting time by roughly 60% and improved pipeline follow-up by about 40%.",
    nodes: ["Salesforce", "Blocker agent", "Draft agent", "Human review", "Send"],
    tags: ["Multi-agent", "Salesforce API", "Human review", "Evals"],
  },
  {
    number: "02",
    company: "Procurement",
    title: "One procurement flow instead of four disconnected handoffs.",
    problem:
      "Demand planning, supplier choice, purchase-order creation, and buyer notification lived as separate steps with pricing checks happening late.",
    build:
      "Dedicated subagents own each phase. A retrieval layer checks supplier history and flags unusual pricing before the order reaches approval.",
    outcome:
      "The team gets one traceable flow from demand to notification, with exceptions raised before they become purchase orders.",
    nodes: ["Demand", "Supplier", "Price check", "Create PO", "Notify buyer"],
    tags: ["RAG", "Subagents", "Workflow orchestration", "Python"],
  },
  {
    number: "03",
    company: "Public product · Healthcare",
    title: "A voice check-in that becomes usable clinical data.",
    problem:
      "Post-surgery updates arrive as conversation. Care teams need pain scores, symptoms, emotional state, and alert conditions in a form they can scan.",
    build:
      "The system transcribes a bilingual voice session, extracts structured fields, checks alert rules, and adds the result to a clinician dashboard.",
    outcome:
      "One patient conversation becomes a structured record, a recovery update, and an alert when the reported symptoms cross a defined threshold.",
    image: "/ai-doctor-dashboard.png",
    imageAlt:
      "Voice-enabled AI medical assistant interface from Mohamed Ayoub's post-surgery monitoring project",
    href: "https://github.com/ELMohamedAyoub/Your_AI_Doctor",
    tags: ["Voice AI", "Clinical extraction", "RAG", "Next.js"],
  },
];

const moreWork = [
  {
    eyebrow: "IoT + machine learning",
    title: "Cardiovascular risk prediction",
    description:
      "Sensor pipeline and clinical dashboard built on data from 200 IoT patient devices.",
    metrics: ["91% accuracy", "15% fewer false positives", "1,000+ data points/day"],
  },
  {
    eyebrow: "Assistive AI",
    title: "Communication app for autistic children",
    description:
      "Transformer-based communication support with emotional-tone detection and adaptive learning.",
    metrics: ["50-child pilot", "20% response gain", "30% longer sessions"],
    href: "https://github.com/ELMohamedAyoub/AI-Powered-Autism-Detection-Diagnosis-and-Therapy-App",
  },
  {
    eyebrow: "Clinic operations",
    title: "Patient management and analytics",
    description:
      "Scheduling, records, and reporting for a dental clinic handling about 200 patients each day.",
    metrics: ["200 patients/day", "25% less admin work", "One shared record flow"],
  },
];

const experience = [
  {
    date: "Feb 2026 · Apr 2026",
    role: "AI Engineer",
    company: "Remote · Contract",
    summary:
      "Built four agent systems across sales and procurement, plus custom connectors and evaluation suites.",
  },
  {
    date: "Jun 2025 · Aug 2025",
    role: "Software Developer",
    company: "Laboratoire National Mohammed VI · Casablanca",
    summary:
      "Built live logistics tracking, route planning, inventory tools, and operational dashboards for a fleet of more than 50 vehicles.",
  },
  {
    date: "Jan 2025 · Oct 2025",
    role: "AI Developer and Automation Engineer",
    company: "Independent · Casablanca",
    summary:
      "Built French-Arabic healthcare assistants and CRM automations using n8n, Zapier, APIs, and cloud prediction services.",
  },
  {
    date: "Aug 2024",
    role: "Software Developer",
    company: "Centre Dentaire Mohammed VI · Casablanca",
    summary:
      "Built a patient-management system and automated repetitive data entry for a high-volume clinic.",
  },
];

const process = [
  {
    title: "Show me the current work",
    copy: "A screen recording, SOP, spreadsheet, or call with the person doing it is enough. I want the exceptions, not a polished pitch.",
  },
  {
    title: "Map the decisions",
    copy: "I separate fixed rules from judgment calls, define the data each step needs, and decide where a human must stay in control.",
  },
  {
    title: "Ship the narrow version",
    copy: "The first version solves one painful path end to end. No giant AI roadmap and no six-month wait for something usable.",
  },
  {
    title: "Test ugly cases",
    copy: "I write evals, test missing data and bad outputs, then add review gates, logs, and fallbacks before the system is trusted.",
  },
];

const faqs = [
  {
    question: "Do you only build chatbots?",
    answer:
      "No. Most of my work sits behind the interface: agents that call tools, retrieval systems, CRM and ERP connectors, queues, dashboards, and approval steps. A chat interface is useful only when it fits the job.",
  },
  {
    question: "Do you build websites too?",
    answer:
      "Yes — high-ticket sites built to convert, not just to look good. I treat the website as the front of the funnel: it books the call, the agents handle the work after it. If you only need the site, that is fine too.",
  },
  {
    question: "Can you work with the tools we already use?",
    answer:
      "Yes. I have worked with Salesforce, Odoo, n8n, Zapier, PostgreSQL, MongoDB, REST APIs, and custom services. I would rather fit the system into your operation than force a new stack on the team.",
  },
  {
    question: "What does a first engagement look like?",
    answer:
      "We spend 30 minutes on the workflow. If there is a good fit, I send back a short scope with the first useful release, the systems involved, what I need from you, and the delivery plan.",
  },
  {
    question: "Are you available now?",
    answer:
      "Yes. I am available immediately for project work, contract AI engineering, and full-time roles. I work from Casablanca and collaborate remotely.",
  },
];

const tickerItems = [
  "Multi-agent systems",
  "RAG",
  "LangGraph",
  "LangChain",
  "CrewAI",
  "OpenAI",
  "Anthropic",
  "Salesforce",
  "Odoo",
  "n8n",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Evals",
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reduceMotion ? undefined : reveal}
      initial={reduceMotion ? undefined : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Navigation = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.nav
      className="site-nav"
      initial={reduceMotion ? undefined : { opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Primary navigation"
    >
      <div className="shell nav-inner">
        <a className="wordmark" href="#top" aria-label="Mohamed Ayoub home">
          AYOUB.
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </div>
        <a className="nav-contact" href="#contact">
          Start a project
        </a>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const lineProps = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { y: "110%" },
          animate: { y: 0 },
          transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <header id="top" className="hero">
      <div className="shell">
        <motion.div
          className="hero-eyebrow"
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.04 }}
        >
          <span className="status-dot" aria-hidden="true" />
          <span>Mohamed Ayoub El Mousati</span>
          <span className="eyebrow-separator">·</span>
          <span>AI engineer</span>
          <span className="eyebrow-separator">·</span>
          <span>Available now</span>
        </motion.div>

        <h1 className="hero-title" aria-label="AI systems that do the work.">
          <span className="line-mask">
            <motion.span {...lineProps(0.12)}>AI systems</motion.span>
          </span>
          <span className="line-mask">
            <motion.span {...lineProps(0.28)}>
              that do the <span className="accent">work.</span>
            </motion.span>
          </span>
        </h1>

        <motion.div
          className="hero-intro"
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.76, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>
            I help sales and operations teams hand off their repetitive work —
            the follow-ups, the data entry, the checks — to AI agents that
            actually do it. One team cut prospecting time by 60%.
          </p>
          <div className="hero-actions">
            <a
              className="button button-dark"
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Calendar aria-hidden="true" />
              Book a free workflow teardown
            </a>
            <a className="button button-light" href="#work">
              See what I've built
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-proof"
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.78 }}
        >
          <p className="eyebrow">Selected outcomes</p>
          <div className="proof-grid">
            {proof.map((item) => (
              <div className="proof-item" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
};

const Ticker = () => (
  <div className="ticker" aria-label="Technical capabilities">
    <div className="ticker-track">
      {[0, 1].map((copy) => (
        <div className="ticker-set" key={copy} aria-hidden={copy === 1}>
          {tickerItems.map((item) => (
            <span className="ticker-item" key={`${copy}-${item}`}>
              <span>{item}</span>
              <span className="ticker-dot">·</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const SectionHeading = ({
  eyebrow,
  title,
  copy,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  inverted?: boolean;
}) => (
  <Reveal className={`section-heading ${inverted ? "inverted" : ""}`}>
    <p className="eyebrow">{eyebrow}</p>
    <div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  </Reveal>
);

const Services = () => (
  <section id="services" className="services section">
    <div className="shell">
      <SectionHeading
        eyebrow="What you can hire me for"
        title="Bring me the workflow everyone hates."
        copy="The best first project usually already has a spreadsheet, a weekly reminder, and one person who knows all the exceptions."
        inverted
      />
      <div className="service-grid">
        {services.map((service, index) => (
          <Reveal className="service-item" delay={index * 0.06} key={service.title}>
            <span className="service-number">0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="service-examples">{service.examples}</span>
          </Reveal>
        ))}
        <Reveal
          className="service-item service-item--feature"
          delay={services.length * 0.06}
        >
          <span className="service-number accent">05 · The front of the funnel</span>
          <h3>Conversion-focused websites</h3>
          <p>
            An agent is useless if no lead ever reaches it. I build high-ticket
            sites with one job: turn visitors into booked calls. Design, copy,
            and build handled as one thing — not three freelancers and a
            deadline that slips.
          </p>
          <span className="service-examples">
            Design · Copy · React, Next.js · Built to convert
          </span>
        </Reveal>
      </div>
      <Reveal className="services-cta">
        <p>Not sure which category your problem fits?</p>
        <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
          Describe the work, not the technology
          <ArrowUpRight aria-hidden="true" />
        </a>
      </Reveal>
    </div>
  </section>
);

const WorkflowVisual = ({ nodes }: { nodes: string[] }) => (
  <div className="workflow-visual" aria-label={`Workflow: ${nodes.join(" to ")}`}>
    {nodes.map((node, index) => (
      <div className="workflow-step" key={node}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <strong>{node}</strong>
        {index < nodes.length - 1 && (
          <ArrowRight className="workflow-arrow" aria-hidden="true" />
        )}
      </div>
    ))}
  </div>
);

const Work = () => (
  <section id="work" className="work section">
    <div className="shell">
      <SectionHeading
        eyebrow="Selected systems"
        title="A few things I have already shipped."
        copy="Private client work is shown as a system map. Public products link to their source."
      />

      <div className="case-list">
        {caseStudies.map((study, index) => (
          <Reveal className="case-study" key={study.title}>
            <div className="case-meta">
              <span>{study.number}</span>
              <p>{study.company}</p>
            </div>
            <div className="case-copy">
              <h3>{study.title}</h3>
              <div className="case-details">
                <div>
                  <p className="eyebrow">The problem</p>
                  <p>{study.problem}</p>
                </div>
                <div>
                  <p className="eyebrow">What I built</p>
                  <p>{study.build}</p>
                </div>
                <div>
                  <p className="eyebrow">What changed</p>
                  <p>{study.outcome}</p>
                </div>
              </div>
              <div className="tag-list">
                {study.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="case-visual">
              {study.image ? (
                <a
                  className="product-shot"
                  href={study.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${study.title} on GitHub`}
                >
                  <img src={study.image} alt={study.imageAlt} />
                  <span>
                    View public project
                    <ArrowUpRight aria-hidden="true" />
                  </span>
                </a>
              ) : (
                <WorkflowVisual nodes={study.nodes ?? []} />
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="more-work">
        <div className="more-work-heading">
          <p className="eyebrow">More project work</p>
          <p>AI and operational systems built across healthcare and logistics.</p>
        </div>
        <div className="more-work-grid">
          {moreWork.map((project) => {
            const card = (
              <>
                <p className="eyebrow accent">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="metric-list">
                  {project.metrics.map((metric) => (
                    <span key={metric}>
                      <Check aria-hidden="true" />
                      {metric}
                    </span>
                  ))}
                </div>
                {project.href && (
                  <ArrowUpRight className="more-work-arrow" aria-hidden="true" />
                )}
              </>
            );

            return (
              <article className="more-work-card" key={project.title}>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </article>
            );
          })}
        </div>
      </Reveal>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="experience section">
    <div className="shell">
      <SectionHeading
        eyebrow="Experience"
        title="Built in sales, procurement, logistics, and healthcare."
        copy="Different industries. The same hard part: getting the system into the daily work."
      />
      <div className="experience-list">
        {experience.map((item, index) => (
          <Reveal className="experience-row" delay={index * 0.05} key={item.company}>
            <p className="experience-date">{item.date}</p>
            <div>
              <h3>{item.role}</h3>
              <p className="experience-company">{item.company}</p>
            </div>
            <p className="experience-summary">{item.summary}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section className="process section">
    <div className="shell">
      <SectionHeading
        eyebrow="How I work"
        title="Start with the job. Add AI only where it earns its place."
        inverted
      />
      <div className="process-grid">
        {process.map((item, index) => (
          <Reveal className="process-step" delay={index * 0.06} key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="about section">
    <div className="shell about-grid">
      <Reveal className="about-title">
        <p className="eyebrow">About</p>
        <h2>
          The model matters.
          <br />
          The handoff matters <span className="accent">more.</span>
        </h2>
      </Reveal>
      <Reveal className="about-copy" delay={0.1}>
        <p className="about-lead">
          Most AI projects stall because nobody owns the unglamorous part — the
          connectors, the edge cases, the handoff back to a human. I own that
          part.
        </p>
        <p>
          I have shipped sales agents, procurement systems, fleet operations,
          patient software, and predictive models. The demo is never the hard
          bit. Getting the system into the daily work — where people trust it
          and keep using it — is the job, and that is what I do.
        </p>
        <p>
          I also teach AI — showing engineers and teams how these systems ship
          into real work, not just how to call an API. I work in French,
          Arabic, and English, and I am available now for project work and
          contract AI engineering.
        </p>
        <div className="about-facts">
          <span>
            <MapPin aria-hidden="true" />
            Casablanca · Remote
          </span>
          <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
            <Phone aria-hidden="true" />
            {PHONE}
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`}>
            <Mail aria-hidden="true" />
            {CONTACT_EMAIL}
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

const Faq = () => (
  <section className="faq section">
    <div className="shell faq-grid">
      <Reveal className="faq-heading">
        <p className="eyebrow">Before we talk</p>
        <h2>Useful answers.</h2>
      </Reveal>
      <Reveal className="faq-list" delay={0.08}>
        {faqs.map((item) => (
          <details key={item.question}>
            <summary>
              {item.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </Reveal>
    </div>
  </section>
);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`AI workflow inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name}\nReply to: ${email}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact section">
      <div className="shell">
        <Reveal className="contact-headline">
          <p className="eyebrow">Start a conversation</p>
          <h2>
            Have a workflow that should not need a human{" "}
            <span>every time?</span>
          </h2>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-copy">
            <p className="contact-intro">
              Send me the current process, the tools involved, and where people
              lose time. Thirty minutes is enough to work out whether there is a
              useful first build.
            </p>
            <a
              className="button button-dark"
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Calendar aria-hidden="true" />
              Book 30 minutes
            </a>
            <div className="contact-links">
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
              <a
                href="https://www.linkedin.com/in/elmohamedayoub/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal className="contact-form-wrap" delay={0.1}>
            {submitted ? (
              <div className="form-success" role="status">
                <div className="success-rule" />
                <h3>Email draft opened.</h3>
                <p>
                  Your email client should have the details ready. Add any files
                  or screenshots that show the current process, then send it.
                </p>
                <a
                  className="button button-dark"
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Calendar aria-hidden="true" />
                  Book the call
                </a>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  <span>Your name</span>
                  <input name="name" type="text" placeholder="Jane Smith" required />
                </label>
                <label>
                  <span>Your email</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    required
                  />
                </label>
                <label>
                  <span>What work is still manual?</span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="We copy data from..., then someone checks..., and every Friday..."
                    required
                  />
                </label>
                <button className="button button-dark submit-button" type="submit">
                  <Mail aria-hidden="true" />
                  Open email draft
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="site-footer">
    <div className="shell footer-inner">
      <a className="wordmark footer-mark" href="#top">
        AYOUB.
      </a>
      <p>Mohamed Ayoub El Mousati · AI Engineer · Casablanca</p>
      <div>
        <a href={`mailto:${CONTACT_EMAIL}`}>Email</a>
        <a
          href="https://github.com/ELMohamedAyoub"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/elmohamedayoub/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <div className="portfolio">
    <Navigation />
    <main>
      <Hero />
      <Ticker />
      <Services />
      <Work />
      <Experience />
      <Process />
      <About />
      <Faq />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
