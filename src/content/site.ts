// All copy for the site lives here. Edit this file to change what the page says.

export type Mode = "professional" | "personal";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const LINKS = {
  email: "mailto:ayubmousati@gmail.com",
  calendly: "https://calendly.com/ayubmousati/30min",
  github: "https://github.com/ELMohamedAyoub",
  linkedin: "https://www.linkedin.com/in/elmohamedayoub/",
  x: "https://twitter.com/ELMohamedAyoub",
  guide: asset("guide-5-workflows.html"),
};

// The free pipeline review is the one offer the professional page sells.
export const OFFER = {
  cta: "Book a free pipeline review",
  note: "Free for businesses looking to fix their pipeline.",
  guarantee: "If the first build doesn't do the job we scope together, you don't pay.",
};

export const HERO = {
  headline: "Win more of the leads you already get.",
  pitch:
    "I build AI systems that catch stalled deals, draft the follow-up and keep your pipeline moving. Your team reviews everything before it goes out.",
  proof:
    "One sales automation suite I worked on: about 60% less manual prospecting, about 40% better pipeline follow-up.",
};

// Ways to hire: freelance projects or ongoing agency-style work.
export const SERVICES: { name: string; detail: string }[] = [
  {
    name: "Free pipeline review",
    detail: "A 30-minute call. We find where sales are slipping and what to fix first. Free for businesses.",
  },
  {
    name: "One workflow, built",
    detail:
      "A fixed-scope freelance project. I build the fix we agree on and hand it over working, covered by the guarantee.",
  },
  {
    name: "Ongoing AI partner",
    detail:
      "Agency-style work for teams that want more than one system. I keep building, improving and running your AI workflows month to month.",
  },
];

// Drop photos into /public and set the paths here, e.g. asset("me.jpg").
// While null, the portrait shows a monogram.
export const PORTRAIT: Record<Mode, string | null> = {
  professional: null,
  personal: null,
};

export const NAME: Record<Mode, string> = {
  professional: "Mohamed Ayoub El Mousati",
  personal: "Ayoub",
};

export interface Inline {
  text: string;
  href?: string;
}

// Each paragraph is a list of runs; runs with an href render as gold "illuminated" links.
export const ABOUT: Record<Mode, Inline[][]> = {
  professional: [
    [
      {
        text: "Most businesses don't lose sales because they lack leads. They lose them when a reply comes late, a deal stalls or nobody follows up.",
      },
    ],
    [
      { text: "I'm Ayoub, an AI engineer in Casablanca. I find where that's happening in your business and " },
      { text: "build the system that fixes it", href: "#work" },
      { text: "." },
    ],
    [
      {
        text: "Previously built software for Laboratoire National Mohammed VI and Centre Dentaire Mohammed VI.",
      },
    ],
  ],
  personal: [
    [{ text: "Engineer from Casablanca. Trying to build things that quietly work." }],
  ],
};

export interface CaseStudy {
  title: string;
  area: string;
  problem: string;
  build: string;
  outcome: string;
  href?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Stalled deals, surfaced with the next message already drafted",
    area: "Sales ops",
    problem:
      "The blocker was not missing data. It was buried data. Reps had to inspect each opportunity, work out what was holding it up, then write the follow-up themselves.",
    build:
      "One agent queries Salesforce and surfaces the blocked deal. A second drafts the next message. The rep reviews it before anything is sent.",
    outcome:
      "The wider sales automation suite cut manual prospecting time by roughly 60% and improved pipeline follow-up by about 40%.",
  },
  {
    title: "Unusual pricing caught before the purchase order",
    area: "Procurement",
    problem:
      "Demand planning, supplier choice, purchase-order creation, and buyer notification lived as separate steps with pricing checks happening late.",
    build:
      "Dedicated subagents own each phase. A retrieval layer checks supplier history and flags unusual pricing before the order reaches approval.",
    outcome:
      "One traceable flow from demand to notification, with exceptions raised before they become purchase orders.",
  },
  {
    title: "Patient calls turned into records and alerts",
    area: "Healthcare",
    problem:
      "Post-surgery updates arrive as conversation. Care teams need pain scores, symptoms, emotional state, and alert conditions in a form they can scan.",
    build:
      "The system transcribes a bilingual voice session, extracts structured fields, checks alert rules, and adds the result to a clinician dashboard.",
    outcome:
      "One patient conversation becomes a structured record, a recovery update, and an alert when symptoms cross a threshold.",
    href: "https://github.com/ELMohamedAyoub/Your_AI_Doctor",
  },
];

export type Badge = "Client" | "Open source" | "Pilot";

export interface Made {
  title: string;
  description: string;
  image?: string;
  href?: string;
  badge?: Badge;
}

export const MADE: Made[] = [
  {
    title: "CleanPro Mobile",
    description: "On-demand car and home cleaning in Montreal. Customers book and pay in under a minute, with subscriptions for repeat business.",
    image: asset("work/cleanpro.webp"),
    href: "https://pressingaoo.vercel.app/",
    badge: "Client",
  },
  {
    title: "Lahlou Home",
    description: "An online appliance marketplace for a 40-year-old Casablanca retailer: 80+ products, next-day delivery.",
    image: asset("work/lahlou.webp"),
    href: "https://marketplace-umber-two.vercel.app/",
    badge: "Client",
  },
  {
    title: "Madmadi Coches",
    description: "Airport car rental customers book instantly on WhatsApp, with an admin panel to run the fleet.",
    image: asset("work/madmadi.webp"),
    href: "https://madmadi-crm.vercel.app/",
    badge: "Client",
  },
  {
    title: "PULSE",
    description: "Workplace well-being platform for Quebec: survey engine, anonymised responses, live dashboards.",
    image: asset("work/pulse.webp"),
    href: "https://smart-form-c.vercel.app/",
    badge: "Client",
  },
  {
    title: "Your AI Doctor",
    description: "Bilingual voice assistant for post-surgery monitoring, with a clinician dashboard and alerts.",
    image: asset("work/ai-doctor.webp"),
    href: "https://github.com/ELMohamedAyoub/Your_AI_Doctor",
    badge: "Open source",
  },
  {
    title: "Autism communication app",
    description: "Transformer-based communication support with tone detection. 50-child pilot, 20% response gain.",
    href: "https://github.com/ELMohamedAyoub/AI-Powered-Autism-Detection-Diagnosis-and-Therapy-App",
    badge: "Pilot",
  },
];

// Personal mode. Placeholder lines, rewrite them in your own words.
export const CURRENTLY: { label: string; value: string }[] = [
  { label: "Building", value: "this site, again" },
  { label: "Learning", value: "how to ship smaller things, sooner" },
  { label: "Based in", value: "Casablanca, Morocco" },
];
