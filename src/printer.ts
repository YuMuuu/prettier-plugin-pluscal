import { AstPath, Doc, ParserOptions, Printer } from "prettier";
import { SyntaxNode } from "tree-sitter";
import { keyMap } from "./printerKeyMap";


function isExpr(arg: string): arg is ExprLiteralUnion | "ERROR" {
  return exprLiteralList.some((v) => v === arg);
}

function printTLAPlus(
  path: AstPath<SyntaxNode>,
  options: ParserOptions,
  print: (
    selector?: string | number | Array<string | number> | AstPath<SyntaxNode>
  ) => Doc
): Doc {
  const nodeType = path.node.type;

  if (isExpr(nodeType)) {
    nodeType;
    return keyMap[nodeType](path, print);
  }
}

const printer: Record<string, Printer> = {
  tlaplus: {
    print: function (
      path: AstPath<SyntaxNode>,
      options: ParserOptions<any>,
      print: (path: AstPath<SyntaxNode>) => Doc,
      args?: unknown
    ): Doc {
      return printTLAPlus(path, options, print);
    },
  },
};

export { printer };
