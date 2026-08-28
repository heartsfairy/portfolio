import { cx } from "../config";
import { language } from "../language/en";
import { ui } from "../toolkit";

export const createContact = () =>
  ui.card({
    tag: "section",
    class: cx(
      "contact relative mx-auto w-full max-w-[1180px] overflow-hidden",
      "rounded-[1.4rem] border px-[clamp(1.25rem,5vw,3rem)]",
      "py-[clamp(5rem,10vw,9rem)] text-center",
    ),
    html: [
      ui.span_tag({
        class: "eyebrow",
        text: language.contact.eyebrow,
      }),
      ui.h2_tag({
        class: "section-title mx-auto my-4",
        text: language.contact.title,
      }),
      ui.a_tag({
        class: "btn primary mx-auto mt-4 rounded-full border-0",
        href: `mailto:${language.contact.email}`,
        text: language.contact.email,
      }),
    ],
  });
