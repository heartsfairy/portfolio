export const language = {
  meta: {
    title: "Violet Whiting | Senior Staff Software Engineer",
    description:
      "Violet Whiting — senior/staff software engineer specializing in developer tools, " +
      "backend platforms, real-time applications, and cross-platform systems.",
  },
  navigation: {
    brand: "VW / ENGINEERING",
    ariaLabel: "Primary",
    work: "Work",
    experience: "Experience",
    source: "Source",
    linkedin: "LinkedIn",
    resume: "Résumé",
  },
  hero: {
    eyebrow: "FORMER QUALCOMM SENIOR STAFF ENGINEER",
    title: "Developer tools, backend platforms, and systems built to last.",
    introduction:
      "I'm Violet Whiting, a staff-level software engineer with 15+ years of experience " +
      "architecting APIs, developer platforms, real-time applications, and cross-platform products.",
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
        "An enterprise compliance platform for automated source-code analysis across multiple " +
        "version-control systems.",
      details:
        "Architected and led a Python and gRPC API that gave internal scanning services consistent access to Git, SVN, " +
        "and Mercurial repositories. The platform supported repository analysis up to 2 GB, depending on the backend, " +
        "and handled millions of internal service requests each day. Reusable Python clients, Airflow automation, " +
        "entitlement and authentication integrations, containerization, and CI/CD made compliance testing a reliable, " +
        "mission-critical step in source delivery.",
      insight: "Compliance at enterprise scale",
      stack: "Python · gRPC · Airflow · Git/SVN/Mercurial · PostgreSQL",
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
      stack: "TypeScript · DOM adapters · RxJS · Tailwind CSS themes",
    },
    {
      name: "Pay Analysis",
      category: "Mobile + Backend",
      summary: "An offer-intelligence system created from direct gig-driving experience.",
      details:
        "Uses ReplayKit and Vision OCR to capture offer cards; calculates mileage, hourly earnings, vehicle costs, " +
        "and estimated profit; and synchronizes normalized data with Python and gRPC services.",
      insight: "Offer intelligence from real-world data",
      stack: "Swift · ReplayKit · Vision OCR · Python · gRPC",
    },
    {
      name: "Motorsports Telemetry",
      category: "Real-time Systems",
      summary: "A configurable cross-platform dashboard for live racing telemetry.",
      details:
        "Processes 60 Hz telemetry over WebSockets and gRPC-Web, presenting configurable data panels " +
        "in browser and desktop WebView environments.",
      insight: "Real-time clarity at 60 Hz",
      stack: "TypeScript · gRPC-Web · WebSockets · Vite · Tauri",
    },
    {
      name: "Clinical Trials SaaS",
      category: "Mobile + Backend",
      summary:
        "Built native iOS and Android applications for clinical trials, with HealthKit integration " +
        "and automated App Store deployment.",
      details:
        "Led development of a web platform for clinical research study design and automated the transition " +
        "from web-based studies to native iOS and Android applications. Collaborated with academic researchers " +
        "to align the Phendo study software with clinical workflows and native health-data collection.",
      insight: "Research workflows, shipped natively",
      stack: "Python · iOS · Android · HealthKit",
    },
  ],
  experience: {
    eyebrow: "EXPERIENCE",
    title: "Staff-level architecture, delivery, and ownership",
    roles: [
      {
        title: "Independent Software Engineer",
        company: "Self-employed · San Diego, California",
        period: "Sep 2023 — Present",
        description:
          "Architecting and shipping developer tools and data-intensive products across TypeScript, Swift, " +
          "Python, and gRPC.",
        highlights: [
          "Designed and continue to maintain a framework-independent TypeScript UI toolkit with typed " +
            "models, stateful component lifecycles, observable storage, routing, serialization, event " +
            "handling, and theme abstraction.",
          "Built a real-time, cross-platform motorsports telemetry dashboard with configurable panels, live standings, " +
            "track visualization, input telemetry, and WebSocket/gRPC-Web streaming.",
          "Developed an iOS gig-offer intelligence application using ReplayKit and Vision OCR to calculate mileage, " +
            "hourly earnings, vehicle costs, and estimated profit, backed by Python and gRPC services.",
        ],
      },
      {
        title: "Senior Staff Engineer, Content Compliance",
        company: "Qualcomm · San Diego, California",
        period: "Sep 2019 — May 2023",
        description:
          "Led the architecture and delivery of enterprise compliance platforms, developer tooling, " +
          "and cloud-ready services.",
        highlights: [
          "Architected and led a Python and gRPC API for automated code scanning across Git, SVN, and Mercurial, " +
            "with reusable Python clients for internal teams.",
          "Supported analysis of repositories up to 2 GB, depending on the backend system, while the API handled " +
            "millions of requests each day from internal services.",
          "Developed full-stack services and shared libraries supporting a React application and Airflow-based " +
            "compliance automation.",
          "Designed Azure entitlement and authentication integrations, and partnered with DevOps engineers on " +
            "containerization, CI/CD, and scalable cloud deployment.",
          "Built reliable API, search, and data-processing workflows with Django, Flask, PostgreSQL, Celery, " +
            "and Elasticsearch.",
        ],
      },
    ],
    earlierTitle: "EARLIER EXPERIENCE",
    earlierRoles: [
      {
        title: "Senior Engineer",
        company: "Property Capsule · San Diego, California",
        period: "Feb 2018 — Sep 2019",
        description:
          "Modernized a monolithic legacy application into an automated, AWS-deployable service; " +
          "established testing and delivery workflows; and restructured the codebase for multi-client use.",
      },
      {
        title: "Mobile and Web Technology Lead",
        company: "Applied Informatics · Remote / New York, New York",
        period: "May 2014 — Jun 2017",
        description:
          "Led delivery of a clinical research platform and automated the conversion of web study designs " +
          "into native iOS and Android applications, partnering with academic researchers on the Phendo study.",
      },
      {
        title: "Lead Developer",
        company: "X Studios · Orlando, Florida",
        period: "Sep 2008 — Aug 2013",
        description:
          "Led a small engineering team delivering web, mobile, server, and REST systems while owning architecture, " +
          "estimates, technical documentation, client communication, and Linux production releases.",
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
    linkedin: "Connect on LinkedIn",
    location: "San Diego, California",
  },
} as const;

export type PortfolioProject = (typeof language.projects)[number];
