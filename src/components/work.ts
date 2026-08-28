import { cx } from "../config";
import {
  language,
  type PortfolioProject,
} from "../language/en";
import { ui } from "../toolkit";

type FilterButton = ReturnType<typeof ui.btn>;

const projectAccents = [
  "var(--orange)",
  "var(--cyan)",
  "var(--violet)",
  "var(--yellow)",
  "var(--green)",
  "var(--blue)",
  "var(--red)",
];

export const projectCategories = [
  ...new Set(language.projects.map(project => project.category)),
];

const categoryAccents = new Map(
  projectCategories.map((category, index) => [
    category,
    projectAccents[index % projectAccents.length],
  ]),
);

const createProjectCard = (project: PortfolioProject, index: number) =>
  ui.collapse({
    class: cx(
      "card project-card relative min-w-0 overflow-hidden rounded-[1.15rem]",
      "max-w-[calc(50%-0.5rem)] flex-[1_1_300px]",
      "max-[850px]:max-w-none max-[850px]:basis-full",
    ),
    style: `--accent: ${categoryAccents.get(project.category) ?? "var(--red)"}`,
    html: [
      ui.summary_tag({
        class: cx(
          "collapse-title project-summary flex min-h-[350px] cursor-pointer list-none",
          "flex-col p-6 max-[850px]:min-h-0",
        ),
        html: [
          ui.span_tag({
            class: "project-number self-end font-mono text-xs",
            text: `${language.work.projectNumberPrefix}${index + 1}`,
          }),
          ui.span_tag({ class: "eyebrow", text: project.category }),
          ui.h3_tag({
            class: "card-title my-3 text-2xl leading-tight tracking-tight",
            text: project.name,
          }),
          ui.p_tag({ class: "summary m-0 grow", text: project.summary }),
          ui.p_tag({
            class: "stack my-5 font-mono text-xs leading-relaxed",
            text: project.stack,
          }),
          ui.span_tag({
            class: cx(
              "text-button mt-2 flex items-center justify-between gap-4",
              "border-t pt-3 text-sm font-bold",
            ),
            html: [
              ui.span_tag({
                class: "view-label",
                text: language.work.caseStudy.open,
              }),
              ui.span_tag({
                class: "hide-label",
                text: language.work.caseStudy.close,
              }),
              ui.span_tag({
                class: "toggle-icon grid size-7 place-items-center rounded-full text-xl",
                "aria-hidden": "true",
                text: language.work.caseStudy.toggleSymbol,
              }),
            ],
          }),
        ],
      }),
      ui.div_tag({
        class: [
          "collapse-content case-study border-t",
          "p-[clamp(1.8rem,4vw,3.4rem)]",
        ],
        html: [
          ui.span_tag({
            class: "case-label",
            text: language.work.caseStudy.eyebrow,
          }),
          ui.h4_tag({
            class: "my-4 text-[clamp(.9rem,1vw,2rem)] leading-none tracking-tight",
            text: project.insight,
          }),
          ui.p_tag({
            class: "m-0 max-w-[62ch] text-sm",
            text: project.details,
          }),
        ],
      }),
    ],
  });

export const createWork = (
  filters: FilterButton[],
  projects: readonly PortfolioProject[],
) =>
  ui.section_tag({
    id: "work",
    class: cx(
      "section mx-auto w-full max-w-[1180px] border-t",
      "px-[clamp(1.25rem,5vw,3rem)] py-[clamp(5rem,10vw,9rem)]",
      "max-[560px]:py-14",
    ),
    html: [
      ui.div_tag({
        class: cx(
          "grid grid-cols-[.6fr_1.4fr] items-end gap-8",
          "max-[850px]:grid-cols-1 max-[850px]:gap-2",
        ),
        html: [
          ui.span_tag({
            class: "eyebrow pb-3",
            text: language.work.eyebrow,
          }),
          ui.h2_tag({
            class: "section-title",
            text: language.work.title,
          }),
        ],
      }),
      ui.div_tag({
        class: cx(
          "filters my-10 flex gap-2 overflow-x-auto pb-2",
          "max-[560px]:-mx-5 max-[560px]:px-5",
        ),
        html: filters,
      }),
      ui.div_tag({
        class: "project-grid flex flex-wrap items-start gap-4",
        html: projects.map(project =>
          createProjectCard(project, language.projects.indexOf(project)),
        ),
      }),
    ],
  });
