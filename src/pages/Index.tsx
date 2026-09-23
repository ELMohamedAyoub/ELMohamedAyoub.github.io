import { useEffect } from "react";
import { ABOUT, NAME } from "@/content/site";
import { useMode } from "@/hooks/useMode";
import { ModeToggle } from "@/components/illuminated/ModeToggle";
import { Portrait } from "@/components/illuminated/Portrait";
import { Compass, Divider } from "@/components/illuminated/Ornaments";
import {
  Currently,
  Elsewhere,
  ExperienceList,
  MadeGrid,
  Prose,
  Section,
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

const Professional = () => (
  <>
    <Section title="About">
      <Prose paragraphs={ABOUT.professional} />
    </Section>
    <Divider />
    <Section id="work" title="Selected Work">
      <WorkList />
    </Section>
    <Compass />
    <Section id="made" title="Stuff I've Made">
      <MadeGrid />
    </Section>
    <Divider />
    <Section title="Experience">
      <ExperienceList />
    </Section>
    <Divider />
    <Section title="Work With Me">
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
        <span className="topbar-spacer" aria-hidden="true" />
      </header>

      <main>
        <section className="hero">
          <Portrait mode={mode} onToggle={toggle} />
          <h1 key={mode} className="name swap-in">
            {NAME[mode]}
          </h1>
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
