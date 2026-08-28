import { cx, spectrumColors } from "../config";
import { language } from "../language/en";
import { ui } from "../toolkit";

const createHeroActions = () =>
  ui.div_tag({
    class: "mt-8 flex flex-wrap gap-3",
    html: [
      ui.a_tag({
        class: "btn primary rounded-full border-0 max-[560px]:w-full",
        href: "#work",
        text: language.hero.primaryAction,
      }),
      ui.a_tag({
        class: "btn btn-outline secondary rounded-full max-[560px]:w-full",
        href: `mailto:${language.contact.email}`,
        text: language.hero.secondaryAction,
      }),
    ],
  });

const createSpectrum = () =>
  ui.div_tag({
    class: "spectrum",
    "aria-hidden": "true",
    html: spectrumColors.map(color =>
      ui.span_tag({ class: `spectrum-${color}` }),
    ),
  });

export const createHero = () =>
  ui.hero({
    class: cx(
      "relative isolate mx-auto min-h-[min(780px,86vh)] w-full overflow-hidden",
      "max-w-[1180px] px-[clamp(1.25rem,5vw,3rem)]",
      "py-[clamp(5rem,10vw,9rem)] max-[560px]:min-h-0",
      "max-[560px]:pb-12 max-[560px]:pt-20",
    ),
    html: [
      ui.div_tag({
        class: cx(
          "hero-content hero-copy relative z-[2] w-[min(920px,86%)]",
          "max-w-none justify-start p-0 max-[850px]:w-full",
        ),
        html: [
          ui.div_tag({
            class: "w-full",
            html: [
              ui.badge({
                class: "badge-outline eyebrow h-auto py-2",
                text: language.hero.eyebrow,
              }),
              ui.h1_tag({
                class: cx(
                  "my-6 max-w-[940px] text-[clamp(2.4rem,5vw,6rem)]",
                  "font-bold leading-[.93] tracking-[-.064em] text-balance",
                  "max-[560px]:text-[clamp(2.65rem,12vw,3.4rem)]",
                  "max-[560px]:leading-[.96] max-[560px]:tracking-[-.055em]",
                ),
                text: language.hero.title,
              }),
              ui.p_tag({
                class: "lede m-0 max-w-[730px] text-[clamp(1.1rem,2vw,1.42rem)]",
                text: language.hero.introduction,
              }),
              createHeroActions(),
            ],
          }),
        ],
      }),
      createSpectrum(),
    ],
  });
