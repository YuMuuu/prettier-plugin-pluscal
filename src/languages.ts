import type { SupportLanguage } from "prettier";

const languages: SupportLanguage[] = [
  {
    name: "tlaplus",
    parsers: ["tlaplus"],
    extensions: [".tla"],
    vscodeLanguageIds: ["tlapls", "pluscal"],
  },
];

export { languages };