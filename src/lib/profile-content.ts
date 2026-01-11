export type ProfileType = 'technical' | 'copywriting';

// Updated: Cloud 50%, Pentesting 60%
export const profileContent = {
  technical: {
    hero: {
      roles: ["AI Engineer & Technical Consultant", "Data Science Solutions Architect", "Full-Stack ML Engineer", "Business Intelligence Specialist"],
      tagline: "Engineering intelligent systems that solve complex business problems across industries",
    },
    about: {
      title: "About Me",
      bio: `Software Engineer & Technical Consultant with a degree from École Supérieure Mohammed 6 d'Ingénieurs des Sciences et de la Santé (ESM6ISS). Ready to solve complex problems wherever they exist — healthcare, fintech, logistics, e-commerce, or anywhere data meets business impact.
      I don't fit in one box — I'm the engineer who understands data science, the data scientist who ships production code, and the consultant who speaks both technical and business.
      <br/><br/>
      <strong>What I Actually Do:</strong><br/>
      ✓ Build ML pipelines that don't just "work in research" — they handle 1,000+ daily transactions in production<br/>
      ✓ Turn messy business problems into elegant technical solutions across any industry<br/>
      ✓ Deploy full-stack systems that actually scale — from React dashboards to real-time IoT processing<br/>
      ✓ Bridge language and cultural gaps with multilingual AI (French/Arabic/English) serving 500+ organizations<br/>
      ✓ Consult on data strategy, then actually build it — no handwaving, just working systems<br/>
      <br/>
      My track record? Systems across healthcare (91% ML accuracy in diagnostics), national logistics (30% efficiency gains for 50+ vehicles), enterprise automation (25% workload reduction), and multilingual AI platforms.
      <br/><br/>
      As a trilingual professional with production experience in Python, TensorFlow, React, Node.js, Next.js, FastAPI, Flask, and Big Data (Hadoop/Spark) — plus experience dabbling in C++ and C# — I solve the problems others say are "too complex" — then deploy them to production. I'm proficient in the most sought-after frameworks and languages in the industry. Open to opportunities worldwide.`,
      skills: [
        { name: "Python & JavaScript", level: 92 },
        { name: "Machine Learning (TensorFlow, PyTorch)", level: 88 },
        { name: "React & Node.js", level: 85 },
        { name: "Big Data (Hadoop, Spark)", level: 78 },
        { name: "Cloud (AWS, GCP) & Docker", level: 50 },
        { name: "Cybersecurity & Pentesting", level: 60 },
      ],
      info: [
        { label: "Profile", value: "AI Engineer & Technical Consultant | Data Science Solutions Architect | Full-Stack ML Engineer" },
        { label: "Domain", value: "Cross-Industry AI/ML, Predictive Analytics, Enterprise Automation, Business Intelligence, IoT Engineering" },
        { label: "Education", value: "Software Engineering Graduate (AI/Data Science) - ESM6ISS" },
        { label: "Frameworks", value: "React, Next.js, Node.js, Express, FastAPI, Flask, TensorFlow, PyTorch" },
        { label: "Languages", value: "Python, JavaScript/TypeScript, C++, C# (and more)" },
        { label: "Other Skills", value: "Docker, Hadoop, Spark, PostgreSQL, MongoDB, n8n, Zapier" },
        { label: "Interest", value: "Cybersecurity, Pentesting, AI Research, Automation" },
        { label: "Language", value: "French (Native), Arabic (Native), English (Professional)" },
        { label: "Favorite Quote", value: "When it rains, it pours" },
      ],
    },
  },
  copywriting: {
    hero: {
      roles: ["Marketing Agency Owner", "Copywriter & Strategist", "Social Media Expert", "Email Marketing Specialist"],
      tagline: "Founder of Digital Marketing Agency | Copywriting • Social Media • Email Marketing",
    },
    about: {
      title: "About My Agency",
      bio: `Founder and lead strategist of a digital marketing agency based in Morocco, specializing in copywriting, social media management, and email marketing for tech companies and startups.
      With 6+ months running my own agency, I've helped businesses scale their online presence and convert audiences through compelling storytelling and data-driven campaigns.
      <br/><br/>
      My agency offers comprehensive digital marketing services: high-converting copywriting for landing pages and websites, strategic social media campaigns across platforms, automated email marketing funnels, and content strategy that drives measurable results.
      I leverage my technical background to create marketing that resonates with both B2B tech audiences and consumer markets.
      <br/><br/>
      As a trilingual entrepreneur fluent in French, Arabic, and English, I've worked with local Moroccan businesses and international clients, delivering campaigns that combine creative storytelling with conversion optimization.
      From social media content that builds community to email sequences that nurture leads, I bring a unique blend of technical understanding and marketing expertise to every project.`,
      skills: [
        { name: "Copywriting & Storytelling", level: 94 },
        { name: "Social Media Marketing", level: 90 },
        { name: "Email Marketing & Automation", level: 88 },
        { name: "SEO & Content Strategy", level: 85 },
        { name: "Sales Funnels & Conversion", level: 87 },
        { name: "Brand Strategy & Messaging", level: 86 },
      ],
      info: [
        { label: "Profile", value: "Marketing Agency Owner, Copywriter, Social Media & Email Marketing Specialist" },
        { label: "Agency Focus", value: "Digital Marketing, Copywriting, Social Media Management, Email Campaigns" },
        { label: "Experience", value: "6+ Months Running Marketing Agency in Morocco" },
        { label: "Services", value: "Landing Pages, Social Media, Email Funnels, Content Strategy, Brand Messaging" },
        { label: "Industries", value: "Tech Startups, SaaS, E-commerce, Local Moroccan Businesses" },
        { label: "Unique Value", value: "Tech Background + Marketing Expertise = Data-Driven Creativity" },
        { label: "Languages", value: "French (Native), Arabic (Native), English (Professional)" },
        { label: "Favorite Quote", value: "When it rains, it pours" },
      ],
    },
  },
};

