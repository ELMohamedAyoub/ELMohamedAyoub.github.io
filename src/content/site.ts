// All copy for the site lives here. Edit this file to change what the page says.

export type Mode = "professional" | "personal";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const LINKS = {
  email: "mailto:ayubmousati@gmail.com",
  calendly: "https://calendly.com/ayubmousati/30min",
  github: "https://github.com/ELMohamedAyoub",
  linkedin: "https://www.linkedin.com/in/elmohamedayoub/",
  x: "https://twitter.com/ELMohamedAyoub",
};

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
      { text: "AI engineer in Casablanca. I build agent systems that take repetitive work off sales and operations teams." },
    ],
    [
      { text: "Recently I've built " },
      { text: "a Salesforce co-agent that tells reps what to do next", href: "#work" },
      { text: ", " },
      { text: "a voice check-in that turns patient calls into clinical data", href: "https://github.com/ELMohamedAyoub/Your_AI_Doctor" },
      { text: ", and " },
      { text: "sites for businesses from Montreal to Casablanca", href: "#made" },
      { text: "." },
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
    title: "A Salesforce co-agent that tells reps what to do next",
    area: "Sales ops",
    problem:
      "The blocker was not missing data. It was buried data. Reps had to inspect each opportunity, work out what was holding it up, then write the follow-up themselves.",
    build:
      "One agent queries Salesforce and surfaces the blocked deal. A second drafts the next message. The rep reviews it before anything is sent.",
    outcome:
      "The wider sales automation suite cut manual prospecting time by roughly 60% and improved pipeline follow-up by about 40%.",
  },
  {
    title: "One procurement flow instead of four handoffs",
    area: "Procurement",
    problem:
      "Demand planning, supplier choice, purchase-order creation, and buyer notification lived as separate steps with pricing checks happening late.",
    build:
      "Dedicated subagents own each phase. A retrieval layer checks supplier history and flags unusual pricing before the order reaches approval.",
    outcome:
      "One traceable flow from demand to notification, with exceptions raised before they become purchase orders.",
  },
  {
    title: "A voice check-in that becomes clinical data",
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
    description: "On-demand car and home cleaning in Montreal. Booking in under a minute, Stripe, subscriptions.",
    image: asset("work/cleanpro.webp"),
    href: "https://pressingaoo.vercel.app/",
    badge: "Client",
  },
  {
    title: "Lahlou Home",
    description: "Appliance marketplace for a 40-year-old Casablanca retailer. 80+ products, next-day delivery.",
    image: asset("work/lahlou.webp"),
    href: "https://marketplace-umber-two.vercel.app/",
    badge: "Client",
  },
  {
    title: "Madmadi Coches",
    description: "Airport-to-city car rental with instant WhatsApp booking and an admin panel behind the fleet.",
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

export interface Role {
  role: string;
  place: string;
  date: string;
}

export const EXPERIENCE: Role[] = [
  { role: "AI Engineer", place: "Remote contract", date: "2026" },
  { role: "Software Developer", place: "Laboratoire National Mohammed VI", date: "2025" },
  { role: "AI Developer & Automation Engineer", place: "Independent", date: "2025" },
  { role: "Software Developer", place: "Centre Dentaire Mohammed VI", date: "2024" },
];

// Personal mode. Placeholder lines, rewrite them in your own words.
export const CURRENTLY: { label: string; value: string }[] = [
  { label: "Building", value: "this site, again" },
  { label: "Learning", value: "how to ship smaller things, sooner" },
  { label: "Based in", value: "Casablanca, Morocco" },
];
