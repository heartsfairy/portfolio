import { EventableUIDrawable } from "uitoolkit/lib/ui/components/standard/eventable.js";
import { ui, runtime } from "./runtime";
import "./styles.css";

type Project = { name: string; category: string; summary: string; details: string; insight: string; stack: string };
const projects: Project[] = [
  { name: "TypeScript UI Toolkit", category: "Developer Tools", summary: "A framework-independent UI platform built around typed drawables and direct, controlled DOM updates.", details: "Provides component lifecycles, observable storage, routing, serialization, event handling, typed models, and theme abstraction. This portfolio is rendered by the toolkit itself.", insight: "A UI foundation", stack: "TypeScript · DOM adapters · RxJS · Tailwind themes" },
  { name: "Motorsports Telemetery", category: "Real-time Systems", summary: "A configurable cross-platform dashboard for live racing telemetry.", details: "60Hz streams through WebSockets and gRPC-Web, presenting configurable telemetery data panels in browser and desktop-webview environments.", insight: "High-performance data", stack: "TypeScript · gRPC-Web · WebSockets · Vite · Tauri" },
  { name: "Pay Analysis", category: "Mobile + Backend", summary: "An offer-intelligence system created from direct gig-driving experience.", details: "Uses ReplayKit and Vision OCR to capture offer cards, calculate mileage, hourly earnings, vehicle cost, and estimated profit, then synchronizes normalized data with Python and gRPC services.", insight: "Offers statistical analysis", stack: "Swift · ReplayKit · Vision OCR · Python · gRPC" }
];

const tag = (name: string, meta: Record<string, unknown>) => ui[`${name}_tag`](meta);

const projectCard = (project: Project, index: number) => tag("details", {
  class: `project-card project-card-${index + 1}`,
  html: [
    tag("summary", {
      class: "project-summary",
      html: [
        tag("span", { class: "project-number", text: `0${index + 1}` }),
        tag("span", { class: "eyebrow", text: project.category }),
        tag("h3", { text: project.name }),
        tag("p", { class: "summary", text: project.summary }),
        tag("p", { class: "stack", text: project.stack }),
        tag("span", {
          class: "text-button",
          html: [
            tag("span", { class: "view-label", text: "View case study" }),
            tag("span", { class: "hide-label", text: "Close case study" }),
            tag("span", { class: "toggle-icon", "aria-hidden": "true", text: "+" }),
          ],
        }),
      ],
    }),
    tag("div", {
      class: "case-study",
      html: [
        tag("span", { class: "case-label", text: "ENGINEERING OVERVIEW" }),
        tag("h4", { class: "text-xs", text: project.insight }),
        tag("p", { text: project.details }),
      ],
    }),
  ],
});

class Portfolio extends EventableUIDrawable {
  filter = "All";
  _render(target: any, attach = true): HTMLElement {
    const filters = ["All", ...projects.map(p => p.category)].map(name => ui.btn({
      class: `filter ${this.filter === name ? "active" : ""}`,
      text: name,
      type: "button",
      click: () => {
        this.filter = name;
        const destination = this.parent ?? this.target;
        if (destination) {
          this.reset();
          this.render(destination, true);
        }
      },
    }));
    const visible = projects.filter(p => this.filter === "All" || p.category === this.filter);
    this.uit_data.html = [
      tag("header", { class: "site-header", html: [tag("a", { class: "brand", href: "#top", text: "VW / ENGINEERING" }), tag("nav", { "aria-label": "Primary", html: [tag("a", { href: "#work", text: "Work" }), tag("a", { href: "#experience", text: "Experience" }), tag("a", { href: "/Violet_Whiting_Resume.pdf", target: "_blank", text: "Résumé" })] })] }),
      tag("main", {
        id: "top", html: [
          tag("section", {
            class: "hero", html: [
              tag("div", { class: "hero-copy", html: [tag("span", { class: "eyebrow", text: "FORMER QUALCOMM SENIOR STAFF ENGINEER" }), tag("h1", { text: "Developer tools, backend platforms, and systems built to last." }), tag("p", { class: "lede", text: "I'm Violet Whiting, a software engineer with 15+ years of experience building APIs, CI/CD infrastructure, real-time applications, and cross-platform products." }), tag("div", { class: "actions", html: [tag("a", { class: "primary", href: "#work", text: "Explore selected work" }), tag("a", { class: "secondary", href: "mailto:thebotsupra@gmail.com", text: "Get in touch" })] })] }),
              tag("div", { class: "spectrum", "aria-hidden": "true", html: ["red", "orange", "yellow", "green", "cyan", "blue", "violet"].map(color => tag("span", { class: `spectrum-${color}` })) }),
            ]
          }),
          tag("section", { id: "work", class: "section", html: [tag("div", { class: "section-heading", html: [tag("span", { class: "eyebrow", text: "SELECTED WORK" }), tag("h2", { text: "Products shaped by real engineering problems" })] }), tag("div", { class: "filters", html: filters }), tag("div", { class: "project-grid", html: visible.map(p => projectCard(p, projects.indexOf(p))) })] }),
          tag("section", { id: "experience", class: "section experience", html: [tag("div", { html: [tag("span", { class: "eyebrow", text: "EXPERIENCE" }), tag("h2", { text: "Enterprise depth, independent momentum" })] }), tag("div", { class: "timeline", html: [tag("article", { html: [tag("h3", { text: "Independent Software Engineer" }), tag("span", { text: "2023 — Present" }), tag("p", { text: "Designing and shipping the UI toolkit, telemetry dashboard, and PayAnalysis across TypeScript, Swift, Python, and gRPC." })] }), tag("article", { html: [tag("h3", { text: "Qualcomm · Senior Staff Engineer" }), tag("span", { text: "2019 — 2023" }), tag("p", { text: "Led Python/gRPC compliance platforms, developer tooling, source-control integrations, containerization, and CI/CD delivery." })] })] })] }),
          tag("section", { class: "contact", html: [tag("span", { class: "eyebrow", text: "AVAILABLE FOR SENIOR / STAFF ROLES" }), tag("h2", { text: "Let's build the tools that help engineering teams move faster." }), tag("a", { class: "primary", href: "mailto:thebotsupra@gmail.com", text: "thebotsupra@gmail.com" })] })
        ]
      }), tag("footer", { html: [tag("span", { text: "Built with the TypeScript UI Toolkit" }), tag("span", { text: "San Diego, California" })] })
    ];
    return super._render(target, attach);
  }
}
const root = runtime.dom.select("#app");
if (!(root instanceof HTMLElement)) throw new Error("Missing #app");
new Portfolio({ tag: "div" } as never).render(root, true);
