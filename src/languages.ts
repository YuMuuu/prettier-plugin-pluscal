import type { SupportLanguage } from "prettier";

const languages: SupportLanguage[] = [
  {
    name: "pluscal",
    parsers: ["pluscal"],
    extensions: [".tla"],
    vscodeLanguageIds: ["pluscal"],
  },
];

export { languages };