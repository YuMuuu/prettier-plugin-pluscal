import { Parser as prettierParser, ParserOptions } from "prettier";
import TLA from "@tlaplus/tree-sitter-tlaplus";
import Parser, { SyntaxNode } from "tree-sitter";

function locStart(node: any): number {
  return node.start.start;
}

function locEnd(node: any): number {
  return node.stop!.stop;
  //memo: non-null operatorを利用して無理やりキャストしているので問題がないか確認する
}

function parse(
  text: string,
  options: ParserOptions<any>
): SyntaxNode | Promise<SyntaxNode> {
  const parser = new Parser();
  parser.setLanguage(TLA);
  const tree = parser.parse(text);
  const callExpression = tree.rootNode.toString();
  return tree.rootNode
}

const parser: Record<string, prettierParser> = {
  pluscal: {
    parse,
    astFormat: "pluscal-ast",
    locStart,
    locEnd,
  },
};

export { parser };
