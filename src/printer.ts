import { AstPath, Doc, ParserOptions, Printer } from "prettier";
import { SyntaxNode } from "tree-sitter";
import { keyMap } from "./printerKeyMap";
import { builders } from "prettier/doc";
import { exprLiteralList, ExprLiteralUnion } from "./expr";

const { join, line, ifBreak, group } = builders;

function insertLineBetweenElements(docs: Doc[]): Doc[] {
  return docs.reduce<Doc[]>(
    (acc, item, index) =>
      index < docs.length - 1 ? [...acc, item, line] : [...acc, item],
    [],
  );
}

function isExpr(arg: string): arg is ExprLiteralUnion | "ERROR" {
  const exprLiteralListOrErrorList = exprLiteralList;
  return exprLiteralList.some((v) => v === arg) || arg === "ERROR";
}

function printTLAPlus(
  path: AstPath<SyntaxNode>,
  options: ParserOptions,
  print: (
    selector?: string | number | Array<string | number> | AstPath<SyntaxNode>,
  ) => Doc,
): Doc {
  const nodeType = path.getNode().type;

  if (isExpr(nodeType)) {
    return keyMap[nodeType](path, print, options);
  }
}

const printer: Record<string, Printer> = {
  tlaplus: {
    print: function (
      path: AstPath<SyntaxNode>,
      options: ParserOptions<any>,
      print: (path: AstPath<SyntaxNode>) => Doc,
      args?: unknown,
    ): Doc {
      return printTLAPlus(path, options, print);
    },
  },
};

export { printer };
