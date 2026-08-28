import {
  linkedinUrl,
  resumePath,
  sourceUrl,
} from "../config";
import { language } from "../language/en";
import { ui } from "../toolkit";

const createSocialLink = (
  href: string,
  icon: string,
  label: string,
  rel: string,
  iconClass = "size-4",
) =>
  ui.a_tag({
    class: "inline-flex items-center gap-2 hover:text-white",
    href,
    target: "_blank",
    rel,
    "aria-label": label,
    html: [
      ui.img_tag({
        class: iconClass,
        src: icon,
        alt: "",
        "aria-hidden": "true",
      }),
      ui.span_tag({
        class: "max-[560px]:hidden",
        text: label,
      }),
    ],
  });

export const createHeader = () =>
  ui.header_tag({
    class: "site-header sticky top-0 z-20 border-b backdrop-blur-lg",
    html: [
      ui.navbar({
        class: [
          "flex min-h-0 w-full justify-between",
          "px-[clamp(1.25rem,5vw,5rem)] py-4",
        ],
        "aria-label": language.navigation.ariaLabel,
        html: [
          ui.a_tag({
            class: [
              "brand inline-flex items-center gap-3 text-xs font-extrabold",
              "tracking-[.14em] text-white",
            ],
            href: "#top",
            text: language.navigation.brand,
          }),
          ui.div_tag({
            class: "flex gap-6 text-sm font-semibold max-[560px]:gap-4",
            html: [
              ui.a_tag({
                class: "max-[560px]:hidden",
                href: "#work",
                text: language.navigation.work,
              }),
              ui.a_tag({
                class: "max-[560px]:hidden",
                href: "#experience",
                text: language.navigation.experience,
              }),
              createSocialLink(
                sourceUrl,
                "github-mark.svg",
                language.navigation.source,
                "noopener noreferrer",
                "size-4 invert",
              ),
              createSocialLink(
                linkedinUrl,
                "linkedin-mark.svg",
                language.navigation.linkedin,
                "me noopener noreferrer",
              ),
              ui.a_tag({
                href: resumePath,
                target: "_blank",
                text: language.navigation.resume,
              }),
            ],
          }),
        ],
      }),
    ],
  });
