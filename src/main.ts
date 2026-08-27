import { EventableUIDrawable } from "uitoolkit/lib/ui/components/standard/eventable.js";
import { language, type PortfolioProject } from "./language/en";
import { runtime, ui } from "./runtime";
import "./styles.css";

type Meta = Record<string, unknown>;
type ExperienceRole = (typeof language.experience.roles)[number];

const resumePath = "Violet_Whiting_Resume.pdf";
const spectrumColors = ["red", "orange", "yellow", "green", "cyan", "blue", "violet"];

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");
const tag = (name: string, meta: Meta) => ui[`${name}_tag`](meta);

const applyMetadata = () => {
  document.title = language.meta.title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", language.meta.description);
};

const createProjectCard = (project: PortfolioProject, index: number) =>
  tag("details", {
    class: cx(
      "card project-card relative min-w-0 overflow-hidden rounded-[1.15rem]",
      `project-card-${index + 1}`,
    ),
    html: [
      tag("summary", {
        class: cx(
          "project-summary flex min-h-[350px] cursor-pointer list-none",
          "flex-col p-6 max-[850px]:min-h-0",
        ),
        html: [
          tag("span", {
            class: "project-number self-end font-mono text-xs",
            text: `${language.work.projectNumberPrefix}${index + 1}`,
          }),
          tag("span", { class: "eyebrow", text: project.category }),
          tag("h3", {
            class: "card-title my-3 text-2xl leading-tight tracking-tight",
            text: project.name,
          }),
          tag("p", { class: "summary m-0 grow", text: project.summary }),
          tag("p", {
            class: "stack my-5 font-mono text-xs leading-relaxed",
            text: project.stack,
          }),
          tag("span", {
            class: cx(
              "text-button mt-2 flex items-center justify-between gap-4",
              "border-t pt-3 text-sm font-bold",
            ),
            html: [
              tag("span", {
                class: "view-label",
                text: language.work.caseStudy.open,
              }),
              tag("span", {
                class: "hide-label",
                text: language.work.caseStudy.close,
              }),
              tag("span", {
                class: "toggle-icon grid size-7 place-items-center rounded-full text-xl",
                "aria-hidden": "true",
                text: language.work.caseStudy.toggleSymbol,
              }),
            ],
          }),
        ],
      }),
      tag("div", {
        class: "card-body case-study border-t p-[clamp(1.8rem,4vw,3.4rem)]",
        html: [
          tag("span", {
            class: "case-label",
            text: language.work.caseStudy.eyebrow,
          }),
          tag("h4", {
            class: "my-4 text-[clamp(.9rem,1vw,2rem)] leading-none tracking-tight",
            text: project.insight,
          }),
          tag("p", {
            class: "m-0 max-w-[62ch] text-sm",
            text: project.details,
          }),
        ],
      }),
    ],
  });

const createHeader = () =>
  tag("header", {
    class: cx(
      "navbar site-header sticky top-0 z-20 min-h-0 justify-between border-b",
      "px-[clamp(1.25rem,5vw,5rem)] py-4 backdrop-blur-lg",
    ),
    html: [
      tag("a", {
        class: "brand inline-flex items-center gap-3 text-xs font-extrabold tracking-[.14em]",
        href: "#top",
        text: language.navigation.brand,
      }),
      tag("nav", {
        class: "flex gap-6 text-sm font-semibold max-[560px]:gap-4",
        "aria-label": language.navigation.ariaLabel,
        html: [
          tag("a", {
            class: "max-[560px]:hidden",
            href: "#work",
            text: language.navigation.work,
          }),
          tag("a", {
            class: "max-[560px]:hidden",
            href: "#experience",
            text: language.navigation.experience,
          }),
          tag("a", {
            href: resumePath,
            target: "_blank",
            text: language.navigation.resume,
          }),
        ],
      }),
    ],
  });

const createHero = () => {
  const actions = tag("div", {
    class: "mt-8 flex flex-wrap gap-3",
    html: [
      tag("a", {
        class: "btn primary rounded-full border-0 max-[560px]:w-full",
        href: "#work",
        text: language.hero.primaryAction,
      }),
      tag("a", {
        class: "btn btn-outline secondary rounded-full max-[560px]:w-full",
        href: `mailto:${language.contact.email}`,
        text: language.hero.secondaryAction,
      }),
    ],
  });

  const copy = tag("div", {
    class: cx(
      "hero-content hero-copy relative z-[2] w-[min(920px,86%)]",
      "max-w-none justify-start p-0 max-[850px]:w-full",
    ),
    html: [
      tag("div", {
        class: "w-full",
        html: [
          tag("span", {
            class: "badge badge-outline eyebrow h-auto py-2",
            text: language.hero.eyebrow,
          }),
          tag("h1", {
            class: cx(
              "my-6 max-w-[940px] text-[clamp(2.4rem,5vw,6rem)]",
              "font-bold leading-[.93] tracking-[-.064em] text-balance",
              "max-[560px]:text-[clamp(3rem,15vw,4.4rem)]",
            ),
            text: language.hero.title,
          }),
          tag("p", {
            class: "lede m-0 max-w-[730px] text-[clamp(1.1rem,2vw,1.42rem)]",
            text: language.hero.introduction,
          }),
          actions,
        ],
      }),
    ],
  });

  const spectrum = tag("div", {
    class: "spectrum",
    "aria-hidden": "true",
    html: spectrumColors.map(color =>
      tag("span", { class: `spectrum-${color}` }),
    ),
  });

  return tag("section", {
    class: cx(
      "hero relative isolate mx-auto min-h-[min(780px,86vh)] w-full",
      "max-w-[1180px] px-[clamp(1.25rem,5vw,3rem)]",
      "py-[clamp(5rem,10vw,9rem)] max-[560px]:min-h-[78vh] max-[560px]:pt-26",
    ),
    html: [copy, spectrum],
  });
};

