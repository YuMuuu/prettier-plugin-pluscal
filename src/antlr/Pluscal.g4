grammar Pluscal;

// Reference: https://lamport.azurewebsites.net/tla/p-manual.pdf#page=60

/**
 * parser
 */
algorithm: ('--algorithm' | '--fair algorithm') Name VarDecls? Definitions? Macro* Procedure* (
		AlgorithmBody
		| Process+
	) 'end algorithm';

Definitions: 'define' Defs 'end define' ';'?;

Macro:
	'macro' Name (Variable (',' Variable)*)? AlgorithmBody 'end Macro' ';'?;

Procedure:
	'procedure' Name (PVarDecl (',' PVarDecl)*)? PVarDecls? 'end procedure' ';'?;

Process: ('fair' '+'?)? 'process' Name ('=' | '\\in') Expr VarDecls? AlgorithmBody 'end process' ';'
		?;

VarDecls: ('variable' | 'variables') VarDecl+;

VarDecl: Variable (('=' | '\\in') Expr)? (';' | ',');

// ドキュメントに書かれている構文規則
PVarDecls: ('variable' | 'variables') (PVarDecl | (';' | ','))+;
// 俺が思う本来の構文規則
// PVarDecls2: (
// 		'variable' PVarDecl
// 		| 'variables' PVarDecl (',' PVarDecl)+
// 	) ';';

PVarDecl: Variable ('=' Expr)?;

AlgorithmBody: 'begin' Stmt+;

Stmt: (Label ':' ('+' | '-')?)? UnlabeledStmt;

UnlabeledStmt:
	Assign
	| If
	| While
	| Either
	| With
	| Await
	| Print
	| Assert
	| Skip
	| Return
	| Goto
	| Call
	| MacroCall;

Assign: LHS ':=' Expr ('||' LHS ':=' Expr)* ';';

LHS: Variable ('[' Expr (',' Expr)* ']' | '.' Field)*;

If:
	'if' Expr 'then' Stmt+ ('elsif' Expr 'then' Stmt+)* (
		'else' Stmt+
	)? 'end if' ';';

While: 'while' Expr 'do' Stmt+ 'end while' ';';

Either: 'eithr' Expr 'do' Stmt+ 'end while' ';';

With:
	'with' (Variable ('=' | '\\in') Expr (';' | ','))+ 'do' Stmt+ 'end with ;';

Await: ('await' | 'when') Expr ';';

Print: 'print' Expr ';';

Assert: 'assert' Expr ';';

Skip: 'skip' ';';

Return: 'return' ';';

Goto: 'goto' Label ';';

Call: 'call' MacroCall;

MacroCall: Name (Expr (',' Expr)*)? ';';

/**
 * lexer
 */

Variable: [a-zA-Z_] [a-zA-Z_0-9]*;

Field: [a-zA-Z_] [a-zA-Z_0-9]*;

Name: [a-zA-Z_] [a-zA-Z_0-9]*;

Label: [a-zA-Z_] [a-zA-Z_0-9]*;

Expr: [a-zA-Z_] [a-zA-Z_0-9]*;

Defs: [a-zA-Z_] [a-zA-Z_0-9]*;
