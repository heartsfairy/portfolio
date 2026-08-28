import {
  cx,
  linkedinUrl,
  sourceUrl,
} from "../config";
import { language } from "../language/en";
import { ui } from "../toolkit";

const footerLinkClass = [
  "font-semibold text-[#48d9d2] underline underline-offset-4",
  "hover:text-white",
];

export const createFooter = () =>
  ui.footer({
    class: cx(
      "footer-horizontal mt-16 flex justify-between gap-4 border-t",
      "px-[clamp(1.25rem,5vw,5rem)] py-8 text-sm max-[560px]:flex-col",
    ),
    html: [
      ui.span_tag({ text: language.footer.credit }),
      ui.div_tag({
        class: "flex flex-wrap gap-x-5 gap-y-2",
        html: [
          ui.a_tag({
            class: footerLinkClass,
            href: sourceUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            text: language.footer.source,
          }),
          ui.a_tag({
            class: footerLinkClass,
            href: linkedinUrl,
            target: "_blank",
            rel: "me noopener noreferrer",
            text: language.footer.linkedin,
          }),
        ],
      }),
      ui.span_tag({ text: language.footer.location }),
    ],
  });