const createWork = (
  filters: EventableUIDrawable[],
  projects: readonly PortfolioProject[],
) =>
  tag("section", {
    id: "work",
    class: cx(
      "section mx-auto w-full max-w-[1180px] border-t",
      "px-[clamp(1.25rem,5vw,3rem)] py-[clamp(5rem,10vw,9rem)]",
    ),
    html: [
      tag("div", {
        class: cx(
          "grid grid-cols-[.6fr_1.4fr] items-end gap-8",
          "max-[850px]:grid-cols-1 max-[850px]:gap-2",
        ),
        html: [
          tag("span", {
            class: "eyebrow pb-3",
            text: language.work.eyebrow,
          }),
          tag("h2", {
            class: "section-title",
            text: language.work.title,
          }),
        ],
      }),
      tag("div", {
        class: cx(
          "filters my-10 flex gap-2 overflow-x-auto pb-2",
          "max-[560px]:-mx-5 max-[560px]:px-5",
        ),
        html: filters,
      }),
      tag("div", {
        class: "project-grid grid grid-cols-3 items-start gap-4 max-[850px]:grid-cols-1",
        html: projects.map(project =>
          createProjectCard(project, language.projects.indexOf(project)),
        ),
      }),
    ],
  });

const createRole = (role: ExperienceRole) =>
  tag("article", {
    class: "relative border-l pb-11 pl-8 pt-1",
    html: [
      tag("h3", {
        class: "mb-1 text-lg font-bold",
        text: role.title,
      }),
      tag("span", {
        class: "font-mono text-xs",
        text: role.period,
      }),
      tag("p", {
        class: "mb-0",
        text: role.description,
      }),
    ],
  });

const createExperience = () =>
  tag("section", {
    id: "experience",
    class: cx(
      "section experience mx-auto grid w-full max-w-[1180px]",
      "grid-cols-[.82fr_1.18fr] gap-[clamp(2rem,7vw,6rem)] border-t",
      "px-[clamp(1.25rem,5vw,3rem)] py-[clamp(5rem,10vw,9rem)]",
      "max-[850px]:grid-cols-1",
    ),
    html: [
      tag("div", {
        class: "sticky top-28 self-start max-[850px]:static",
        html: [
          tag("span", {
            class: "eyebrow",
            text: language.experience.eyebrow,
          }),
          tag("h2", {
            class: "section-title mt-4",
            text: language.experience.title,
          }),
        ],
      }),
      tag("div", {
        class: "timeline",
        html: language.experience.roles.map(createRole),
      }),
    ],
  });

const createContact = () =>
  tag("section", {
    class: cx(
      "card contact relative mx-auto w-full max-w-[1180px] overflow-hidden",
      "rounded-[1.4rem] border px-[clamp(1.25rem,5vw,3rem)]",
      "py-[clamp(5rem,10vw,9rem)] text-center",
    ),
    html: [
      tag("span", {
        class: "eyebrow",
        text: language.contact.eyebrow,
      }),
      tag("h2", {
        class: "section-title mx-auto my-4",
        text: language.contact.title,
      }),
      tag("a", {
        class: "btn primary mx-auto mt-4 rounded-full border-0",
        href: `mailto:${language.contact.email}`,
        text: language.contact.email,
      }),
    ],
  });

const createFooter = () =>
  tag("footer", {
    class: cx(
      "footer footer-horizontal mt-16 flex justify-between gap-4 border-t",
      "px-[clamp(1.25rem,5vw,5rem)] py-8 text-sm max-[560px]:flex-col",
    ),
    html: [
      tag("span", { text: language.footer.credit }),
      tag("span", { text: language.footer.location }),
    ],
  });

class Portfolio extends EventableUIDrawable {
  filter: string = language.work.allFilter;

  private rerender() {
    const destination = this.parent ?? this.target;
    if (!destination) return;

    this.reset();
    this.render(destination, true);
  }

  private createFilters() {
    const names = [
      language.work.allFilter,
      ...language.projects.map(project => project.category),
    ];

    return names.map(name =>
      ui.btn({
        class: cx(
          "btn btn-sm btn-outline filter rounded-full",
          this.filter === name ? "active" : "",
        ),
        text: name,
        type: "button",
        click: () => {
          this.filter = name;
          this.rerender();
        },
      }),
    );
  }

  _render(target: any, attach = true): HTMLElement {
    const projects = language.projects.filter(
      project =>
        this.filter === language.work.allFilter ||
        project.category === this.filter,
    );

    this.uit_data.html = [
      createHeader(),
      tag("main", {
        id: "top",
        html: [
          createHero(),
          createWork(this.createFilters(), projects),
          createExperience(),
          createContact(),
        ],
      }),
      createFooter(),
    ];

    return super._render(target, attach);
  }
}

applyMetadata();

const root = runtime.dom.select("#app");
if (!(root instanceof HTMLElement)) throw new Error("Missing #app");

new Portfolio({ tag: "div" } as never).render(root, true);
