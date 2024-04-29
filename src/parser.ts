import { Parser as prettierParser, ParserOptions } from "prettier";
import PluscalParser from "./antlr/PluscalParser";
import CommonTokenStream from "antlr4/CommonTokenStream";
import Lexer from "antlr4/Lexer";
import ParserRuleContext from "antlr4/context/ParserRuleContext";
import CharStreams from "antlr4/CharStreams";
import Parser from "antlr4/Parser.js";
import PluscalLexer from "./antlr/PluscalLexer";
import { TokenStream } from "antlr4";
import { CustomVisitor } from "./CustomVisitor";

function locStart(node: ParserRuleContext): number {
  return node.start.start;
}

function locEnd(node: ParserRuleContext): number {
  return node.stop!.stop;
  //memo: non-null operatorを利用して無理やりキャストしているので問題がないか確認する
}

function parse(
  text: string,
  options: ParserOptions<any>
): Parser & PluscalParser | Promise<Parser & PluscalParser> {
  console.log(options);
  const input = text;
  const chars = CharStreams.fromString(input);
  const lexer: PluscalLexer = new PluscalLexer(chars);
  const tokens = new CommonTokenStream(lexer as unknown as Lexer);
  const parser = new PluscalParser(
    tokens as unknown as TokenStream
  ) as unknown as Parser & PluscalParser;
  parser.buildParseTrees = true;
  parser.addContextToParseTree
  const topNode = parser.algorithm()
  // const tree = parser.algorithm(); //memo: あとで必要なcontextのみを抽出する
  topNode.accept(new CustomVisitor())

  topNode.ruleContext

  return parser;
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
