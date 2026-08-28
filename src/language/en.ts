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
        "A component-based UI platform combining direct DOM access with a path toward schema-defined, " +
        "AI-assisted interface generation.",
      details:
        "Designed as a foundation for building interfaces from schema definitions and using AI automation " +
        "to construct much of an application. Its component-based architecture retains direct DOM-level access " +
        "instead of hiding browser primitives, while typed drawables, stateful lifecycles, event handling, " +
        "observable storage, routing, serialization, and theme abstraction provide reusable application structure. " +
        "This portfolio is rendered by the toolkit itself.",
      insight: "Schema-ready, without losing the DOM",
      stack: "TypeScript · DOM adapters · RxJS · Tailwind CSS themes",
    },
    {
      name: "Pay Analysis",
      category: "Mobile + Backend",
      summary:
        "An on-device offer-intelligence system validated through more than 100 hours of live testing.",
      details:
        "Uses ReplayKit to capture offer cards and Vision to perform OCR on-device, then calculates mileage, " +
        "hourly earnings, vehicle costs, and estimated profit before synchronizing normalized data with Python " +
        "and gRPC services. The system has run reliably through more than 100 hours of live testing, including " +
        "continuous sessions exceeding four hours, with offers typically scanned and presented in one second or less.",
      insight: "Tested live, evaluated in under a second",
      stack: "Swift · ReplayKit · Vision OCR · Python · gRPC",
    },
    {
      name: "Motorsports Telemetry",
      category: "Real-time Systems",
      summary:
        "A fully built and tested iRacing dashboard that sustains 60 Hz telemetry across browser " +
        "and desktop environments.",
      details:
        "Processes sustained 60 Hz iRacing telemetry over WebSockets and gRPC-Web, presenting configurable " +
        "data panels in browser and desktop WebView environments. The architecture is intended to expand beyond " +
        "simulation to real race cars and in-dash displays. That hardware path remains in development because " +
        "the OBD-II in-car communication module is not yet operational.",
      insight: "Sustained at 60 Hz, designed beyond simulation",
      stack: "iRacing · TypeScript · gRPC-Web · WebSockets · Vite · Tauri",
    },
    {
      name: "Clinical Trials SaaS",
      category: "Mobile + Backend",
      summary:
        "A clinical research platform used by Columbia University to successfully deploy the Phendo study.",
      details:
        "Led engineering and designed the overall application architecture, implementing the native iOS application " +
        "and Python server backend while working with a team that assisted with Android development. The platform " +
        "supported Columbia University's Phendo research study, including HealthKit-based data collection.",
      insight: "Study design to automated store deployment",
      stack: "Python · iOS · Android · HealthKit · Store automation",
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
