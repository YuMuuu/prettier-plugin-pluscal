import { ParserRuleContext, RuleNode } from "antlr4";
import PluscalVisitor from "./antlr/PluscalVisitor.js";
import { AlgorithmContext } from "./antlr/PluscalParser.js";

class CustomVisitor<Result = any> extends PluscalVisitor<Result> {
  visitChildren(node: RuleNode): Result {
    throw new Error("visitAlgorithmメソッドは実装されていません");
  }
}

export { CustomVisitor };
