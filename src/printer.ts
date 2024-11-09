import { AstPath, Doc, ParserOptions, Printer } from "prettier";
import { SyntaxNode } from "tree-sitter";
import { keyMap } from "./printerKeyMap";
import { exprLiteralList, ExprLiteralUnion } from "./expr";

function isExpr(arg: string): arg is ExprLiteralUnion {
  return exprLiteralList.some((v) => v === arg);
}

function printTLAPlus(
  path: AstPath<SyntaxNode>,
  options: ParserOptions,
  print: (path: AstPath<SyntaxNode>) => Doc,
): Doc {
  const node = path.getNode();

  if (!node) {
    throw new Error("path.getNode() is not a node");
  }

  const nodeType = node.type;

  if (isExpr(nodeType)) {
    return keyMap[nodeType](path, print, options);
  }

  throw new Error("nodeType is not expr");
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
