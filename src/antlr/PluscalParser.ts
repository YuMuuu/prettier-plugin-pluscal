// Generated from Pluscal.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import PluscalListener from "./PluscalListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class PluscalParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly Definitions = 4;
	public static readonly Macro = 5;
	public static readonly Procedure = 6;
	public static readonly Process = 7;
	public static readonly VarDecls = 8;
	public static readonly VarDecl = 9;
	public static readonly PVarDecls = 10;
	public static readonly PVarDecl = 11;
	public static readonly AlgorithmBody = 12;
	public static readonly Stmt = 13;
	public static readonly UnlabeledStmt = 14;
	public static readonly Assign = 15;
	public static readonly LHS = 16;
	public static readonly If = 17;
	public static readonly While = 18;
	public static readonly Either = 19;
	public static readonly With = 20;
	public static readonly Await = 21;
	public static readonly Print = 22;
	public static readonly Assert = 23;
	public static readonly Skip = 24;
	public static readonly Return = 25;
	public static readonly Goto = 26;
	public static readonly Call = 27;
	public static readonly MacroCall = 28;
	public static readonly Variable = 29;
	public static readonly Field = 30;
	public static readonly Name = 31;
	public static readonly Label = 32;
	public static readonly Expr = 33;
	public static readonly Defs = 34;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_algorithm = 0;
	public static readonly literalNames: (string | null)[] = [ null, "'--algorithm'", 
                                                            "'--fair algorithm'", 
                                                            "'end algorithm'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             "Definitions", 
                                                             "Macro", "Procedure", 
                                                             "Process", 
                                                             "VarDecls", 
                                                             "VarDecl", 
                                                             "PVarDecls", 
                                                             "PVarDecl", 
                                                             "AlgorithmBody", 
                                                             "Stmt", "UnlabeledStmt", 
                                                             "Assign", "LHS", 
                                                             "If", "While", 
                                                             "Either", "With", 
                                                             "Await", "Print", 
                                                             "Assert", "Skip", 
                                                             "Return", "Goto", 
                                                             "Call", "MacroCall", 
                                                             "Variable", 
                                                             "Field", "Name", 
                                                             "Label", "Expr", 
                                                             "Defs" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"algorithm",
	];
	public get grammarFileName(): string { return "Pluscal.g4"; }
	public get literalNames(): (string | null)[] { return PluscalParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return PluscalParser.symbolicNames; }
	public get ruleNames(): string[] { return PluscalParser.ruleNames; }
	public get serializedATN(): number[] { return PluscalParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, PluscalParser._ATN, PluscalParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public algorithm(): AlgorithmContext {
		let localctx: AlgorithmContext = new AlgorithmContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, PluscalParser.RULE_algorithm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2;
			_la = this._input.LA(1);
			if(!(_la===1 || _la===2)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 3;
			this.match(PluscalParser.Name);
			this.state = 5;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 4;
				this.match(PluscalParser.VarDecls);
				}
			}

			this.state = 8;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 7;
				this.match(PluscalParser.Definitions);
				}
			}

			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 10;
				this.match(PluscalParser.Macro);
				}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 19;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6) {
				{
				{
				this.state = 16;
				this.match(PluscalParser.Procedure);
				}
				}
				this.state = 21;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 28;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
				{
				this.state = 22;
				this.match(PluscalParser.AlgorithmBody);
				}
				break;
			case 7:
				{
				this.state = 24;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 23;
					this.match(PluscalParser.Process);
					}
					}
					this.state = 26;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 30;
			this.match(PluscalParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,34,33,2,0,7,0,1,
	0,1,0,1,0,3,0,6,8,0,1,0,3,0,9,8,0,1,0,5,0,12,8,0,10,0,12,0,15,9,0,1,0,5,
	0,18,8,0,10,0,12,0,21,9,0,1,0,1,0,4,0,25,8,0,11,0,12,0,26,3,0,29,8,0,1,
	0,1,0,1,0,0,0,1,0,0,1,1,0,1,2,37,0,2,1,0,0,0,2,3,7,0,0,0,3,5,5,31,0,0,4,
	6,5,8,0,0,5,4,1,0,0,0,5,6,1,0,0,0,6,8,1,0,0,0,7,9,5,4,0,0,8,7,1,0,0,0,8,
	9,1,0,0,0,9,13,1,0,0,0,10,12,5,5,0,0,11,10,1,0,0,0,12,15,1,0,0,0,13,11,
	1,0,0,0,13,14,1,0,0,0,14,19,1,0,0,0,15,13,1,0,0,0,16,18,5,6,0,0,17,16,1,
	0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,28,1,0,0,0,21,19,1,0,
	0,0,22,29,5,12,0,0,23,25,5,7,0,0,24,23,1,0,0,0,25,26,1,0,0,0,26,24,1,0,
	0,0,26,27,1,0,0,0,27,29,1,0,0,0,28,22,1,0,0,0,28,24,1,0,0,0,29,30,1,0,0,
	0,30,31,5,3,0,0,31,1,1,0,0,0,6,5,8,13,19,26,28];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PluscalParser.__ATN) {
			PluscalParser.__ATN = new ATNDeserializer().deserialize(PluscalParser._serializedATN);
		}

		return PluscalParser.__ATN;
	}


	static DecisionsToDFA = PluscalParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class AlgorithmContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Name(): TerminalNode {
		return this.getToken(PluscalParser.Name, 0);
	}
	public AlgorithmBody(): TerminalNode {
		return this.getToken(PluscalParser.AlgorithmBody, 0);
	}
	public VarDecls(): TerminalNode {
		return this.getToken(PluscalParser.VarDecls, 0);
	}
	public Definitions(): TerminalNode {
		return this.getToken(PluscalParser.Definitions, 0);
	}
	public Macro_list(): TerminalNode[] {
	    	return this.getTokens(PluscalParser.Macro);
	}
	public Macro(i: number): TerminalNode {
		return this.getToken(PluscalParser.Macro, i);
	}
	public Procedure_list(): TerminalNode[] {
	    	return this.getTokens(PluscalParser.Procedure);
	}
	public Procedure(i: number): TerminalNode {
		return this.getToken(PluscalParser.Procedure, i);
	}
	public Process_list(): TerminalNode[] {
	    	return this.getTokens(PluscalParser.Process);
	}
	public Process(i: number): TerminalNode {
		return this.getToken(PluscalParser.Process, i);
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_algorithm;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterAlgorithm) {
	 		listener.enterAlgorithm(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitAlgorithm) {
	 		listener.exitAlgorithm(this);
		}
	}
}
