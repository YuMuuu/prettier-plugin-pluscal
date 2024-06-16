import { AST, AstPath, ParserOptions, Printer } from "prettier";
import { builders } from "prettier/doc";
import { doc } from "prettier";
import { exprLiteralList, exprLiteralUnion } from "./expr";
// import { openAsBlob } from "fs";
import { parser } from "./parser";
import { SyntaxNode } from "tree-sitter";

const { join, line, ifBreak, group } = doc.builders;
const { indent, softline } = doc.builders;

function genericPrint(
  path: AstPath<SyntaxNode>,
  options: ParserOptions<any>,
  print: (
    selector?: string | number | Array<string | number> | AstPath
  ) => builders.Doc
) {
  console.log(path, options);
  const node = path.node;

  new Error("");
}

const isExpr = (arg: string): arg is typeof exprLiteralUnion => {
  return exprLiteralList.some((v) => v == arg);
};

function print(
  path: AstPath<SyntaxNode>,
  options: ParserOptions,
  // Recursively print a child node
  print: (
    selector?: string | number | Array<string | number> | AstPath<SyntaxNode>
  ) => builders.Doc
) {
  console.log(path, options);
  const node = path.node;

  const nodeType = node.type
  isExpr(nodeType) {
    nodeType
  }

  switch (node.type) {
    case "list":
      return group([
        "(",
        indent([softline, join(line, path.map(print, "elements"))]),
        softline,
        ")",
      ]);
    case "symbol":
      return "any";
  }
}

const printer: Record<string, Printer> = {
  pluscal: {
    print: function (
      path: AstPath<SyntaxNode>,
      options: ParserOptions<any>,
      print: (path: AstPath<SyntaxNode>) => builders.Doc,
      args?: unknown
    ): builders.Doc {
      const node = path.node;
      print(path);
      console.log(node, options, args);
      throw new Error("Function not implemented.");
    },
  },
};

export { printer };
