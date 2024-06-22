import { Parser as prettierParser, ParserOptions } from "prettier";
import TLA from "@tlaplus/tree-sitter-tlaplus";
import Parser, { SyntaxNode } from "tree-sitter";

function locStart(node: SyntaxNode): number {
  return node.startIndex
}

function locEnd(node: SyntaxNode): number {
  return node.endIndex
}

function parse(
  text: string,
  options: ParserOptions<any>
): SyntaxNode | Promise<SyntaxNode> {
  const parser = new Parser();
  parser.setLanguage(TLA);
  const tree = parser.parse(text);
  return tree.rootNode
}

const parser: Record<string, prettierParser> = {
  pluscal: {
    parse,
    astFormat: "tlaplus",
    locStart,
    locEnd,
  },
};

export { parser };
