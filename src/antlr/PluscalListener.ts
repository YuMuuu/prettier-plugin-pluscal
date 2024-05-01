// Generated from Pluscal.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
	/**
	 * Enter a parse tree produced by `PluscalParser.definitions`.
	 * @param ctx the parse tree
	 */
	enterDefinitions?: (ctx: DefinitionsContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.definitions`.
	 * @param ctx the parse tree
	 */
	exitDefinitions?: (ctx: DefinitionsContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.macro`.
	 * @param ctx the parse tree
	 */
	enterMacro?: (ctx: MacroContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.macro`.
	 * @param ctx the parse tree
	 */
	exitMacro?: (ctx: MacroContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.procedure`.
	 * @param ctx the parse tree
	 */
	enterProcedure?: (ctx: ProcedureContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.procedure`.
	 * @param ctx the parse tree
	 */
	exitProcedure?: (ctx: ProcedureContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.process`.
	 * @param ctx the parse tree
	 */
	enterProcess?: (ctx: ProcessContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.process`.
	 * @param ctx the parse tree
	 */
	exitProcess?: (ctx: ProcessContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.vardecls`.
	 * @param ctx the parse tree
	 */
	enterVardecls?: (ctx: VardeclsContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.vardecls`.
	 * @param ctx the parse tree
	 */
	exitVardecls?: (ctx: VardeclsContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.vardecl`.
	 * @param ctx the parse tree
	 */
	enterVardecl?: (ctx: VardeclContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.vardecl`.
	 * @param ctx the parse tree
	 */
	exitVardecl?: (ctx: VardeclContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.pvardecls`.
	 * @param ctx the parse tree
	 */
	enterPvardecls?: (ctx: PvardeclsContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.pvardecls`.
	 * @param ctx the parse tree
	 */
	exitPvardecls?: (ctx: PvardeclsContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.pvardecl`.
	 * @param ctx the parse tree
	 */
	enterPvardecl?: (ctx: PvardeclContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.pvardecl`.
	 * @param ctx the parse tree
	 */
	exitPvardecl?: (ctx: PvardeclContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.algorithmbody`.
	 * @param ctx the parse tree
	 */
	enterAlgorithmbody?: (ctx: AlgorithmbodyContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.algorithmbody`.
	 * @param ctx the parse tree
	 */
	exitAlgorithmbody?: (ctx: AlgorithmbodyContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.unlabeledstmt`.
	 * @param ctx the parse tree
	 */
	enterUnlabeledstmt?: (ctx: UnlabeledstmtContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.unlabeledstmt`.
	 * @param ctx the parse tree
	 */
	exitUnlabeledstmt?: (ctx: UnlabeledstmtContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.assign`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.assign`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.lhs`.
	 * @param ctx the parse tree
	 */
	enterLhs?: (ctx: LhsContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.lhs`.
	 * @param ctx the parse tree
	 */
	exitLhs?: (ctx: LhsContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.if`.
	 * @param ctx the parse tree
	 */
	enterIf?: (ctx: IfContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.if`.
	 * @param ctx the parse tree
	 */
	exitIf?: (ctx: IfContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.while`.
	 * @param ctx the parse tree
	 */
	enterWhile?: (ctx: WhileContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.while`.
	 * @param ctx the parse tree
	 */
	exitWhile?: (ctx: WhileContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.either`.
	 * @param ctx the parse tree
	 */
	enterEither?: (ctx: EitherContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.either`.
	 * @param ctx the parse tree
	 */
	exitEither?: (ctx: EitherContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.with`.
	 * @param ctx the parse tree
	 */
	enterWith?: (ctx: WithContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.with`.
	 * @param ctx the parse tree
	 */
	exitWith?: (ctx: WithContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.await`.
	 * @param ctx the parse tree
	 */
	enterAwait?: (ctx: AwaitContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.await`.
	 * @param ctx the parse tree
	 */
	exitAwait?: (ctx: AwaitContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.print`.
	 * @param ctx the parse tree
	 */
	enterPrint?: (ctx: PrintContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.print`.
	 * @param ctx the parse tree
	 */
	exitPrint?: (ctx: PrintContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.assert`.
	 * @param ctx the parse tree
	 */
	enterAssert?: (ctx: AssertContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.assert`.
	 * @param ctx the parse tree
	 */
	exitAssert?: (ctx: AssertContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.skip`.
	 * @param ctx the parse tree
	 */
	enterSkip?: (ctx: SkipContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.skip`.
	 * @param ctx the parse tree
	 */
	exitSkip?: (ctx: SkipContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.return`.
	 * @param ctx the parse tree
	 */
	enterReturn?: (ctx: ReturnContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.return`.
	 * @param ctx the parse tree
	 */
	exitReturn?: (ctx: ReturnContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.goto`.
	 * @param ctx the parse tree
	 */
	enterGoto?: (ctx: GotoContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.goto`.
	 * @param ctx the parse tree
	 */
	exitGoto?: (ctx: GotoContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.call`.
	 * @param ctx the parse tree
	 */
	enterCall?: (ctx: CallContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.call`.
	 * @param ctx the parse tree
	 */
	exitCall?: (ctx: CallContext) => void;
	/**
	 * Enter a parse tree produced by `PluscalParser.macrocall`.
	 * @param ctx the parse tree
	 */
	enterMacrocall?: (ctx: MacrocallContext) => void;
	/**
	 * Exit a parse tree produced by `PluscalParser.macrocall`.
	 * @param ctx the parse tree
	 */
	exitMacrocall?: (ctx: MacrocallContext) => void;
}

