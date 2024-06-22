import { AST, AstPath, Doc, ParserOptions, Printer } from "prettier";
import { builders } from "prettier/doc";
import { doc } from "prettier";
import { exprLiteralList, exprLiteralUnion } from "./expr";
// import { openAsBlob } from "fs";
import { parser } from "./parser";
import { SyntaxNode } from "tree-sitter";

const { join, line, ifBreak, group } = doc.builders;
const { indent, softline } = doc.builders;


function isExpr(arg: string): arg is typeof exprLiteralUnion  {
  return exprLiteralUnion.includes(arg as typeof exprLiteralUnion)
};

function _print(
  path: AstPath<SyntaxNode>,
  options: ParserOptions,
  // Recursively print a child node
  print: (
    selector?: string | number | Array<string | number> | AstPath<SyntaxNode>
  ) => builders.Doc
): Doc {
  const nodeType = path.node.type

  switch (nodeType) {
    case 'single_line':
      return group([path.node.text, softline])
    case 'MODULE':
      return group([path.node.text, softline])
    case 'identifier':
      return group([path.node.text, softline])

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
      return _print(path, options, print);
    },
  },
};

export { printer };
