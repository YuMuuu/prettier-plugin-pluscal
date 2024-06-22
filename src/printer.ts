import { AST, AstPath, Doc, ParserOptions, Printer } from "prettier";
import { builders } from "prettier/doc";
import { doc } from "prettier";
import { exprLiteralList, exprLiteralUnion } from "./expr";
// import { openAsBlob } from "fs";
import { parser } from "./parser";
import { SyntaxNode } from "tree-sitter";

const { join, line, ifBreak, group } = doc.builders;
const { indent, softline, hardline } = doc.builders;


// function isExpr(arg: string): arg is typeof exprLiteralUnion  {
//   return exprLiteralUnion.includes(arg as typeof exprLiteralUnion)
// };


function insertLineBetweenElements(docs: builders.Doc[]): builders.Doc[] {
  const result: builders.Doc[] = [];

  docs.forEach((item, index) => {
      result.push(item); 
      if (index < docs.length - 1) {
          result.push(line)
      }
  });

  return result;
}

function printTLAPlus(
  path: AstPath<SyntaxNode>,
  options: ParserOptions,
  // Recursively print a child node
  print: (
    selector?: string | number | Array<string | number> | AstPath<SyntaxNode>
  ) => builders.Doc
): Doc {
  const nodeType = path.node.type

  switch (nodeType) {
    case 'ERROR':
      //note: root nodeがtree-sitter-tlaplusだとERRORになっているのでERRORの場合に子nodeを探索するようにする
      // return path.map(print, 'children')
      return group(insertLineBetweenElements(path.map(print, 'children')))
    case 'single_line':
      return path.node.text
    case 'MODULE':
      return path.node.text
    case 'identifier':
      return path.node.text
    case ',':
      return path.node.text  
    // case 'program':
      // return [join(hardline, path.map(print, 'children')), hardline]

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
      return printTLAPlus(path, options, print);
    },
  },
};

export { printer };
