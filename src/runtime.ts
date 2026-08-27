import { EventableUIDrawable } from "uitoolkit/lib/ui/components/standard/eventable.js";
import { ButtonUIDrawable } from "uitoolkit/lib/ui/components/standard/button.js";
import { ui_proxy } from "uitoolkit/lib/ui/definitions.js";
import { dom } from "uitoolkit/lib/ui/dom/dom.js";
import { NativeDOM } from "uitoolkit/lib/ui/dom/modifiers/native/native.js";
import { EventsTranslator } from "uitoolkit/lib/ui/events.js";

type Factory = (
  meta?: Record<string, unknown>,
  options?: Record<string, unknown>,
) => EventableUIDrawable;
type UI = Record<string, Factory>;

export const runtime = { dom, events: new EventsTranslator(window) };
runtime.dom.add_wrapper(new NativeDOM(window));

const tags = [
  "a",
  "article",
  "button",
  "details",
  "div",
  "footer",
  "h1",
  "h2",
  "h3",
  "h4",
  "header",
  "main",
  "nav",
  "p",
  "section",
  "span",
  "summary",
];

const shortcuts = Object.fromEntries(
  tags.map(tag => [
    `${tag}_tag`,
    (
      meta: Record<string, unknown> = {},
      options: Record<string, unknown> = {},
    ) =>
      new EventableUIDrawable(
        { ...meta, tag } as never,
        options,
      ),
  ]),
);

const btn = (
  meta: Record<string, unknown> = {},
  options: Record<string, unknown> = {},
) => new ButtonUIDrawable(meta as never, { attach: true, ...options });

export const ui = ui_proxy({
  functions: { btn },
  shortcuts,
}) as unknown as UI;
