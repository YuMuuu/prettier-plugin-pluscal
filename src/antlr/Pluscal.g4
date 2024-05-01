grammar Pluscal;

// Reference: https://lamport.azurewebsites.net/tla/p-manual.pdf#page=60

/**
 * parser
 */
algorithm: ('--algorithm' | '--fair algorithm') NAME vardecls? definitions? macro* procedure* (
		algorithmbody
		| process+
	) 'end algorithm';

definitions: 'define' DEFS 'end define' ';'?;

macro:
	'Macro' NAME (VARIABLE (',' VARIABLE)*)? algorithmbody 'end Macro' ';'?;

procedure:
	'procedure' NAME (pvardecl (',' pvardecl)*)? pvardecls? 'end procedure' ';'?;

process: ('fair' '+'?)? 'process' NAME ('=' | '\\in') EXPR vardecls? algorithmbody 'end process' ';'
		?;

vardecls: ('VARIABLE' | 'variables') vardecl+;

vardecl: VARIABLE (('=' | '\\in') EXPR)? (';' | ',');

// ドキュメントに書かれている構文規則
pvardecls: ('VARIABLE' | 'variables') (pvardecl | (';' | ','))+;
// 俺が思う本来の構文規則 PVarDecls2: ( 'VARIABLE' PVarDecl | 'variables' PVarDecl (',' PVarDecl)+ ) ';';

pvardecl: VARIABLE ('=' EXPR)?;

algorithmbody: 'begin' stmt+;

stmt: (LABEL ':' ('+' | '-')?)? unlabeledstmt;

unlabeledstmt:
	assign
	| if
	| while
	| either
	| with
	| await
	| print
	| assert
	| skip
	| return
	| goto
	| call
	| macrocall;

assign: lhs ':=' EXPR ('||' lhs ':=' EXPR)* ';';

lhs: VARIABLE ('[' EXPR (',' EXPR)* ']' | '.' FIELD)*;

if:
	'if' EXPR 'then' stmt+ ('elsif' EXPR 'then' stmt+)* (
		'else' stmt+
	)? 'end if' ';';

while: 'while' EXPR 'do' stmt+ 'end while' ';';

either: 'eithr' EXPR 'do' stmt+ 'end while' ';';

with:
	'with' (VARIABLE ('=' | '\\in') EXPR (';' | ','))+ 'do' stmt+ 'end with ;';

await: ('await' | 'when') EXPR ';';

print: 'print' EXPR ';';

assert: 'assert' EXPR ';';

skip: 'skip' ';';

return: 'return' ';';

goto: 'goto' LABEL ';';

call: 'call' macrocall;

macrocall: NAME (EXPR (',' EXPR)*)? ';';

VARIABLE: [a-zA-Z_] [a-zA-Z_0-9]*;

FIELD: [a-zA-Z_] [a-zA-Z_0-9]*;

NAME: [a-zA-Z_] [a-zA-Z_0-9]*;

LABEL: [a-zA-Z_] [a-zA-Z_0-9]*;

EXPR: [a-zA-Z_] [a-zA-Z_0-9]*;

DEFS: [a-zA-Z_] [a-zA-Z_0-9]*;