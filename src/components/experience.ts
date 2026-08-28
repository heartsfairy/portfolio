import { cx } from "../config";
import { language } from "../language/en";
import { ui } from "../toolkit";

type ExperienceRole = (typeof language.experience.roles)[number];
type EarlierExperienceRole = (typeof language.experience.earlierRoles)[number];

const createRoleMeta = (company: string, period: string, className: string) =>
  ui.div_tag({
    class: className,
    html: [
      ui.span_tag({ text: company }),
      ui.span_tag({ text: period }),
    ],
  });

const createRole = (role: ExperienceRole) =>
  ui.article_tag({
    class: "relative border-l pb-11 pl-8 pt-1",
    html: [
      ui.h3_tag({
        class: "mb-1 text-lg font-bold",
        text: role.title,
      }),
      createRoleMeta(
        role.company,
        role.period,
        "role-meta mb-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs",
      ),
      ui.p_tag({
        class: "m-0",
        text: role.description,
      }),
      ui.ul_tag({
        class: "role-highlights mt-4 grid gap-3 pl-5 text-sm leading-relaxed",
        html: role.highlights.map(highlight =>
          ui.li_tag({ text: highlight }),
        ),
      }),
    ],
  });

const createEarlierRole = (role: EarlierExperienceRole) =>
  ui.article_tag({
    class: "earlier-role relative border-l pb-8 pl-8 pt-1",
    html: [
      ui.h3_tag({
        class: "mb-1 text-base font-bold",
        text: role.title,
      }),
      createRoleMeta(
        role.company,
        role.period,
        "role-meta mb-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs",
      ),
      ui.p_tag({
        class: "m-0 text-sm leading-relaxed",
        text: role.description,
      }),
    ],
  });

export const createExperience = () =>
  ui.section_tag({
    id: "experience",
    class: cx(
      "section experience mx-auto grid w-full max-w-[1180px]",
      "grid-cols-[.82fr_1.18fr] gap-[clamp(2rem,7vw,6rem)] border-t",
      "px-[clamp(1.25rem,5vw,3rem)] py-[clamp(5rem,10vw,9rem)]",
      "max-[850px]:grid-cols-1",
    ),
    html: [
      ui.div_tag({
        class: "sticky top-28 self-start max-[850px]:static",
        html: [
          ui.span_tag({
            class: "eyebrow",
            text: language.experience.eyebrow,
          }),
          ui.h2_tag({
            class: "section-title mt-4",
            text: language.experience.title,
          }),
        ],
      }),
      ui.div_tag({
        class: "timeline",
        html: [
          ...language.experience.roles.map(createRole),
          ui.div_tag({
            class: "border-l pb-6 pl-8 pt-2",
            html: [
              ui.span_tag({
                class: "eyebrow",
                text: language.experience.earlierTitle,
              }),
            ],
          }),
          ...language.experience.earlierRoles.map(createEarlierRole),
        ],
      }),
    ],
  });
