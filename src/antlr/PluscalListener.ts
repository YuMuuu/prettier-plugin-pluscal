// Generated from Pluscal.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { AlgorithmContext } from "./PluscalParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PluscalParser`.
 */
export default class PluscalListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PluscalParser.algorithm`.
	 * @param ctx the parse tree
	 */
	enterAlgorithm?: (ctx: AlgorithmContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.algorithm`.
	 * @param ctx the parse tree
	 */
	exitAlgorithm?: (ctx: AlgorithmContext) => void;
}

