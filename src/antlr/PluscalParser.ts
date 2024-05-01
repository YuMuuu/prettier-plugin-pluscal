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
import PluscalVisitor from "./PluscalVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class PluscalParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly VARIABLE = 47;
	public static readonly FIELD = 48;
	public static readonly NAME = 49;
	public static readonly LABEL = 50;
	public static readonly EXPR = 51;
	public static readonly DEFS = 52;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_algorithm = 0;
	public static readonly RULE_definitions = 1;
	public static readonly RULE_macro = 2;
	public static readonly RULE_procedure = 3;
	public static readonly RULE_process = 4;
	public static readonly RULE_vardecls = 5;
	public static readonly RULE_vardecl = 6;
	public static readonly RULE_pvardecls = 7;
	public static readonly RULE_pvardecl = 8;
	public static readonly RULE_algorithmbody = 9;
	public static readonly RULE_stmt = 10;
	public static readonly RULE_unlabeledstmt = 11;
	public static readonly RULE_assign = 12;
	public static readonly RULE_lhs = 13;
	public static readonly RULE_if = 14;
	public static readonly RULE_while = 15;
	public static readonly RULE_either = 16;
	public static readonly RULE_with = 17;
	public static readonly RULE_await = 18;
	public static readonly RULE_print = 19;
	public static readonly RULE_assert = 20;
	public static readonly RULE_skip = 21;
	public static readonly RULE_return = 22;
	public static readonly RULE_goto = 23;
	public static readonly RULE_call = 24;
	public static readonly RULE_macrocall = 25;
	public static readonly literalNames: (string | null)[] = [ null, "'--algorithm'", 
                                                            "'--fair algorithm'", 
                                                            "'end algorithm'", 
                                                            "'define'", 
                                                            "'end define'", 
                                                            "';'", "'Macro'", 
                                                            "','", "'end Macro'", 
                                                            "'procedure'", 
                                                            "'end procedure'", 
                                                            "'fair'", "'+'", 
                                                            "'process'", 
                                                            "'='", "'\\in'", 
                                                            "'end process'", 
                                                            "'VARIABLE'", 
                                                            "'variables'", 
                                                            "'begin'", "':'", 
                                                            "'-'", "':='", 
                                                            "'||'", "'['", 
                                                            "']'", "'.'", 
                                                            "'if'", "'then'", 
                                                            "'elsif'", "'else'", 
                                                            "'end if'", 
                                                            "'while'", "'do'", 
                                                            "'end while'", 
                                                            "'eithr'", "'with'", 
                                                            "'end with ;'", 
                                                            "'await'", "'when'", 
                                                            "'print'", "'assert'", 
                                                            "'skip'", "'return'", 
                                                            "'goto'", "'call'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "VARIABLE", 
                                                             "FIELD", "NAME", 
                                                             "LABEL", "EXPR", 
                                                             "DEFS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"algorithm", "definitions", "macro", "procedure", "process", "vardecls", 
		"vardecl", "pvardecls", "pvardecl", "algorithmbody", "stmt", "unlabeledstmt", 
		"assign", "lhs", "if", "while", "either", "with", "await", "print", "assert", 
		"skip", "return", "goto", "call", "macrocall",
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
			this.state = 52;
			_la = this._input.LA(1);
			if(!(_la===1 || _la===2)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 53;
			this.match(PluscalParser.NAME);
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18 || _la===19) {
				{
				this.state = 54;
				this.vardecls();
				}
			}

			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 57;
				this.definitions();
				}
			}

			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===7) {
				{
				{
				this.state = 60;
				this.macro();
				}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
				{
				{
				this.state = 66;
				this.procedure();
				}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 78;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				{
				this.state = 72;
				this.algorithmbody();
				}
				break;
			case 12:
			case 14:
				{
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 73;
					this.process();
					}
					}
					this.state = 76;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===12 || _la===14);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 80;
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
	// @RuleVersion(0)
	public definitions(): DefinitionsContext {
		let localctx: DefinitionsContext = new DefinitionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, PluscalParser.RULE_definitions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 82;
			this.match(PluscalParser.T__3);
			this.state = 83;
			this.match(PluscalParser.DEFS);
			this.state = 84;
			this.match(PluscalParser.T__4);
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 85;
				this.match(PluscalParser.T__5);
				}
			}

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
	// @RuleVersion(0)
	public macro(): MacroContext {
		let localctx: MacroContext = new MacroContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, PluscalParser.RULE_macro);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 88;
			this.match(PluscalParser.T__6);
			this.state = 89;
			this.match(PluscalParser.NAME);
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===47) {
				{
				this.state = 90;
				this.match(PluscalParser.VARIABLE);
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===8) {
					{
					{
					this.state = 91;
					this.match(PluscalParser.T__7);
					this.state = 92;
					this.match(PluscalParser.VARIABLE);
					}
					}
					this.state = 97;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 100;
			this.algorithmbody();
			this.state = 101;
			this.match(PluscalParser.T__8);
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 102;
				this.match(PluscalParser.T__5);
				}
			}

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
	// @RuleVersion(0)
	public procedure(): ProcedureContext {
		let localctx: ProcedureContext = new ProcedureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, PluscalParser.RULE_procedure);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 105;
			this.match(PluscalParser.T__9);
			this.state = 106;
			this.match(PluscalParser.NAME);
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===47) {
				{
				this.state = 107;
				this.pvardecl();
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===8) {
					{
					{
					this.state = 108;
					this.match(PluscalParser.T__7);
					this.state = 109;
					this.pvardecl();
					}
					}
					this.state = 114;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18 || _la===19) {
				{
				this.state = 117;
				this.pvardecls();
				}
			}

			this.state = 120;
			this.match(PluscalParser.T__10);
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 121;
				this.match(PluscalParser.T__5);
				}
			}

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
	// @RuleVersion(0)
	public process(): ProcessContext {
		let localctx: ProcessContext = new ProcessContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, PluscalParser.RULE_process);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 124;
				this.match(PluscalParser.T__11);
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===13) {
					{
					this.state = 125;
					this.match(PluscalParser.T__12);
					}
				}

				}
			}

			this.state = 130;
			this.match(PluscalParser.T__13);
			this.state = 131;
			this.match(PluscalParser.NAME);
			this.state = 132;
			_la = this._input.LA(1);
			if(!(_la===15 || _la===16)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 133;
			this.match(PluscalParser.EXPR);
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18 || _la===19) {
				{
				this.state = 134;
				this.vardecls();
				}
			}

			this.state = 137;
			this.algorithmbody();
			this.state = 138;
			this.match(PluscalParser.T__16);
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 139;
				this.match(PluscalParser.T__5);
				}
			}

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
	// @RuleVersion(0)
	public vardecls(): VardeclsContext {
		let localctx: VardeclsContext = new VardeclsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, PluscalParser.RULE_vardecls);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 142;
			_la = this._input.LA(1);
			if(!(_la===18 || _la===19)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 143;
				this.vardecl();
				}
				}
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===47);
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
	// @RuleVersion(0)
	public vardecl(): VardeclContext {
		let localctx: VardeclContext = new VardeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, PluscalParser.RULE_vardecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 148;
			this.match(PluscalParser.VARIABLE);
			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15 || _la===16) {
				{
				this.state = 149;
				_la = this._input.LA(1);
				if(!(_la===15 || _la===16)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 150;
				this.match(PluscalParser.EXPR);
				}
			}

			this.state = 153;
			_la = this._input.LA(1);
			if(!(_la===6 || _la===8)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
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
	// @RuleVersion(0)
	public pvardecls(): PvardeclsContext {
		let localctx: PvardeclsContext = new PvardeclsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, PluscalParser.RULE_pvardecls);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 155;
			_la = this._input.LA(1);
			if(!(_la===18 || _la===19)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 158;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 47:
					{
					this.state = 156;
					this.pvardecl();
					}
					break;
				case 6:
				case 8:
					{
					this.state = 157;
					_la = this._input.LA(1);
					if(!(_la===6 || _la===8)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===6 || _la===8 || _la===47);
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
	// @RuleVersion(0)
	public pvardecl(): PvardeclContext {
		let localctx: PvardeclContext = new PvardeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, PluscalParser.RULE_pvardecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 162;
			this.match(PluscalParser.VARIABLE);
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 163;
				this.match(PluscalParser.T__14);
				this.state = 164;
				this.match(PluscalParser.EXPR);
				}
			}

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
	// @RuleVersion(0)
	public algorithmbody(): AlgorithmbodyContext {
		let localctx: AlgorithmbodyContext = new AlgorithmbodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, PluscalParser.RULE_algorithmbody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 167;
			this.match(PluscalParser.T__19);
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 168;
				this.stmt();
				}
				}
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 7338785) !== 0));
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
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let localctx: StmtContext = new StmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, PluscalParser.RULE_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===50) {
				{
				this.state = 173;
				this.match(PluscalParser.LABEL);
				this.state = 174;
				this.match(PluscalParser.T__20);
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===13 || _la===22) {
					{
					this.state = 175;
					_la = this._input.LA(1);
					if(!(_la===13 || _la===22)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				}
			}

			this.state = 180;
			this.unlabeledstmt();
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
	// @RuleVersion(0)
	public unlabeledstmt(): UnlabeledstmtContext {
		let localctx: UnlabeledstmtContext = new UnlabeledstmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, PluscalParser.RULE_unlabeledstmt);
		try {
			this.state = 195;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 47:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 182;
				this.assign();
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 183;
				this.if_();
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 184;
				this.while_();
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 185;
				this.either();
				}
				break;
			case 37:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 186;
				this.with_();
				}
				break;
			case 39:
			case 40:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 187;
				this.await();
				}
				break;
			case 41:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 188;
				this.print();
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 189;
				this.assert();
				}
				break;
			case 43:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 190;
				this.skip();
				}
				break;
			case 44:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 191;
				this.return_();
				}
				break;
			case 45:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 192;
				this.goto();
				}
				break;
			case 46:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 193;
				this.call();
				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 194;
				this.macrocall();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public assign(): AssignContext {
		let localctx: AssignContext = new AssignContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, PluscalParser.RULE_assign);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 197;
			this.lhs();
			this.state = 198;
			this.match(PluscalParser.T__22);
			this.state = 199;
			this.match(PluscalParser.EXPR);
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===24) {
				{
				{
				this.state = 200;
				this.match(PluscalParser.T__23);
				this.state = 201;
				this.lhs();
				this.state = 202;
				this.match(PluscalParser.T__22);
				this.state = 203;
				this.match(PluscalParser.EXPR);
				}
				}
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 210;
			this.match(PluscalParser.T__5);
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
	// @RuleVersion(0)
	public lhs(): LhsContext {
		let localctx: LhsContext = new LhsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, PluscalParser.RULE_lhs);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 212;
			this.match(PluscalParser.VARIABLE);
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25 || _la===27) {
				{
				this.state = 225;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 25:
					{
					this.state = 213;
					this.match(PluscalParser.T__24);
					this.state = 214;
					this.match(PluscalParser.EXPR);
					this.state = 219;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===8) {
						{
						{
						this.state = 215;
						this.match(PluscalParser.T__7);
						this.state = 216;
						this.match(PluscalParser.EXPR);
						}
						}
						this.state = 221;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 222;
					this.match(PluscalParser.T__25);
					}
					break;
				case 27:
					{
					this.state = 223;
					this.match(PluscalParser.T__26);
					this.state = 224;
					this.match(PluscalParser.FIELD);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 229;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
	// @RuleVersion(0)
	public if_(): IfContext {
		let localctx: IfContext = new IfContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, PluscalParser.RULE_if);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 230;
			this.match(PluscalParser.T__27);
			this.state = 231;
			this.match(PluscalParser.EXPR);
			this.state = 232;
			this.match(PluscalParser.T__28);
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 233;
				this.stmt();
				}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 7338785) !== 0));
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===30) {
				{
				{
				this.state = 238;
				this.match(PluscalParser.T__29);
				this.state = 239;
				this.match(PluscalParser.EXPR);
				this.state = 240;
				this.match(PluscalParser.T__28);
				this.state = 242;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 241;
					this.stmt();
					}
					}
					this.state = 244;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 7338785) !== 0));
				}
				}
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===31) {
				{
				this.state = 251;
				this.match(PluscalParser.T__30);
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 252;
					this.stmt();
					}
					}
					this.state = 255;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 7338785) !== 0));
				}
			}

			this.state = 259;
			this.match(PluscalParser.T__31);
			this.state = 260;
			this.match(PluscalParser.T__5);
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
	// @RuleVersion(0)
	public while_(): WhileContext {
		let localctx: WhileContext = new WhileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, PluscalParser.RULE_while);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 262;
			this.match(PluscalParser.T__32);
			this.state = 263;
			this.match(PluscalParser.EXPR);
			this.state = 264;
			this.match(PluscalParser.T__33);
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 265;
				this.stmt();
				}
				}
				this.state = 268;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 7338785) !== 0));
			this.state = 270;
			this.match(PluscalParser.T__34);
			this.state = 271;
			this.match(PluscalParser.T__5);
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
	// @RuleVersion(0)
	public either(): EitherContext {
		let localctx: EitherContext = new EitherContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, PluscalParser.RULE_either);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 273;
			this.match(PluscalParser.T__35);
			this.state = 274;
			this.match(PluscalParser.EXPR);
			this.state = 275;
			this.match(PluscalParser.T__33);
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 276;
				this.stmt();
				}
				}
				this.state = 279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 7338785) !== 0));
			this.state = 281;
			this.match(PluscalParser.T__34);
			this.state = 282;
			this.match(PluscalParser.T__5);
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
	// @RuleVersion(0)
	public with_(): WithContext {
		let localctx: WithContext = new WithContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, PluscalParser.RULE_with);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 284;
			this.match(PluscalParser.T__36);
			this.state = 289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 285;
				this.match(PluscalParser.VARIABLE);
				this.state = 286;
				_la = this._input.LA(1);
				if(!(_la===15 || _la===16)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 287;
				this.match(PluscalParser.EXPR);
				this.state = 288;
				_la = this._input.LA(1);
				if(!(_la===6 || _la===8)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===47);
			this.state = 293;
			this.match(PluscalParser.T__33);
			this.state = 295;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 294;
				this.stmt();
				}
				}
				this.state = 297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 7338785) !== 0));
			this.state = 299;
			this.match(PluscalParser.T__37);
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
	// @RuleVersion(0)
	public await(): AwaitContext {
		let localctx: AwaitContext = new AwaitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, PluscalParser.RULE_await);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 301;
			_la = this._input.LA(1);
			if(!(_la===39 || _la===40)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 302;
			this.match(PluscalParser.EXPR);
			this.state = 303;
			this.match(PluscalParser.T__5);
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
	// @RuleVersion(0)
	public print(): PrintContext {
		let localctx: PrintContext = new PrintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, PluscalParser.RULE_print);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 305;
			this.match(PluscalParser.T__40);
			this.state = 306;
			this.match(PluscalParser.EXPR);
			this.state = 307;
			this.match(PluscalParser.T__5);
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
	// @RuleVersion(0)
	public assert(): AssertContext {
		let localctx: AssertContext = new AssertContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, PluscalParser.RULE_assert);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 309;
			this.match(PluscalParser.T__41);
			this.state = 310;
			this.match(PluscalParser.EXPR);
			this.state = 311;
			this.match(PluscalParser.T__5);
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
	// @RuleVersion(0)
	public skip(): SkipContext {
		let localctx: SkipContext = new SkipContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, PluscalParser.RULE_skip);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 313;
			this.match(PluscalParser.T__42);
			this.state = 314;
			this.match(PluscalParser.T__5);
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
	// @RuleVersion(0)
	public return_(): ReturnContext {
		let localctx: ReturnContext = new ReturnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, PluscalParser.RULE_return);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 316;
			this.match(PluscalParser.T__43);
			this.state = 317;
			this.match(PluscalParser.T__5);
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
	// @RuleVersion(0)
	public goto(): GotoContext {
		let localctx: GotoContext = new GotoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, PluscalParser.RULE_goto);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 319;
			this.match(PluscalParser.T__44);
			this.state = 320;
			this.match(PluscalParser.LABEL);
			this.state = 321;
			this.match(PluscalParser.T__5);
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
	// @RuleVersion(0)
	public call(): CallContext {
		let localctx: CallContext = new CallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, PluscalParser.RULE_call);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 323;
			this.match(PluscalParser.T__45);
			this.state = 324;
			this.macrocall();
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
	// @RuleVersion(0)
	public macrocall(): MacrocallContext {
		let localctx: MacrocallContext = new MacrocallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, PluscalParser.RULE_macrocall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 326;
			this.match(PluscalParser.NAME);
			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===51) {
				{
				this.state = 327;
				this.match(PluscalParser.EXPR);
				this.state = 332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===8) {
					{
					{
					this.state = 328;
					this.match(PluscalParser.T__7);
					this.state = 329;
					this.match(PluscalParser.EXPR);
					}
					}
					this.state = 334;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 337;
			this.match(PluscalParser.T__5);
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

	public static readonly _serializedATN: number[] = [4,1,52,340,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,1,0,1,0,1,0,3,0,56,8,0,1,0,3,0,59,8,0,1,0,5,0,62,8,0,10,0,
	12,0,65,9,0,1,0,5,0,68,8,0,10,0,12,0,71,9,0,1,0,1,0,4,0,75,8,0,11,0,12,
	0,76,3,0,79,8,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,87,8,1,1,2,1,2,1,2,1,2,1,2,
	5,2,94,8,2,10,2,12,2,97,9,2,3,2,99,8,2,1,2,1,2,1,2,3,2,104,8,2,1,3,1,3,
	1,3,1,3,1,3,5,3,111,8,3,10,3,12,3,114,9,3,3,3,116,8,3,1,3,3,3,119,8,3,1,
	3,1,3,3,3,123,8,3,1,4,1,4,3,4,127,8,4,3,4,129,8,4,1,4,1,4,1,4,1,4,1,4,3,
	4,136,8,4,1,4,1,4,1,4,3,4,141,8,4,1,5,1,5,4,5,145,8,5,11,5,12,5,146,1,6,
	1,6,1,6,3,6,152,8,6,1,6,1,6,1,7,1,7,1,7,4,7,159,8,7,11,7,12,7,160,1,8,1,
	8,1,8,3,8,166,8,8,1,9,1,9,4,9,170,8,9,11,9,12,9,171,1,10,1,10,1,10,3,10,
	177,8,10,3,10,179,8,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
	1,11,1,11,1,11,1,11,1,11,3,11,196,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,
	12,1,12,5,12,206,8,12,10,12,12,12,209,9,12,1,12,1,12,1,13,1,13,1,13,1,13,
	1,13,5,13,218,8,13,10,13,12,13,221,9,13,1,13,1,13,1,13,5,13,226,8,13,10,
	13,12,13,229,9,13,1,14,1,14,1,14,1,14,4,14,235,8,14,11,14,12,14,236,1,14,
	1,14,1,14,1,14,4,14,243,8,14,11,14,12,14,244,5,14,247,8,14,10,14,12,14,
	250,9,14,1,14,1,14,4,14,254,8,14,11,14,12,14,255,3,14,258,8,14,1,14,1,14,
	1,14,1,15,1,15,1,15,1,15,4,15,267,8,15,11,15,12,15,268,1,15,1,15,1,15,1,
	16,1,16,1,16,1,16,4,16,278,8,16,11,16,12,16,279,1,16,1,16,1,16,1,17,1,17,
	1,17,1,17,1,17,4,17,290,8,17,11,17,12,17,291,1,17,1,17,4,17,296,8,17,11,
	17,12,17,297,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,
	1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,24,1,24,1,
	24,1,25,1,25,1,25,1,25,5,25,331,8,25,10,25,12,25,334,9,25,3,25,336,8,25,
	1,25,1,25,1,25,0,0,26,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
	36,38,40,42,44,46,48,50,0,6,1,0,1,2,1,0,15,16,1,0,18,19,2,0,6,6,8,8,2,0,
	13,13,22,22,1,0,39,40,366,0,52,1,0,0,0,2,82,1,0,0,0,4,88,1,0,0,0,6,105,
	1,0,0,0,8,128,1,0,0,0,10,142,1,0,0,0,12,148,1,0,0,0,14,155,1,0,0,0,16,162,
	1,0,0,0,18,167,1,0,0,0,20,178,1,0,0,0,22,195,1,0,0,0,24,197,1,0,0,0,26,
	212,1,0,0,0,28,230,1,0,0,0,30,262,1,0,0,0,32,273,1,0,0,0,34,284,1,0,0,0,
	36,301,1,0,0,0,38,305,1,0,0,0,40,309,1,0,0,0,42,313,1,0,0,0,44,316,1,0,
	0,0,46,319,1,0,0,0,48,323,1,0,0,0,50,326,1,0,0,0,52,53,7,0,0,0,53,55,5,
	49,0,0,54,56,3,10,5,0,55,54,1,0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,59,3,
	2,1,0,58,57,1,0,0,0,58,59,1,0,0,0,59,63,1,0,0,0,60,62,3,4,2,0,61,60,1,0,
	0,0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,69,1,0,0,0,65,63,1,0,0,
	0,66,68,3,6,3,0,67,66,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,
	70,78,1,0,0,0,71,69,1,0,0,0,72,79,3,18,9,0,73,75,3,8,4,0,74,73,1,0,0,0,
	75,76,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,79,1,0,0,0,78,72,1,0,0,0,78,
	74,1,0,0,0,79,80,1,0,0,0,80,81,5,3,0,0,81,1,1,0,0,0,82,83,5,4,0,0,83,84,
	5,52,0,0,84,86,5,5,0,0,85,87,5,6,0,0,86,85,1,0,0,0,86,87,1,0,0,0,87,3,1,
	0,0,0,88,89,5,7,0,0,89,98,5,49,0,0,90,95,5,47,0,0,91,92,5,8,0,0,92,94,5,
	47,0,0,93,91,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,99,1,
	0,0,0,97,95,1,0,0,0,98,90,1,0,0,0,98,99,1,0,0,0,99,100,1,0,0,0,100,101,
	3,18,9,0,101,103,5,9,0,0,102,104,5,6,0,0,103,102,1,0,0,0,103,104,1,0,0,
	0,104,5,1,0,0,0,105,106,5,10,0,0,106,115,5,49,0,0,107,112,3,16,8,0,108,
	109,5,8,0,0,109,111,3,16,8,0,110,108,1,0,0,0,111,114,1,0,0,0,112,110,1,
	0,0,0,112,113,1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,0,115,107,1,0,0,0,115,
	116,1,0,0,0,116,118,1,0,0,0,117,119,3,14,7,0,118,117,1,0,0,0,118,119,1,
	0,0,0,119,120,1,0,0,0,120,122,5,11,0,0,121,123,5,6,0,0,122,121,1,0,0,0,
	122,123,1,0,0,0,123,7,1,0,0,0,124,126,5,12,0,0,125,127,5,13,0,0,126,125,
	1,0,0,0,126,127,1,0,0,0,127,129,1,0,0,0,128,124,1,0,0,0,128,129,1,0,0,0,
	129,130,1,0,0,0,130,131,5,14,0,0,131,132,5,49,0,0,132,133,7,1,0,0,133,135,
	5,51,0,0,134,136,3,10,5,0,135,134,1,0,0,0,135,136,1,0,0,0,136,137,1,0,0,
	0,137,138,3,18,9,0,138,140,5,17,0,0,139,141,5,6,0,0,140,139,1,0,0,0,140,
	141,1,0,0,0,141,9,1,0,0,0,142,144,7,2,0,0,143,145,3,12,6,0,144,143,1,0,
	0,0,145,146,1,0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,147,11,1,0,0,0,148,
	151,5,47,0,0,149,150,7,1,0,0,150,152,5,51,0,0,151,149,1,0,0,0,151,152,1,
	0,0,0,152,153,1,0,0,0,153,154,7,3,0,0,154,13,1,0,0,0,155,158,7,2,0,0,156,
	159,3,16,8,0,157,159,7,3,0,0,158,156,1,0,0,0,158,157,1,0,0,0,159,160,1,
	0,0,0,160,158,1,0,0,0,160,161,1,0,0,0,161,15,1,0,0,0,162,165,5,47,0,0,163,
	164,5,15,0,0,164,166,5,51,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,17,1,
	0,0,0,167,169,5,20,0,0,168,170,3,20,10,0,169,168,1,0,0,0,170,171,1,0,0,
	0,171,169,1,0,0,0,171,172,1,0,0,0,172,19,1,0,0,0,173,174,5,50,0,0,174,176,
	5,21,0,0,175,177,7,4,0,0,176,175,1,0,0,0,176,177,1,0,0,0,177,179,1,0,0,
	0,178,173,1,0,0,0,178,179,1,0,0,0,179,180,1,0,0,0,180,181,3,22,11,0,181,
	21,1,0,0,0,182,196,3,24,12,0,183,196,3,28,14,0,184,196,3,30,15,0,185,196,
	3,32,16,0,186,196,3,34,17,0,187,196,3,36,18,0,188,196,3,38,19,0,189,196,
	3,40,20,0,190,196,3,42,21,0,191,196,3,44,22,0,192,196,3,46,23,0,193,196,
	3,48,24,0,194,196,3,50,25,0,195,182,1,0,0,0,195,183,1,0,0,0,195,184,1,0,
	0,0,195,185,1,0,0,0,195,186,1,0,0,0,195,187,1,0,0,0,195,188,1,0,0,0,195,
	189,1,0,0,0,195,190,1,0,0,0,195,191,1,0,0,0,195,192,1,0,0,0,195,193,1,0,
	0,0,195,194,1,0,0,0,196,23,1,0,0,0,197,198,3,26,13,0,198,199,5,23,0,0,199,
	207,5,51,0,0,200,201,5,24,0,0,201,202,3,26,13,0,202,203,5,23,0,0,203,204,
	5,51,0,0,204,206,1,0,0,0,205,200,1,0,0,0,206,209,1,0,0,0,207,205,1,0,0,
	0,207,208,1,0,0,0,208,210,1,0,0,0,209,207,1,0,0,0,210,211,5,6,0,0,211,25,
	1,0,0,0,212,227,5,47,0,0,213,214,5,25,0,0,214,219,5,51,0,0,215,216,5,8,
	0,0,216,218,5,51,0,0,217,215,1,0,0,0,218,221,1,0,0,0,219,217,1,0,0,0,219,
	220,1,0,0,0,220,222,1,0,0,0,221,219,1,0,0,0,222,226,5,26,0,0,223,224,5,
	27,0,0,224,226,5,48,0,0,225,213,1,0,0,0,225,223,1,0,0,0,226,229,1,0,0,0,
	227,225,1,0,0,0,227,228,1,0,0,0,228,27,1,0,0,0,229,227,1,0,0,0,230,231,
	5,28,0,0,231,232,5,51,0,0,232,234,5,29,0,0,233,235,3,20,10,0,234,233,1,
	0,0,0,235,236,1,0,0,0,236,234,1,0,0,0,236,237,1,0,0,0,237,248,1,0,0,0,238,
	239,5,30,0,0,239,240,5,51,0,0,240,242,5,29,0,0,241,243,3,20,10,0,242,241,
	1,0,0,0,243,244,1,0,0,0,244,242,1,0,0,0,244,245,1,0,0,0,245,247,1,0,0,0,
	246,238,1,0,0,0,247,250,1,0,0,0,248,246,1,0,0,0,248,249,1,0,0,0,249,257,
	1,0,0,0,250,248,1,0,0,0,251,253,5,31,0,0,252,254,3,20,10,0,253,252,1,0,
	0,0,254,255,1,0,0,0,255,253,1,0,0,0,255,256,1,0,0,0,256,258,1,0,0,0,257,
	251,1,0,0,0,257,258,1,0,0,0,258,259,1,0,0,0,259,260,5,32,0,0,260,261,5,
	6,0,0,261,29,1,0,0,0,262,263,5,33,0,0,263,264,5,51,0,0,264,266,5,34,0,0,
	265,267,3,20,10,0,266,265,1,0,0,0,267,268,1,0,0,0,268,266,1,0,0,0,268,269,
	1,0,0,0,269,270,1,0,0,0,270,271,5,35,0,0,271,272,5,6,0,0,272,31,1,0,0,0,
	273,274,5,36,0,0,274,275,5,51,0,0,275,277,5,34,0,0,276,278,3,20,10,0,277,
	276,1,0,0,0,278,279,1,0,0,0,279,277,1,0,0,0,279,280,1,0,0,0,280,281,1,0,
	0,0,281,282,5,35,0,0,282,283,5,6,0,0,283,33,1,0,0,0,284,289,5,37,0,0,285,
	286,5,47,0,0,286,287,7,1,0,0,287,288,5,51,0,0,288,290,7,3,0,0,289,285,1,
	0,0,0,290,291,1,0,0,0,291,289,1,0,0,0,291,292,1,0,0,0,292,293,1,0,0,0,293,
	295,5,34,0,0,294,296,3,20,10,0,295,294,1,0,0,0,296,297,1,0,0,0,297,295,
	1,0,0,0,297,298,1,0,0,0,298,299,1,0,0,0,299,300,5,38,0,0,300,35,1,0,0,0,
	301,302,7,5,0,0,302,303,5,51,0,0,303,304,5,6,0,0,304,37,1,0,0,0,305,306,
	5,41,0,0,306,307,5,51,0,0,307,308,5,6,0,0,308,39,1,0,0,0,309,310,5,42,0,
	0,310,311,5,51,0,0,311,312,5,6,0,0,312,41,1,0,0,0,313,314,5,43,0,0,314,
	315,5,6,0,0,315,43,1,0,0,0,316,317,5,44,0,0,317,318,5,6,0,0,318,45,1,0,
	0,0,319,320,5,45,0,0,320,321,5,50,0,0,321,322,5,6,0,0,322,47,1,0,0,0,323,
	324,5,46,0,0,324,325,3,50,25,0,325,49,1,0,0,0,326,335,5,49,0,0,327,332,
	5,51,0,0,328,329,5,8,0,0,329,331,5,51,0,0,330,328,1,0,0,0,331,334,1,0,0,
	0,332,330,1,0,0,0,332,333,1,0,0,0,333,336,1,0,0,0,334,332,1,0,0,0,335,327,
	1,0,0,0,335,336,1,0,0,0,336,337,1,0,0,0,337,338,5,6,0,0,338,51,1,0,0,0,
	42,55,58,63,69,76,78,86,95,98,103,112,115,118,122,126,128,135,140,146,151,
	158,160,165,171,176,178,195,207,219,225,227,236,244,248,255,257,268,279,
	291,297,332,335];

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
	public NAME(): TerminalNode {
		return this.getToken(PluscalParser.NAME, 0);
	}
	public algorithmbody(): AlgorithmbodyContext {
		return this.getTypedRuleContext(AlgorithmbodyContext, 0) as AlgorithmbodyContext;
	}
	public vardecls(): VardeclsContext {
		return this.getTypedRuleContext(VardeclsContext, 0) as VardeclsContext;
	}
	public definitions(): DefinitionsContext {
		return this.getTypedRuleContext(DefinitionsContext, 0) as DefinitionsContext;
	}
	public macro_list(): MacroContext[] {
		return this.getTypedRuleContexts(MacroContext) as MacroContext[];
	}
	public macro(i: number): MacroContext {
		return this.getTypedRuleContext(MacroContext, i) as MacroContext;
	}
	public procedure_list(): ProcedureContext[] {
		return this.getTypedRuleContexts(ProcedureContext) as ProcedureContext[];
	}
	public procedure(i: number): ProcedureContext {
		return this.getTypedRuleContext(ProcedureContext, i) as ProcedureContext;
	}
	public process_list(): ProcessContext[] {
		return this.getTypedRuleContexts(ProcessContext) as ProcessContext[];
	}
	public process(i: number): ProcessContext {
		return this.getTypedRuleContext(ProcessContext, i) as ProcessContext;
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
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitAlgorithm) {
			return visitor.visitAlgorithm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinitionsContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEFS(): TerminalNode {
		return this.getToken(PluscalParser.DEFS, 0);
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_definitions;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterDefinitions) {
	 		listener.enterDefinitions(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitDefinitions) {
	 		listener.exitDefinitions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitDefinitions) {
			return visitor.visitDefinitions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(PluscalParser.NAME, 0);
	}
	public algorithmbody(): AlgorithmbodyContext {
		return this.getTypedRuleContext(AlgorithmbodyContext, 0) as AlgorithmbodyContext;
	}
	public VARIABLE_list(): TerminalNode[] {
	    	return this.getTokens(PluscalParser.VARIABLE);
	}
	public VARIABLE(i: number): TerminalNode {
		return this.getToken(PluscalParser.VARIABLE, i);
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_macro;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterMacro) {
	 		listener.enterMacro(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitMacro) {
	 		listener.exitMacro(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitMacro) {
			return visitor.visitMacro(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcedureContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(PluscalParser.NAME, 0);
	}
	public pvardecl_list(): PvardeclContext[] {
		return this.getTypedRuleContexts(PvardeclContext) as PvardeclContext[];
	}
	public pvardecl(i: number): PvardeclContext {
		return this.getTypedRuleContext(PvardeclContext, i) as PvardeclContext;
	}
	public pvardecls(): PvardeclsContext {
		return this.getTypedRuleContext(PvardeclsContext, 0) as PvardeclsContext;
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_procedure;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterProcedure) {
	 		listener.enterProcedure(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitProcedure) {
	 		listener.exitProcedure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitProcedure) {
			return visitor.visitProcedure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(PluscalParser.NAME, 0);
	}
	public EXPR(): TerminalNode {
		return this.getToken(PluscalParser.EXPR, 0);
	}
	public algorithmbody(): AlgorithmbodyContext {
		return this.getTypedRuleContext(AlgorithmbodyContext, 0) as AlgorithmbodyContext;
	}
	public vardecls(): VardeclsContext {
		return this.getTypedRuleContext(VardeclsContext, 0) as VardeclsContext;
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_process;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterProcess) {
	 		listener.enterProcess(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitProcess) {
	 		listener.exitProcess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitProcess) {
			return visitor.visitProcess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VardeclsContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public vardecl_list(): VardeclContext[] {
		return this.getTypedRuleContexts(VardeclContext) as VardeclContext[];
	}
	public vardecl(i: number): VardeclContext {
		return this.getTypedRuleContext(VardeclContext, i) as VardeclContext;
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_vardecls;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterVardecls) {
	 		listener.enterVardecls(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitVardecls) {
	 		listener.exitVardecls(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitVardecls) {
			return visitor.visitVardecls(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VardeclContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE(): TerminalNode {
		return this.getToken(PluscalParser.VARIABLE, 0);
	}
	public EXPR(): TerminalNode {
		return this.getToken(PluscalParser.EXPR, 0);
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_vardecl;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterVardecl) {
	 		listener.enterVardecl(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitVardecl) {
	 		listener.exitVardecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitVardecl) {
			return visitor.visitVardecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PvardeclsContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pvardecl_list(): PvardeclContext[] {
		return this.getTypedRuleContexts(PvardeclContext) as PvardeclContext[];
	}
	public pvardecl(i: number): PvardeclContext {
		return this.getTypedRuleContext(PvardeclContext, i) as PvardeclContext;
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_pvardecls;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterPvardecls) {
	 		listener.enterPvardecls(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitPvardecls) {
	 		listener.exitPvardecls(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitPvardecls) {
			return visitor.visitPvardecls(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PvardeclContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE(): TerminalNode {
		return this.getToken(PluscalParser.VARIABLE, 0);
	}
	public EXPR(): TerminalNode {
		return this.getToken(PluscalParser.EXPR, 0);
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_pvardecl;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterPvardecl) {
	 		listener.enterPvardecl(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitPvardecl) {
	 		listener.exitPvardecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitPvardecl) {
			return visitor.visitPvardecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlgorithmbodyContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_algorithmbody;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterAlgorithmbody) {
	 		listener.enterAlgorithmbody(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitAlgorithmbody) {
	 		listener.exitAlgorithmbody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitAlgorithmbody) {
			return visitor.visitAlgorithmbody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unlabeledstmt(): UnlabeledstmtContext {
		return this.getTypedRuleContext(UnlabeledstmtContext, 0) as UnlabeledstmtContext;
	}
	public LABEL(): TerminalNode {
		return this.getToken(PluscalParser.LABEL, 0);
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_stmt;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterStmt) {
	 		listener.enterStmt(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitStmt) {
	 		listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnlabeledstmtContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assign(): AssignContext {
		return this.getTypedRuleContext(AssignContext, 0) as AssignContext;
	}
	public if_(): IfContext {
		return this.getTypedRuleContext(IfContext, 0) as IfContext;
	}
	public while_(): WhileContext {
		return this.getTypedRuleContext(WhileContext, 0) as WhileContext;
	}
	public either(): EitherContext {
		return this.getTypedRuleContext(EitherContext, 0) as EitherContext;
	}
	public with_(): WithContext {
		return this.getTypedRuleContext(WithContext, 0) as WithContext;
	}
	public await(): AwaitContext {
		return this.getTypedRuleContext(AwaitContext, 0) as AwaitContext;
	}
	public print(): PrintContext {
		return this.getTypedRuleContext(PrintContext, 0) as PrintContext;
	}
	public assert(): AssertContext {
		return this.getTypedRuleContext(AssertContext, 0) as AssertContext;
	}
	public skip(): SkipContext {
		return this.getTypedRuleContext(SkipContext, 0) as SkipContext;
	}
	public return_(): ReturnContext {
		return this.getTypedRuleContext(ReturnContext, 0) as ReturnContext;
	}
	public goto(): GotoContext {
		return this.getTypedRuleContext(GotoContext, 0) as GotoContext;
	}
	public call(): CallContext {
		return this.getTypedRuleContext(CallContext, 0) as CallContext;
	}
	public macrocall(): MacrocallContext {
		return this.getTypedRuleContext(MacrocallContext, 0) as MacrocallContext;
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_unlabeledstmt;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterUnlabeledstmt) {
	 		listener.enterUnlabeledstmt(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitUnlabeledstmt) {
	 		listener.exitUnlabeledstmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitUnlabeledstmt) {
			return visitor.visitUnlabeledstmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public lhs_list(): LhsContext[] {
		return this.getTypedRuleContexts(LhsContext) as LhsContext[];
	}
	public lhs(i: number): LhsContext {
		return this.getTypedRuleContext(LhsContext, i) as LhsContext;
	}
	public EXPR_list(): TerminalNode[] {
	    	return this.getTokens(PluscalParser.EXPR);
	}
	public EXPR(i: number): TerminalNode {
		return this.getToken(PluscalParser.EXPR, i);
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_assign;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterAssign) {
	 		listener.enterAssign(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitAssign) {
	 		listener.exitAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitAssign) {
			return visitor.visitAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LhsContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE(): TerminalNode {
		return this.getToken(PluscalParser.VARIABLE, 0);
	}
	public EXPR_list(): TerminalNode[] {
	    	return this.getTokens(PluscalParser.EXPR);
	}
	public EXPR(i: number): TerminalNode {
		return this.getToken(PluscalParser.EXPR, i);
	}
	public FIELD_list(): TerminalNode[] {
	    	return this.getTokens(PluscalParser.FIELD);
	}
	public FIELD(i: number): TerminalNode {
		return this.getToken(PluscalParser.FIELD, i);
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_lhs;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterLhs) {
	 		listener.enterLhs(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitLhs) {
	 		listener.exitLhs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitLhs) {
			return visitor.visitLhs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXPR_list(): TerminalNode[] {
	    	return this.getTokens(PluscalParser.EXPR);
	}
	public EXPR(i: number): TerminalNode {
		return this.getToken(PluscalParser.EXPR, i);
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_if;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterIf) {
	 		listener.enterIf(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitIf) {
	 		listener.exitIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitIf) {
			return visitor.visitIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXPR(): TerminalNode {
		return this.getToken(PluscalParser.EXPR, 0);
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_while;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterWhile) {
	 		listener.enterWhile(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitWhile) {
	 		listener.exitWhile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitWhile) {
			return visitor.visitWhile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EitherContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXPR(): TerminalNode {
		return this.getToken(PluscalParser.EXPR, 0);
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_either;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterEither) {
	 		listener.enterEither(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitEither) {
	 		listener.exitEither(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitEither) {
			return visitor.visitEither(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_list(): TerminalNode[] {
	    	return this.getTokens(PluscalParser.VARIABLE);
	}
	public VARIABLE(i: number): TerminalNode {
		return this.getToken(PluscalParser.VARIABLE, i);
	}
	public EXPR_list(): TerminalNode[] {
	    	return this.getTokens(PluscalParser.EXPR);
	}
	public EXPR(i: number): TerminalNode {
		return this.getToken(PluscalParser.EXPR, i);
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_with;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterWith) {
	 		listener.enterWith(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitWith) {
	 		listener.exitWith(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitWith) {
			return visitor.visitWith(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AwaitContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXPR(): TerminalNode {
		return this.getToken(PluscalParser.EXPR, 0);
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_await;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterAwait) {
	 		listener.enterAwait(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitAwait) {
	 		listener.exitAwait(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitAwait) {
			return visitor.visitAwait(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXPR(): TerminalNode {
		return this.getToken(PluscalParser.EXPR, 0);
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_print;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterPrint) {
	 		listener.enterPrint(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitPrint) {
	 		listener.exitPrint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitPrint) {
			return visitor.visitPrint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXPR(): TerminalNode {
		return this.getToken(PluscalParser.EXPR, 0);
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_assert;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterAssert) {
	 		listener.enterAssert(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitAssert) {
	 		listener.exitAssert(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitAssert) {
			return visitor.visitAssert(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SkipContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_skip;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterSkip) {
	 		listener.enterSkip(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitSkip) {
	 		listener.exitSkip(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitSkip) {
			return visitor.visitSkip(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_return;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterReturn) {
	 		listener.enterReturn(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitReturn) {
	 		listener.exitReturn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitReturn) {
			return visitor.visitReturn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GotoContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LABEL(): TerminalNode {
		return this.getToken(PluscalParser.LABEL, 0);
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_goto;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterGoto) {
	 		listener.enterGoto(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitGoto) {
	 		listener.exitGoto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitGoto) {
			return visitor.visitGoto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public macrocall(): MacrocallContext {
		return this.getTypedRuleContext(MacrocallContext, 0) as MacrocallContext;
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_call;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterCall) {
	 		listener.enterCall(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitCall) {
	 		listener.exitCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitCall) {
			return visitor.visitCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacrocallContext extends ParserRuleContext {
	constructor(parser?: PluscalParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(PluscalParser.NAME, 0);
	}
	public EXPR_list(): TerminalNode[] {
	    	return this.getTokens(PluscalParser.EXPR);
	}
	public EXPR(i: number): TerminalNode {
		return this.getToken(PluscalParser.EXPR, i);
	}
    public get ruleIndex(): number {
    	return PluscalParser.RULE_macrocall;
	}
	public enterRule(listener: PluscalListener): void {
	    if(listener.enterMacrocall) {
	 		listener.enterMacrocall(this);
		}
	}
	public exitRule(listener: PluscalListener): void {
	    if(listener.exitMacrocall) {
	 		listener.exitMacrocall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PluscalVisitor<Result>): Result {
		if (visitor.visitMacrocall) {
			return visitor.visitMacrocall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
