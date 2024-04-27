import type { Plugin } from "prettier";
import { languages } from "./languages";
import { parser } from "./parser";
import { printer } from "./printer";
import { options } from "./options";

const plugin: Plugin = {
  languages: languages,
  parsers: parser,
  printers: printer,
  options: options,
};

export { plugin };
