import Token from "antlr4/Token";
import { AST, AstPath, ParserOptions, Printer } from "prettier";
import { builders } from "prettier/doc";
import { AlgorithmContext } from "./antlr/PluscalParser";
import { doc } from "prettier";
import path from "path";
import { match } from "assert";
import { openAsBlob } from "fs";
import { parser } from "./parser";

const { join, line, ifBreak, group } = doc.builders;

function genericPrint(
  path: AstPath<AlgorithmContext>,
  options: ParserOptions<any>,
  print: (
    selector?: string | number | Array<string | number> | AstPath
  ) => builders.Doc
) {
  console.log(path, options);
  const node = path.node
  // switch(node.getText()) {
  //   case node.Name().getText(): return ""
  //   case node.AlgorithmBody().getText(): return ""
  //   case node.VarDecls().getText(): return ""
  //   case node.Definitions().getText(): return ""
  //   case node.Macro_list().getText(): return ""
    // case node.Macro(1).getText(): return ""
  //   case node.Procedure_list().getText(): return ""
  //   case node.Procedure(1).getText(): return ""
  //   case node.Process_list().getText(): return ""
  //   case node.Process(1).getText(): return ""
  // }
  node.AlgorithmBody().symbol.type
  new Error("")
}




const printer: Record<string, Printer> = {
  pluscal: {
    print: function (
      path: AstPath<AlgorithmContext>,
      options: ParserOptions<any>,
      print: (path: AstPath<AlgorithmContext>) => builders.Doc,
      args?: unknown
    ): builders.Doc {
      const node = path.node;
      print(path);
      console.log(node, options, args);
      throw new Error("Function not implemented.");
    }
  },
};

export { printer };
