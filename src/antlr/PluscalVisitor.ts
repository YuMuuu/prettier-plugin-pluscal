// Generated from Pluscal.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { AlgorithmContext } from "./PluscalParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PluscalParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class PluscalVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PluscalParser.algorithm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlgorithm?: (ctx: AlgorithmContext) => Result;
}

