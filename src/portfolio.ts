import {
  EventableUIDrawable,
  type UIDrawableComponent,
} from "uitoolkit";

import { createContact } from "./components/contact";
import { createExperience } from "./components/experience";
import { createFooter } from "./components/footer";
import { createHeader } from "./components/header";
import { createHero } from "./components/hero";
import {
  createWork,
  projectCategories,
} from "./components/work";
import { cx } from "./config";
import { language } from "./language/en";
import { ui } from "./toolkit";

export class Portfolio extends EventableUIDrawable {
  filter: string = language.work.allFilter;

  private rerender() {
    const destination = this.parent ?? this.target;
    if (!destination) return;

    this.reset();
    this.render(destination, true);
  }

  private createFilters() {
    const names = [language.work.allFilter, ...projectCategories];

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
      }, { attach: true }),
    );
  }

  _render(
    target: HTMLElement | UIDrawableComponent,
    attach = true,
  ): HTMLElement {
    const projects = language.projects.filter(
      project =>
        this.filter === language.work.allFilter ||
        project.category === this.filter,
    );

    this.uit_data.html = [
      createHeader(),
      ui.main_tag({
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
