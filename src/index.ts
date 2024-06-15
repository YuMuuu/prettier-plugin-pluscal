import type { Plugin } from "prettier";
import { printer } from "./printer";
import { options } from "./options";
import { parser } from "./parser";
import { languages } from "./languages";

const plugin: Plugin = {
  languages: languages,
  parsers: parser,
  printers: printer,
  options: options,
};

export { plugin };