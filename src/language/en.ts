export const language = {
  meta: {
    title: "Violet Whiting | Senior Staff Software Engineer",
    description:
      "Violet Whiting — Senior Staff software engineer specializing in developer tools, " +
      "backend platforms, and cross-platform systems.",
  },
  navigation: {
    brand: "VW / ENGINEERING",
    ariaLabel: "Primary",
    work: "Work",
    experience: "Experience",
    source: "Source",
    resume: "Résumé",
  },
  hero: {
    eyebrow: "FORMER QUALCOMM SENIOR STAFF ENGINEER",
    title: "Developer tools, backend platforms, and systems built to last.",
    introduction:
      "I'm Violet Whiting, a software engineer with 15+ years of experience building APIs, " +
      "CI/CD infrastructure, real-time applications, and cross-platform products.",
    primaryAction: "Explore selected work",
    secondaryAction: "Get in touch",
  },
  work: {
    eyebrow: "SELECTED WORK",
    title: "Products shaped by real engineering problems",
    allFilter: "All",
    projectNumberPrefix: "0",
    caseStudy: {
      open: "View case study",
      close: "Close case study",
      eyebrow: "ENGINEERING OVERVIEW",
      toggleSymbol: "+",
    },
  },
  projects: [
    {
      name: "Compliance Automation",
      category: "Developer Tools",
      summary:
        "Compliance API using Python, gRPC and repository version control systems for automated source code access " +
        "across an enterprise",
      details:
        "Provides in-depth source code access using various version control systems, through a series of APIs for analysis. " +
        "The compliance testing serves a mission-critical step in client source delivery.",
      insight: "Automated legal compliance",
      stack: "Python · Events/Scheduling · Version Control · gRPC",
    },
    {
      name: "TypeScript UI Toolkit",
      category: "Developer Tools",
      summary:
        "A framework-independent UI platform built around typed drawables and direct, " +
        "controlled DOM updates.",
      details:
        "Provides component lifecycles, observable storage, routing, serialization, event handling, " +
        "typed models, and theme abstraction. This portfolio is rendered by the toolkit itself.",
      insight: "A UI foundation",
      stack: "TypeScript · DOM adapters · RxJS · Tailwind themes",
    },
    {
      name: "Pay Analysis",
      category: "Mobile + Backend",
      summary: "An offer-intelligence system created from direct gig-driving experience.",
      details:
        "Uses ReplayKit and Vision OCR to capture offer cards, calculate mileage, hourly earnings, " +
        "vehicle cost, and estimated profit, then synchronizes normalized data with Python and gRPC services.",
      insight: "Offers statistical analysis",
      stack: "Swift · ReplayKit · Vision OCR · Python · gRPC",
    },
    {
      name: "Motorsports Telemetery",
      category: "Real-time Systems",
      summary: "A configurable cross-platform dashboard for live racing telemetry.",
      details:
        "60Hz streams through WebSockets and gRPC-Web, presenting configurable telemetery data " +
        "panels in browser and desktop-webview environments.",
      insight: "High-performance data",
      stack: "TypeScript · gRPC-Web · WebSockets · Vite · Tauri",
    },
    {
      name: "Clinical Trials SaaS",
      category: "Mobile + Backend",
      summary:
        "Build native iOS + Android apps for Clinical Trials, " +
        "featured Healthkit and automated App store deployment.",
      details:
        "Build clinical trial research questionairs and surverys, collect Health information natively from iOS + Android ",
      insight: "SaaS Healthcare App",
      stack: "Python · iOS · Android",
    },
  ],
  experience: {
    eyebrow: "EXPERIENCE",
    title: "Enterprise depth, independent momentum",
    roles: [
      {
        title: "Independent Software Engineer",
        period: "2023 — Present",
        description:
          "Designing and shipping the UI toolkit, telemetry dashboard, and PayAnalysis across " +
          "TypeScript, Swift, Python, and gRPC.",
      },
      {
        title: "Qualcomm · Senior Staff Engineer",
        period: "2019 — 2023",
        description:
          "Led Python/gRPC compliance platforms, developer tooling, source-control integrations, " +
          "containerization, and CI/CD delivery.",
      },
    ],
  },
  contact: {
    eyebrow: "AVAILABLE FOR SENIOR / STAFF ROLES",
    title: "Let's build the tools that help engineering teams move faster.",
    email: "thebotsupra@gmail.com",
  },
  footer: {
    credit: "Built with the TypeScript UI Toolkit",
    source: "View source on GitHub",
    location: "San Diego, California",
  },
} as const;

export type PortfolioProject = (typeof language.projects)[number];
