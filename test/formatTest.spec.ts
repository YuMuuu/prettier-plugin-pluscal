import * as prettier from "prettier";
import { plugin } from "../src/index";
import Parser from "tree-sitter";
import TLA from "@tlaplus/tree-sitter-tlaplus";

describe("f function", () => {
  async function parseResult(input: string) {
    try {
      const result = await prettier.format(input, {
        parser: "tlaplus",
        plugins: [plugin],
        printWidth: 80, //lineの動作検証のため最大長を決める
        tabWidth: 2,
      });
      return result;
    } catch (error) {
      console.error("Error in formatting:", error);
      throw error;
    }
  }

  it("should return formated code", async () => {
    const actual = `-------------------------- MODULE test --------------------------
EXTENDS Integers

VARIABLE x

Init == x = 0

Next == x' = x + 1

Spec == Init /\\ [][Next]_x
===================================================================`;

    const parser = new Parser();
    parser.setLanguage(TLA);
    const tree = parser.parse(actual);

    // const callExpression = tree.rootNode.toString();
    // console.log(callExpression)

    const result = await parseResult(actual);

    // console.log("Expected: ", actual);
    // console.log("Result: ",result);
    expect(result).toEqual(actual);
  });
});
