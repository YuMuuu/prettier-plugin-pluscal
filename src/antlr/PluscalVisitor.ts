// Generated from Pluscal.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { AlgorithmContext } from "./PluscalParser";
import { DefinitionsContext } from "./PluscalParser";
import { MacroContext } from "./PluscalParser";
import { ProcedureContext } from "./PluscalParser";
import { ProcessContext } from "./PluscalParser";
import { VardeclsContext } from "./PluscalParser";
import { VardeclContext } from "./PluscalParser";
import { PvardeclsContext } from "./PluscalParser";
import { PvardeclContext } from "./PluscalParser";
import { AlgorithmbodyContext } from "./PluscalParser";
import { StmtContext } from "./PluscalParser";
import { UnlabeledstmtContext } from "./PluscalParser";
import { AssignContext } from "./PluscalParser";
import { LhsContext } from "./PluscalParser";
import { IfContext } from "./PluscalParser";
import { WhileContext } from "./PluscalParser";
import { EitherContext } from "./PluscalParser";
import { WithContext } from "./PluscalParser";
import { AwaitContext } from "./PluscalParser";
import { PrintContext } from "./PluscalParser";
import { AssertContext } from "./PluscalParser";
import { SkipContext } from "./PluscalParser";
import { ReturnContext } from "./PluscalParser";
import { GotoContext } from "./PluscalParser";
import { CallContext } from "./PluscalParser";
import { MacrocallContext } from "./PluscalParser";


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
	/**
	 * Visit a parse tree produced by `PluscalParser.definitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinitions?: (ctx: DefinitionsContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.macro`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacro?: (ctx: MacroContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.procedure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedure?: (ctx: ProcedureContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.process`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcess?: (ctx: ProcessContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.vardecls`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVardecls?: (ctx: VardeclsContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.vardecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVardecl?: (ctx: VardeclContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.pvardecls`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPvardecls?: (ctx: PvardeclsContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.pvardecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPvardecl?: (ctx: PvardeclContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.algorithmbody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlgorithmbody?: (ctx: AlgorithmbodyContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.unlabeledstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnlabeledstmt?: (ctx: UnlabeledstmtContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.lhs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLhs?: (ctx: LhsContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf?: (ctx: IfContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.while`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile?: (ctx: WhileContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.either`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEither?: (ctx: EitherContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.with`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith?: (ctx: WithContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.await`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAwait?: (ctx: AwaitContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.print`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrint?: (ctx: PrintContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.assert`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssert?: (ctx: AssertContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.skip`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkip?: (ctx: SkipContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.return`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn?: (ctx: ReturnContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.goto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoto?: (ctx: GotoContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall?: (ctx: CallContext) => Result;
	/**
	 * Visit a parse tree produced by `PluscalParser.macrocall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacrocall?: (ctx: MacrocallContext) => Result;
}

