import { language } from "./language/en";

export const applyMetadata = () => {
  document.title = language.meta.title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", language.meta.description);
};
