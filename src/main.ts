import { applyMetadata } from "./metadata";
import { Portfolio } from "./portfolio";
import { dom } from "./toolkit";
import "./styles.css";

applyMetadata();

const root = dom.select("#app");
if (!(root instanceof HTMLElement)) throw new Error("Missing #app");

new Portfolio({ tag: "div" }).render(root, true);
