import {
  EventsTranslator,
  NativeDOM,
  toolkit,
  ui as toolkitUI,
} from "uitoolkit";

export const appToolkit = toolkit(
  new NativeDOM(window),
  new EventsTranslator(window),
);

export const dom = appToolkit.dom;

// toolkit() installs every built-in tag shortcut on the shared theme proxy.
export const ui = appToolkit.theme as Required<typeof toolkitUI>;
