import { CharStream, ParserRuleContext, Token } from "antlr4";
import { Parser, ParserOptions } from "prettier";

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
): Token | Promise<Token> {
  console.log(options);
  const token: Token = {
    tokenIndex: 0,
    line: 0,
    column: 0,
    channel: 0,
    text: "",
    type: 0,
    start: 0,
    stop: 0,
    clone: function (): Token {
      throw new Error("Function not implemented.");
    },
    cloneWithType: function (type: number): Token {
      throw new Error("Function not implemented.");
    },
    getInputStream: function (): CharStream {
      throw new Error("Function not implemented.");
    },
  };
  //ここでANTLRのつなぎ込みを行う

  return token;
}

const parser: Record<string, Parser> = {
  pluscal: {
    parse,
    astFormat: "pluscal-ast",
    locStart,
    locEnd,
  },
};

export { parser };
