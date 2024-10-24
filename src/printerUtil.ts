import { Doc } from "prettier";
import { builders } from "prettier/doc";

const { join, line, ifBreak, group, softline, hardline, align, indent } =
  builders;

function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) throw new Error("Size must be greater than 0");
  if (arr.length === 0) return [];

  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, (i + 1) * size),
  );
}

function insertLineBetweenElements(docs: Doc[]): Doc[] {
  return docs.reduce<Doc[]>(
    (acc, item, index) =>
      index < docs.length - 1 ? [...acc, item, line] : [...acc, item],
    [],
  );
}

export { chunk, insertLineBetweenElements };
