import { useEffect } from "react";
import { ABOUT, HERO, MADE, NAME } from "@/content/site";
import { useMode } from "@/hooks/useMode";
import { ModeToggle } from "@/components/illuminated/ModeToggle";
import { Portrait } from "@/components/illuminated/Portrait";
import { Compass, Divider } from "@/components/illuminated/Ornaments";
import {
  BookReview,
  Currently,
  Elsewhere,
  MadeGrid,
  Prose,
  Section,
  Services,
  WorkList,
  WorkWithMe,
} from "@/components/illuminated/Sections";

// Fades [data-reveal] elements up as they scroll into view. Re-runs when mode swaps content.
const useReveal = (key: string) => {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);
};

const CLIENT_WORK = MADE.filter((item) => item.badge === "Client");
const OTHER_WORK = MADE.filter((item) => item.badge !== "Client");

const Professional = () => (
  <>
    <Section title="About">
      <Prose paragraphs={ABOUT.professional} />
    </Section>
    <Divider />
    <Section id="work" title="Results">
      <WorkList />
    </Section>
    <Compass />
    <Section id="made" title="Built for clients">
      <MadeGrid items={CLIENT_WORK} />
      <h3 className="subhead">Also built</h3>
      <MadeGrid items={OTHER_WORK} />
    </Section>
    <Divider />
    <Section id="hire" title="Ways to work together">
      <Services />
    </Section>
    <Divider />
    <Section id="review" title="Find the leak">
      <WorkWithMe />
    </Section>
  </>
);

const Personal = () => (
  <>
    <Section title="About">
      <Prose paragraphs={ABOUT.personal} />
    </Section>
    <Divider />
    <Section title="Currently">
      <Currently />
    </Section>
    <Compass />
    <Section title="Elsewhere">
      <Elsewhere />
    </Section>
  </>
);

const Index = () => {
  const [mode, toggle] = useMode();
  useReveal(mode);

  return (
    <div className="page">
      <header className="topbar">
        <a className="home" href={import.meta.env.BASE_URL}>
          Home
        </a>
        <ModeToggle mode={mode} onToggle={toggle} />
        {mode === "professional" ? (
          <a className="topbar-cta" href="#hire">
            Hire me
          </a>
        ) : (
          <span className="topbar-spacer" aria-hidden="true" />
        )}
      </header>

      <main>
        <section className="hero">
          <Portrait mode={mode} onToggle={toggle} />
          {mode === "professional" && <p className="hero-name swap-in">{NAME.professional}</p>}
          <h1 key={mode} className="name swap-in">
            {mode === "professional" ? HERO.headline : NAME[mode]}
          </h1>
          {mode === "professional" && (
            <div className="hero-offer swap-in">
              <p className="hero-pitch">{HERO.pitch}</p>
              <BookReview />
              <p className="hero-proof">{HERO.proof}</p>
            </div>
          )}
        </section>

        <div key={mode} className="mode-content swap-in">
          {mode === "professional" ? <Professional /> : <Personal />}
        </div>
      </main>

      <Divider />
      <footer className="footer">
        <span>© {new Date().getFullYear()} Mohamed Ayoub El Mousati</span>
        <span>Casablanca</span>
      </footer>
    </div>
  );
};

export default Index;