export const copywritingProjects = [
  {
    title: "E-commerce Brand Launch Campaign",
    description: "Complete digital marketing campaign for Moroccan fashion e-commerce startup. Developed brand messaging, social media strategy across Instagram and TikTok, and email welcome sequences. Achieved 10K+ followers and 25% conversion rate on launch week.",
    badges: ["Social Media", "E-commerce", "Brand Launch", "Email Marketing", "Instagram"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "SaaS Landing Page & Email Funnel",
    description: "High-converting landing page copywriting and 5-email nurture sequence for productivity SaaS. Combined persuasive copy with technical understanding to speak to developer audience. Generated 150+ qualified leads in first month.",
    badges: ["Copywriting", "SaaS", "Landing Pages", "Email Funnel", "Conversion"],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
  },
  {
    title: "Instagram Growth Strategy - Local Restaurant",
    description: "Social media management for Casablanca restaurant chain. Created content calendar, designed posts, and ran engagement campaigns. Grew account from 2K to 12K followers in 4 months with 8% average engagement rate.",
    badges: ["Social Media", "Instagram", "Content Creation", "Local Business", "Growth"],
    image: "https://images.unsplash.com/photo-1611926653670-7fa82a76c550?w=800&q=80",
  },
  {
    title: "LinkedIn B2B Content Strategy - Tech Consulting",
    description: "Managed LinkedIn presence for consulting firm targeting Moroccan enterprises. Wrote thought leadership posts, created engagement content, and built company brand. Increased profile views by 300% and generated 40+ inbound leads.",
    badges: ["LinkedIn", "B2B", "Thought Leadership", "Content Strategy", "Lead Gen"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    title: "Automated Email Marketing - Online Course",
    description: "Built complete email automation for digital course creator. Designed 12-email sequence combining education and sales. Integrated with ConvertKit and optimized for 35% open rate and 18% click-through rate.",
    badges: ["Email Marketing", "Automation", "Online Courses", "ConvertKit", "Copywriting"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
  {
    title: "Multilingual Social Campaign - Tech Startup",
    description: "Trilingual social media campaign (French/Arabic/English) for AI startup entering North African market. Created culturally adapted content, managed community engagement, and coordinated influencer partnerships.",
    badges: ["Multilingual", "Social Media", "Tech Startup", "Community", "Influencer Marketing"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  },
];

export const copywritingCertifications = [
  {
    date: "2025 - Present",
    title: "Digital Marketing Agency Owner",
    organization: "Self-Founded Agency - Morocco",
    description: "Running full-service digital marketing agency offering copywriting, social media management, email marketing, and content strategy. Serving tech startups, e-commerce brands, and local businesses across Morocco and internationally.",
  },
  {
    date: "2024 - Present",
    title: "Social Media Marketing Specialist",
    organization: "Agency Clients",
    description: "Managing social media presence for 10+ clients across Instagram, LinkedIn, TikTok, and Facebook. Specializing in growth strategies, community engagement, and content creation with measurable results.",
  },
  {
    date: "2024 - Present",
    title: "Email Marketing & Automation Expert",
    organization: "Freelance & Agency Work",
    description: "Building automated email funnels and nurture sequences for online businesses. Expert in ConvertKit, Mailchimp, and customer journey mapping. Consistently achieving 30%+ open rates and strong conversions.",
  },
  {
    date: "2024 - Present",
    title: "Copywriter & Brand Strategist",
    organization: "Various Clients (SaaS, E-commerce, Local Businesses)",
    description: "Creating high-converting landing pages, sales copy, and brand messaging. Combining technical background with persuasive writing to drive results for tech and non-tech clients alike.",
  },
];

export const copywritingAchievements = [
  {
    icon: "TrendingUp",
    title: "E-commerce Launch: 10K+ Followers in 4 Months",
    date: "Fashion Brand Campaign - 2024",
    description: "Led complete digital marketing campaign for Moroccan fashion e-commerce startup. Developed brand messaging, social media strategy, and email sequences. Achieved 10K+ Instagram followers and 25% conversion rate during launch week.",
  },
  {
    icon: "Award",
    title: "SaaS Landing Page: 150+ Qualified Leads",
    date: "Tech Startup Project - 2024-2025",
    description: "Created high-converting landing page copy and 5-email nurture sequence for productivity SaaS targeting developers. Generated 150+ qualified leads in first month with 35% open rate and 18% click-through rate.",
  },
  {
    icon: "Mail",
    title: "Restaurant Growth: 2K to 12K Followers",
    date: "Local Business Campaign - 2024",
    description: "Managed Instagram presence for Casablanca restaurant chain. Created content calendar, designed posts, and ran engagement campaigns. Grew account from 2K to 12K followers in 4 months with 8% average engagement rate.",
  },
  {
    icon: "Globe",
    title: "B2B LinkedIn Strategy: 300% Profile Growth",
    date: "Consulting Firm - 2024-2025",
    description: "Built LinkedIn presence for tech consulting firm targeting Moroccan enterprises. Wrote thought leadership content and engagement posts. Increased profile views by 300% and generated 40+ inbound leads.",
  },
];

export const copywritingExperience = [
  {
    date: "2024 - Present",
    title: "Founder & Lead Copywriter",
    company: "Digital Marketing Agency - Morocco",
    points: [
      "Founded and scaled digital marketing agency serving 15+ clients across tech, e-commerce, and local businesses.",
      "Delivered high-converting copywriting for landing pages, sales pages, and email campaigns with proven results.",
      "Managed social media presence for multiple brands, achieving 10K+ total follower growth.",
      "Created trilingual marketing content (French/Arabic/English) for North African and international markets.",
    ],
  },
  {
    date: "2024 - Present",
    title: "Social Media Marketing Specialist",
    company: "Freelance & Agency Clients",
    points: [
      "Developed and executed social media strategies across Instagram, LinkedIn, TikTok, and Facebook.",
      "Grew client accounts from 2K to 12K+ followers with 8% average engagement rate.",
      "Created content calendars, designed posts, and ran engagement campaigns for diverse industries.",
      "Generated 300% increase in profile views and 40+ inbound leads for B2B client via LinkedIn strategy.",
    ],
  },
  {
    date: "2024 - Present",
    title: "Email Marketing Consultant",
    company: "SaaS & E-commerce Clients",
    points: [
      "Built automated email marketing funnels and nurture sequences for online businesses.",
      "Designed 5-12 email sequences combining education and sales, optimized for conversion.",
      "Achieved 30%+ open rates and 15%+ click-through rates across multiple campaigns.",
      "Integrated email automation with ConvertKit, Mailchimp, and custom solutions.",
    ],
  },
  {
    date: "2024 - 2025",
    title: "Brand Strategist & Content Creator",
    company: "Various Clients (Tech Startups, E-commerce, Local Businesses)",
    points: [
      "Developed brand messaging and positioning strategies for 8+ businesses launching or rebranding.",
      "Created complete digital marketing campaigns including launch strategies and content plans.",
      "Wrote persuasive sales copy combining storytelling with data-driven conversion optimization.",
      "Managed end-to-end content production from strategy to execution across multiple channels.",
    ],
  },
];

export const copywritingEducation = [
  {
    date: "2024 - Present",
    title: "Professional Copywriting & Marketing",
    institution: "Agency Experience & Client Projects",
    grade: "Casablanca, Morocco",
  },
  {
    date: "2022 - 2026",
    title: "Business Background (Marketing Applications)",
    institution: "École Supérieure Mohammed 6 (ESM6ISS)",
    grade: "Casablanca, Morocco - Applying technical skills to marketing",
  },
];
