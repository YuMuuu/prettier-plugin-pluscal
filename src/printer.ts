import Token from "antlr4/Token";
import { AstPath, ParserOptions, Printer } from "prettier";
import { builders } from "prettier/doc";

const printer: Record<string, Printer> = {
  pluscal: {
    print: function (
      path: AstPath<Token>,
      options: ParserOptions<any>,
      print: (path: AstPath<Token>) => builders.Doc,
      args?: unknown
    ): builders.Doc {
      const node = path.node;
      print(path);
      console.log(node, options, args);
      throw new Error("Function not implemented.");
    },
  },
};

export { printer };
