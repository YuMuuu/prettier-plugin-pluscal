import { AstPath, Doc, ParserOptions, doc } from "prettier";
import { SyntaxNode } from "tree-sitter";
import { builders } from "prettier/doc";

const { join, line, ifBreak, group } = builders;

function insertLineBetweenElements(docs: Doc[]): Doc[] {
  const result: Doc[] = [];

  docs.forEach((item, index) => {
    result.push(item);
    if (index < docs.length - 1) {
      result.push(line);
    }
  });

  return result;
}

function separateLine(docs: Doc[]): Doc[] {
  const a: Doc[] = docs.reduce<Doc[]>((acc, value) => {
    return [...acc, value, line];
  }, []);
  return a;
}

const keyMap: Record<
  ExprLiteralUnion | "ERROR",
  (
    path: AstPath<SyntaxNode>,
    print: (
      selector?: string | number | Array<string | number> | AstPath<SyntaxNode>
    ) => builders.Doc
    // options: ParserOptions
  ) => builders.Doc
> = {
  //memo: keywardはnodeの値ではなく直接stringで記述したほうがパフォーマンス良さそう
  ERROR: (path, print) => {
    //note: rootnodeがERRORになっているので、ERRORの子nodeを探索するようにしている
    return group(insertLineBetweenElements(path.map(print, "children")));
  },
  single_line: (path) => path.node.text,
  string: (path, print) => path.node.text,
  boolean: (path, print) => path.node.text,
  _expr: (path, print) => group(path.map(print, "children")),
  _number: (path, print) => path.node.text,
  _number_set: (path, print) => group(path.map(print, "children")),
  _op: (path, print) => group(path.map(print, "children")),
  _primitive_value_set: (path, print) => group(path.map(print, "children")),
  _proof: (path, print) => {
    throw new Error("Function not implemented.");
  },
  _unit: (path, print) => group(path.map(print, "children")),
  address: (path, print) => group(path.map(print, "children")),
  all_map_to: (path, print) => group(path.map(print, "children")),
  always: (path, print) => {
    throw new Error("Function not implemented.");
  },
  approx: (path, print) => {
    throw new Error("Function not implemented.");
  },
  assign: (path, print) => {
    throw new Error("Function not implemented.");
  },
  assume_prove: (path, print) => {
    throw new Error("Function not implemented.");
  },
  assumption: (path, print) => {
    throw new Error("Function not implemented.");
  },
  asymp: (path, print) => {
    throw new Error("Function not implemented.");
  },
  bigcirc: (path, print) => group(path.map(print, "children")),
  binary_number: (path, print) => {
    throw new Error("Function not implemented.");
  },
  block_comment: (path, print) => {
    throw new Error("Function not implemented.");
  },
  block_comment_text: (path, print) => {
    throw new Error("Function not implemented.");
  },
  bnf_rule: (path, print) => {
    throw new Error("Function not implemented.");
  },
  bound_infix_op: (path, print) => {
    throw new Error("Function not implemented.");
  },
  bound_nonfix_op: (path, print) => {
    throw new Error("Function not implemented.");
  },
  bound_op: (path, print) => {
    throw new Error("Function not implemented.");
  },
  bound_postfix_op: (path, print) => {
    throw new Error("Function not implemented.");
  },
  bound_prefix_op: (path, print) => {
    throw new Error("Function not implemented.");
  },
  bounded_quantification: (path, print) => {
    throw new Error("Function not implemented.");
  },
  bullet: (path, print) => group(path.map(print, "children")),
  bullet_conj: (path, print) => group(path.map(print, "children")),
  bullet_disj: (path, print) => group(path.map(print, "children")),
  cap: (path, print) => group(path.map(print, "children")),
  case: (path, print) => {
    throw new Error("Function not implemented.");
  },
  case_arm: (path, print) => {
    throw new Error("Function not implemented.");
  },
  case_arrow: (path, print) => group(path.map(print, "children")),
  case_box: (path, print) => group(path.map(print, "children")),
  case_proof_step: (path, print) => {
    throw new Error("Function not implemented.");
  },
  cdot: (path, print) => {
    throw new Error("Function not implemented.");
  },
  child_id: (path, print) => {
    throw new Error("Function not implemented.");
  },
  choose: (path, print) => {
    throw new Error("Function not implemented.");
  },
  circ: (path, print) => group(path.map(print, "children")),
  colon: (path, print) => group(path.map(print, "children")),
  cong: (path, print) => {
    throw new Error("Function not implemented.");
  },
  conj_item: (path, print) => {
    throw new Error("Function not implemented.");
  },
  conj_list: (path, print) => {
    throw new Error("Function not implemented.");
  },
  constant_declaration: (path, print) => {
    throw new Error("Function not implemented.");
  },
  cup: (path, print) => group(path.map(print, "children")),
  def_eq: (path, print) => group(path.map(print, "children")),
  definition_proof_step: (path, print) => {
    throw new Error("Function not implemented.");
  },
  disj_item: (path, print) => {
    throw new Error("Function not implemented.");
  },
  disj_list: (path, print) => {
    throw new Error("Function not implemented.");
  },
  div: (path, print) => group(path.map(print, "children")),
  domain: (path, print) => {
    throw new Error("Function not implemented.");
  },
  doteq: (path, print) => {
    throw new Error("Function not implemented.");
  },
  dots_2: (path, print) => {
    throw new Error("Function not implemented.");
  },
  dots_3: (path, print) => group(path.map(print, "children")),
  double_line: (path, print) => {
    throw new Error("Function not implemented.");
  },
  enabled: (path, print) => {
    throw new Error("Function not implemented.");
  },
  eq: (path, print) => {
    throw new Error("Function not implemented.");
  },
  equiv: (path, print) => {
    throw new Error("Function not implemented.");
  },
  eventually: (path, print) => {
    throw new Error("Function not implemented.");
  },
  except: (path, print) => {
    throw new Error("Function not implemented.");
  },
  except_update: (path, print) => {
    throw new Error("Function not implemented.");
  },
  except_update_fn_appl: (path, print) => {
    throw new Error("Function not implemented.");
  },
  except_update_record_field: (path, print) => {
    throw new Error("Function not implemented.");
  },
  except_update_specifier: (path, print) => {
    throw new Error("Function not implemented.");
  },
  excl: (path, print) => {
    throw new Error("Function not implemented.");
  },
  exists: (path, print) => group(path.map(print, "children")),
  extends: (path, print) => {
    const extendsKeyword = path.call(print, "children", 0); // EXTENDS
    const extendsValues = path.map(print, "children", 1); // repeated extends value
    //memo: extendsValuesのネストの掘り方が足りないかも
    return group([extendsKeyword, line, ...separateLine(extendsValues)]);
  },
  fair: (path, print) => {
    throw new Error("Function not implemented.");
  },
  fairness: (path, print) => {
    throw new Error("Function not implemented.");
  },
  finite_set_literal: (path, print) => {
    throw new Error("Function not implemented.");
  },
  forall: (path, print) => group(path.map(print, "children")),
  function_definition: (path, print) => {
    throw new Error("Function not implemented.");
  },
  function_evaluation: (path, print) => {
    throw new Error("Function not implemented.");
  },
  function_literal: (path, print) => {
    throw new Error("Function not implemented.");
  },
  geq: (path, print) => {
    throw new Error("Function not implemented.");
  },
  gets: (path, print) => group(path.map(print, "children")),
  gg: (path, print) => {
    throw new Error("Function not implemented.");
  },
  have_proof_step: (path, print) => {
    throw new Error("Function not implemented.");
  },
  header_line: (path, print) => {
    throw new Error("Function not implemented.");
  },
  hex_number: (path, print) => {
    throw new Error("Function not implemented.");
  },
  if_then_else: (path, print) => {
    throw new Error("Function not implemented.");
  },
  iff: (path, print) => {
    throw new Error("Function not implemented.");
  },
  implies: (path, print) => {
    throw new Error("Function not implemented.");
  },
  in: (path, print) => {
    throw new Error("Function not implemented.");
  },
  infix_op_symbol: (path, print) => {
    throw new Error("Function not implemented.");
  },
  inner_assume_prove: (path, print) => {
    throw new Error("Function not implemented.");
  },
  instance: (path, print) => {
    throw new Error("Function not implemented.");
  },
  int_number_set: (path, print) => group(path.map(print, "children")),
  label: (path, print) => {
    throw new Error("Function not implemented.");
  },
  label_as: (path, print) => group(path.map(print, "children")),
  lambda: (path, print) => {
    throw new Error("Function not implemented.");
  },
  land: (path, print) => {
    throw new Error("Function not implemented.");
  },
  langle_bracket: (path, print) => group(path.map(print, "children")),
  ld_ttile: (path, print) => {
    throw new Error("Function not implemented.");
  },
  leads_to: (path, print) => {
    throw new Error("Function not implemented.");
  },
  leq: (path, print) => {
    throw new Error("Function not implemented.");
  },
  let_in: (path, print) => {
    throw new Error("Function not implemented.");
  },
  ll: (path, print) => {
    throw new Error("Function not implemented.");
  },
  lnot: (path, print) => {
    throw new Error("Function not implemented.");
  },
  local_definition: (path, print) => group(path.map(print, "children")),
  lor: (path, print) => {
    throw new Error("Function not implemented.");
  },
  ls_ttile: (path, print) => {
    throw new Error("Function not implemented.");
  },
  lt: (path, print) => {
    throw new Error("Function not implemented.");
  },
  maps_to: (path, print) => group(path.map(print, "children")),
  minus: (path, print) => {
    throw new Error("Function not implemented.");
  },
  module: (path, print) => {
    throw new Error("Function not implemented.");
  },
  module_definition: (path, print) => {
    throw new Error("Function not implemented.");
  },
  module_ref: (path, print) => {
    throw new Error("Function not implemented.");
  },
  nat_number: (path, print) => {
    throw new Error("Function not implemented.");
  },
  nat_number_set: (path, print) => group(path.map(print, "children")),
  negative: (path, print) => {
    throw new Error("Function not implemented.");
  },
  neq: (path, print) => {
    throw new Error("Function not implemented.");
  },
  new: (path, print) => {
    throw new Error("Function not implemented.");
  },
  non_terminal_proof: (path, print) => {
    throw new Error("Function not implemented.");
  },
  notin: (path, print) => {
    throw new Error("Function not implemented.");
  },
  octal_number: (path, print) => {
    throw new Error("Function not implemented.");
  },
  odot: (path, print) => group(path.map(print, "children")),
  ominus: (path, print) => group(path.map(print, "children")),
  operator_args: (path, print) => {
    throw new Error("Function not implemented.");
  },
  operator_declaration: (path, print) => {
    throw new Error("Function not implemented.");
  },
  operator_definition: (path, print) => {
    throw new Error("Function not implemented.");
  },
  oplus: (path, print) => group(path.map(print, "children")),
  oslash: (path, print) => group(path.map(print, "children")),
  other_arm: (path, print) => {
    throw new Error("Function not implemented.");
  },
  otimes: (path, print) => group(path.map(print, "children")),
  parentheses: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_algorithm: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_algorithm_body: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_algorithm_start: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_assert: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_assign: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_await: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_definitions: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_either: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_goto: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_if: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_lhs: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_macro: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_macro_call: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_macro_decl: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_print: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_proc_call: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_proc_decl: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_proc_var_decl: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_proc_var_decls: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_procedure: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_process: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_return: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_skip: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_var_decl: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_var_decls: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_while: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_with: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pick_proof_step: (path, print) => {
    throw new Error("Function not implemented.");
  },
  plus: (path, print) => group(path.map(print, "children")),
  plus_arrow: (path, print) => {
    throw new Error("Function not implemented.");
  },
  postfix_op_symbol: (path, print) => {
    throw new Error("Function not implemented.");
  },
  powerset: (path, print) => {
    throw new Error("Function not implemented.");
  },
  prec: (path, print) => group(path.map(print, "children")),
  preceq: (path, print) => group(path.map(print, "children")),
  prefix_op_symbol: (path, print) => {
    throw new Error("Function not implemented.");
  },
  prefixed_op: (path, print) => {
    throw new Error("Function not implemented.");
  },
  prev_func_val: (path, print) => {
    throw new Error("Function not implemented.");
  },
  proof_step: (path, print) => {
    throw new Error("Function not implemented.");
  },
  proof_step_id: (path, print) => {
    throw new Error("Function not implemented.");
  },
  proof_step_ref: (path, print) => {
    throw new Error("Function not implemented.");
  },
  propto: (path, print) => {
    throw new Error("Function not implemented.");
  },
  qed_step: (path, print) => {
    throw new Error("Function not implemented.");
  },
  qq: (path, print) => {
    throw new Error("Function not implemented.");
  },
  quantifier_bound: (path, print) => {
    throw new Error("Function not implemented.");
  },
  rangle_bracket: (path, print) => group(path.map(print, "children")),
  rangle_bracket_sub: (path, print) => group(path.map(print, "children")),
  rd_ttile: (path, print) => {
    throw new Error("Function not implemented.");
  },
  real_number_set: (path, print) => group(path.map(print, "children")),
  record_literal: (path, print) => {
    throw new Error("Function not implemented.");
  },
  record_value: (path, print) => {
    throw new Error("Function not implemented.");
  },
  recursive_declaration: (path, print) => {
    throw new Error("Function not implemented.");
  },
  rs_ttile: (path, print) => {
    throw new Error("Function not implemented.");
  },
  set_filter: (path, print) => {
    throw new Error("Function not implemented.");
  },
  set_in: (path, print) => group(path.map(print, "children")),
  set_map: (path, print) => {
    throw new Error("Function not implemented.");
  },
  set_of_functions: (path, print) => {
    throw new Error("Function not implemented.");
  },
  set_of_records: (path, print) => {
    throw new Error("Function not implemented.");
  },
  sim: (path, print) => group(path.map(print, "children")),
  simeq: (path, print) => group(path.map(print, "children")),
  source_file: (path, print) => group(path.map(print, "children")),
  sqcap: (path, print) => {
    throw new Error("Function not implemented.");
  },
  sqcup: (path, print) => {
    throw new Error("Function not implemented.");
  },
  sqsubset: (path, print) => group(path.map(print, "children")),
  sqsubseteq: (path, print) => group(path.map(print, "children")),
  sqsupset: (path, print) => group(path.map(print, "children")),
  sqsupseteq: (path, print) => group(path.map(print, "children")),
  star: (path, print) => {
    throw new Error("Function not implemented.");
  },
  statement_level: (path, print) => {
    throw new Error("Function not implemented.");
  },
  step_expr_no_stutter: (path, print) => {
    throw new Error("Function not implemented.");
  },
  step_expr_or_stutter: (path, print) => {
    throw new Error("Function not implemented.");
  },
  subexpr_component: (path, print) => {
    throw new Error("Function not implemented.");
  },
  subexpr_prefix: (path, print) => {
    throw new Error("Function not implemented.");
  },
  subexpr_tree_nav: (path, print) => {
    throw new Error("Function not implemented.");
  },
  subexpression: (path, print) => {
    throw new Error("Function not implemented.");
  },
  subset: (path, print) => group(path.map(print, "children")),
  subseteq: (path, print) => group(path.map(print, "children")),
  substitution: (path, print) => {
    throw new Error("Function not implemented.");
  },
  succ: (path, print) => group(path.map(print, "children")),
  succeq: (path, print) => group(path.map(print, "children")),
  suffices_proof_step: (path, print) => {
    throw new Error("Function not implemented.");
  },
  sup_plus: (path, print) => {
    throw new Error("Function not implemented.");
  },
  supset: (path, print) => group(path.map(print, "children")),
  supseteq: (path, print) => group(path.map(print, "children")),
  take_proof_step: (path, print) => {
    throw new Error("Function not implemented.");
  },
  temporal_exists: (path, print) => group(path.map(print, "children")),
  temporal_forall: (path, print) => group(path.map(print, "children")),
  terminal_proof: (path, print) => {
    throw new Error("Function not implemented.");
  },
  theorem: (path, print) => {
    throw new Error("Function not implemented.");
  },
  times: (path, print) => {
    throw new Error("Function not implemented.");
  },
  tuple_literal: (path, print) => {
    throw new Error("Function not implemented.");
  },
  tuple_of_identifiers: (path, print) => {
    throw new Error("Function not implemented.");
  },
  unbounded_quantification: (path, print) => {
    throw new Error("Function not implemented.");
  },
  unchanged: (path, print) => {
    throw new Error("Function not implemented.");
  },
  union: (path, print) => {
    throw new Error("Function not implemented.");
  },
  uplus: (path, print) => {
    throw new Error("Function not implemented.");
  },
  use_body: (path, print) => {
    throw new Error("Function not implemented.");
  },
  use_body_def: (path, print) => {
    throw new Error("Function not implemented.");
  },
  use_body_expr: (path, print) => {
    throw new Error("Function not implemented.");
  },
  use_or_hide: (path, print) => {
    throw new Error("Function not implemented.");
  },
  variable_declaration: (path, print) => {
    const variableOrVariablesKeyword = path.node.child(0).children;
    const value = path.node.child(1).children;
    //wip indentとかlineとか重要な箇所

    throw new Error("Function not implemented.");
  },
  vertvert: (path, print) => group(path.map(print, "children")),
  witness_proof_step: (path, print) => {
    throw new Error("Function not implemented.");
  },
  wr: (path, print) => {
    throw new Error("Function not implemented.");
  },
  "!": (path, print) => path.node.text,
  "!!": (path, print) => path.node.text,
  '"': (path, print) => path.node.text,
  "#": (path, print) => path.node.text,
  "(": (path, print) => path.node.text,
  "(*": (path, print) => path.node.text,
  "(+)": (path, print) => path.node.text,
  "(-)": (path, print) => path.node.text,
  "(.)": (path, print) => path.node.text,
  "(/)": (path, print) => path.node.text,
  "(\\X)": (path, print) => path.node.text,
  ")": (path, print) => path.node.text,
  "*)": (path, print) => path.node.text,
  "+": (path, print) => path.node.text,
  ",": (path, print) => path.node.text,
  "-": (path, print) => path.node.text,
  "-+->": (path, print) => path.node.text,
  "----": (path, print) => path.node.text, //maybe unuse
  "--algorithm": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "--fair": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "->": (path, print) => path.node.text,
  "-|": (path, print) => path.node.text,
  ".": (path, print) => path.node.text,
  "..": (path, print) => path.node.text,
  "...": (path, print) => path.node.text,
  "/=": (path, print) => path.node.text,
  "/\\": (path, print) => path.node.text,
  ":": (path, print) => path.node.text,
  "::": (path, print) => path.node.text,
  "::=": (path, print) => path.node.text,
  ":=": (path, print) => path.node.text,
  ";": (path, print) => path.node.text,
  "<": (path, print) => path.node.text,
  "<-": (path, print) => path.node.text,
  "<<": (path, print) => path.node.text,
  "<=": (path, print) => path.node.text,
  "<=>": (path, print) => path.node.text,
  "<>": (path, print) => path.node.text,
  "=": (path, print) => path.node.text,
  "=<": (path, print) => path.node.text,
  "==": (path, print) => path.node.text,
  "====": (path, print) => path.node.text, //maybe unuse
  "=>": (path, print) => path.node.text,
  "=|": (path, print) => path.node.text,
  ">": (path, print) => path.node.text,
  ">=": (path, print) => path.node.text,
  ">>": (path, print) => path.node.text,
  ">>_": (path, print) => path.node.text,
  "??": (path, print) => path.node.text,
  "@": (path, print) => path.node.text,
  ACTION: (path, print) => {
    throw new Error("Function not implemented.");
  },
  ASSUME: (path, print) => {
    throw new Error("Function not implemented.");
  },
  ASSUMPTION: (path, print) => {
    throw new Error("Function not implemented.");
  },
  AXIOM: (path, print) => {
    throw new Error("Function not implemented.");
  },
  BY: (path, print) => {
    throw new Error("Function not implemented.");
  },
  CASE: (path, print) => {
    throw new Error("Function not implemented.");
  },
  CHOOSE: (path, print) => {
    throw new Error("Function not implemented.");
  },
  CONSTANT: (path, print) => {
    throw new Error("Function not implemented.");
  },
  CONSTANTS: (path, print) => {
    throw new Error("Function not implemented.");
  },
  COROLLARY: (path, print) => {
    throw new Error("Function not implemented.");
  },
  DEF: (path, print) => {
    throw new Error("Function not implemented.");
  },
  DEFINE: (path, print) => {
    throw new Error("Function not implemented.");
  },
  DEFS: (path, print) => {
    throw new Error("Function not implemented.");
  },
  DOMAIN: (path, print) => {
    throw new Error("Function not implemented.");
  },
  ELSE: (path, print) => {
    throw new Error("Function not implemented.");
  },
  ENABLED: (path, print) => {
    throw new Error("Function not implemented.");
  },
  EXCEPT: (path, print) => {
    throw new Error("Function not implemented.");
  },
  EXTENDS: (path, print) => {
    throw new Error("Function not implemented.");
  },
  FALSE: (path, print) => {
    throw new Error("Function not implemented.");
  },
  HAVE: (path, print) => {
    throw new Error("Function not implemented.");
  },
  HIDE: (path, print) => {
    throw new Error("Function not implemented.");
  },
  IF: (path, print) => {
    throw new Error("Function not implemented.");
  },
  IN: (path, print) => {
    throw new Error("Function not implemented.");
  },
  INSTANCE: (path, print) => {
    throw new Error("Function not implemented.");
  },
  Int: (path, print) => {
    throw new Error("Function not implemented.");
  },
  LAMBDA: (path, print) => {
    throw new Error("Function not implemented.");
  },
  LEMMA: (path, print) => {
    throw new Error("Function not implemented.");
  },
  LET: (path, print) => {
    throw new Error("Function not implemented.");
  },
  LOCAL: (path, print) => {
    throw new Error("Function not implemented.");
  },
  MODULE: (path, print) => {
    throw new Error("Function not implemented.");
  },
  NEW: (path, print) => {
    throw new Error("Function not implemented.");
  },
  Nat: (path, print) => {
    throw new Error("Function not implemented.");
  },
  OBVIOUS: (path, print) => {
    throw new Error("Function not implemented.");
  },
  OMITTED: (path, print) => {
    throw new Error("Function not implemented.");
  },
  ONLY: (path, print) => {
    throw new Error("Function not implemented.");
  },
  OTHER: (path, print) => {
    throw new Error("Function not implemented.");
  },
  PICK: (path, print) => {
    throw new Error("Function not implemented.");
  },
  PROOF: (path, print) => {
    throw new Error("Function not implemented.");
  },
  PROPOSITION: (path, print) => {
    throw new Error("Function not implemented.");
  },
  PROVE: (path, print) => {
    throw new Error("Function not implemented.");
  },
  QED: (path, print) => {
    throw new Error("Function not implemented.");
  },
  RECURSIVE: (path, print) => {
    throw new Error("Function not implemented.");
  },
  Real: (path, print) => {
    throw new Error("Function not implemented.");
  },
  SF_: (path, print) => {
    throw new Error("Function not implemented.");
  },
  STATE: (path, print) => {
    throw new Error("Function not implemented.");
  },
  SUBSET: (path, print) => {
    throw new Error("Function not implemented.");
  },
  SUFFICES: (path, print) => {
    throw new Error("Function not implemented.");
  },
  TAKE: (path, print) => {
    throw new Error("Function not implemented.");
  },
  TEMPORAL: (path, print) => {
    throw new Error("Function not implemented.");
  },
  THEN: (path, print) => {
    throw new Error("Function not implemented.");
  },
  THEOREM: (path, print) => {
    throw new Error("Function not implemented.");
  },
  TRUE: (path, print) => {
    throw new Error("Function not implemented.");
  },
  UNCHANGED: (path, print) => {
    throw new Error("Function not implemented.");
  },
  UNION: (path, print) => {
    throw new Error("Function not implemented.");
  },
  USE: (path, print) => {
    throw new Error("Function not implemented.");
  },
  VARIABLE: (path, print) => {
    throw new Error("Function not implemented.");
  },
  VARIABLES: (path, print) => {
    throw new Error("Function not implemented.");
  },
  WF_: (path, print) => {
    throw new Error("Function not implemented.");
  },
  WITH: (path, print) => {
    throw new Error("Function not implemented.");
  },
  WITNESS: (path, print) => {
    throw new Error("Function not implemented.");
  },
  "[": (path, print) => path.node.text,
  "[]": (path, print) => path.node.text,
  "\\/": (path, print) => path.node.text,
  "\\A": (path, print) => path.node.text,
  "\\AA": (path, print) => path.node.text,
  "\\E": (path, print) => path.node.text,
  "\\EE": (path, print) => path.node.text,
  "\\X": (path, print) => path.node.text,
  "\\approx": (path, print) => path.node.text,
  "\\asymp": (path, print) => path.node.text,
  "\\bigcirc": (path, print) => path.node.text,
  "\\bullet": (path, print) => path.node.text,
  "\\cap": (path, print) => path.node.text,
  "\\cdot": (path, print) => path.node.text,
  "\\circ": (path, print) => path.node.text,
  "\\cong": (path, print) => path.node.text,
  "\\cup": (path, print) => path.node.text,
  "\\div": (path, print) => path.node.text,
  "\\doteq": (path, print) => path.node.text,
  "\\equiv": (path, print) => path.node.text,
  "\\exists": (path, print) => path.node.text,
  "\\forall": (path, print) => path.node.text,
  "\\geq": (path, print) => path.node.text,
  "\\gg": (path, print) => path.node.text,
  "\\in": (path, print) => path.node.text,
  "\\intersect": (path, print) => path.node.text,
  "\\land": (path, print) => path.node.text,
  "\\leq": (path, print) => path.node.text,
  "\\ll": (path, print) => path.node.text,
  "\\lnot": (path, print) => path.node.text,
  "\\lor": (path, print) => path.node.text,
  "\\neg": (path, print) => path.node.text,
  "\\notin": (path, print) => path.node.text,
  "\\o": (path, print) => path.node.text,
  "\\odot": (path, print) => path.node.text,
  "\\ominus": (path, print) => path.node.text,
  "\\oplus": (path, print) => path.node.text,
  "\\oslash": (path, print) => path.node.text,
  "\\otimes": (path, print) => path.node.text,
  "\\prec": (path, print) => path.node.text,
  "\\preceq": (path, print) => path.node.text,
  "\\propto": (path, print) => path.node.text,
  "\\sim": (path, print) => path.node.text,
  "\\simeq": (path, print) => path.node.text,
  "\\sqcap": (path, print) => path.node.text,
  "\\sqcup": (path, print) => path.node.text,
  "\\sqsubset": (path, print) => path.node.text,
  "\\sqsubseteq": (path, print) => path.node.text,
  "\\sqsupset": (path, print) => path.node.text,
  "\\sqsupseteq": (path, print) => path.node.text,
  "\\star": (path, print) => path.node.text,
  "\\subset": (path, print) => path.node.text,
  "\\subseteq": (path, print) => path.node.text,
  "\\succ": (path, print) => path.node.text,
  "\\succeq": (path, print) => path.node.text,
  "\\supset": (path, print) => path.node.text,
  "\\supseteq": (path, print) => path.node.text,
  "\\times": (path, print) => path.node.text,
  "\\union": (path, print) => path.node.text,
  "\\uplus": (path, print) => path.node.text,
  "\\wr": (path, print) => path.node.text,
  "]": (path, print) => path.node.text,
  "]_": (path, print) => path.node.text,
  "^+": (path, print) => {
    throw new Error("Function not implemented.");
  },
  algorithm: (path, print) => {
    throw new Error("Function not implemented.");
  },
  amp: (path, print) => group(path.map(print, "children")),
  ampamp: (path, print) => group(path.map(print, "children")),
  assert: (path, print) => {
    throw new Error("Function not implemented.");
  },
  asterisk: (path, print) => {
    throw new Error("Function not implemented.");
  },
  await: (path, print) => {
    throw new Error("Function not implemented.");
  },
  begin: (path, print) => {
    throw new Error("Function not implemented.");
  },
  boolean_set: (path, print) => group(path.map(print, "children")),
  call: (path, print) => {
    throw new Error("Function not implemented.");
  },
  comment: (path, print) => {
    throw new Error("Function not implemented.");
  },
  compose: (path, print) => group(path.map(print, "children")),
  define: (path, print) => {
    throw new Error("Function not implemented.");
  },
  do: (path, print) => {
    throw new Error("Function not implemented.");
  },
  dol: (path, print) => {
    throw new Error("Function not implemented.");
  },
  doldol: (path, print) => {
    throw new Error("Function not implemented.");
  },
  either: (path, print) => {
    throw new Error("Function not implemented.");
  },
  else: (path, print) => {
    throw new Error("Function not implemented.");
  },
  elsif: (path, print) => {
    throw new Error("Function not implemented.");
  },
  end: (path, print) => {
    throw new Error("Function not implemented.");
  },
  escape_char: (path, print) => {
    throw new Error("Function not implemented.");
  },
  extramodular_text: (path, print) => {
    throw new Error("Function not implemented.");
  },
  format: (path, print) => {
    throw new Error("Function not implemented.");
  },
  goto: (path, print) => {
    throw new Error("Function not implemented.");
  },
  gt: (path, print) => {
    throw new Error("Function not implemented.");
  },
  hashhash: (path, print) => {
    throw new Error("Function not implemented.");
  },
  identifier: (path, print) => group(path.map(print, "children")),
  identifier_ref: (path, print) => {
    throw new Error("Function not implemented.");
  },
  if: (path, print) => {
    throw new Error("Function not implemented.");
  },
  level: (path, print) => {
    throw new Error("Function not implemented.");
  },
  macro: (path, print) => {
    throw new Error("Function not implemented.");
  },
  map_from: (path, print) => group(path.map(print, "children")),
  map_to: (path, print) => group(path.map(print, "children")),
  minusminus: (path, print) => group(path.map(print, "children")),
  mod: (path, print) => group(path.map(print, "children")),
  modmod: (path, print) => group(path.map(print, "children")),
  mul: (path, print) => group(path.map(print, "children")),
  mulmul: (path, print) => group(path.map(print, "children")),
  name: (path, print) => {
    throw new Error("Function not implemented.");
  },
  or: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_end_either: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_end_if: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_end_while: (path, print) => {
    throw new Error("Function not implemented.");
  },
  pcal_end_with: (path, print) => {
    throw new Error("Function not implemented.");
  },
  placeholder: (path, print) => group(path.map(print, "children")),
  plusplus: (path, print) => group(path.map(print, "children")),
  pow: (path, print) => {
    throw new Error("Function not implemented.");
  },
  powpow: (path, print) => {
    throw new Error("Function not implemented.");
  },
  prime: (path, print) => {
    throw new Error("Function not implemented.");
  },
  print: (path, print) => {
    throw new Error("Function not implemented.");
  },
  procedure: (path, print) => {
    throw new Error("Function not implemented.");
  },
  process: (path, print) => {
    throw new Error("Function not implemented.");
  },
  real_number: (path, print) => {
    throw new Error("Function not implemented.");
  },
  return: (path, print) => {
    throw new Error("Function not implemented.");
  },
  setminus: (path, print) => group(path.map(print, "children")),
  skip: (path, print) => {
    throw new Error("Function not implemented.");
  },
  slash: (path, print) => group(path.map(print, "children")),
  slashslash: (path, print) => group(path.map(print, "children")),
  string_set: (path, print) => {
    throw new Error("Function not implemented.");
  },
  sup_hash: (path, print) => {
    throw new Error("Function not implemented.");
  },
  then: (path, print) => {
    throw new Error("Function not implemented.");
  },
  value: (path, print) => {
    throw new Error("Function not implemented.");
  },
  variable: (path, print) => {
    throw new Error("Function not implemented.");
  },
  variables: (path, print) => {
    throw new Error("Function not implemented.");
  },
  vert: (path, print) => group(path.map(print, "children")),
  when: (path, print) => {
    throw new Error("Function not implemented.");
  },
  while: (path, print) => {
    throw new Error("Function not implemented.");
  },
  with: (path, print) => {
    throw new Error("Function not implemented.");
  },
  "{": (path, print) => path.node.text,
  "|-": (path, print) => path.node.text,
  "|->": (path, print) => path.node.text,
  "|=": (path, print) => path.node.text,
  "||": (path, print) => path.node.text,
  "}": (path, print) => path.node.text,
  "~": (path, print) => path.node.text,
  "~>": (path, print) => path.node.text,
  "¬": (path, print) => path.node.text,
  "×": (path, print) => path.node.text,
  "÷": (path, print) => path.node.text,
  "‖": (path, print) => path.node.text,
  "‥": (path, print) => path.node.text,
  "…": (path, print) => path.node.text,
  "‼": (path, print) => path.node.text,
  "⁇": (path, print) => path.node.text,
  "⁺": (path, print) => path.node.text,
  ℕ: (path, print) => path.node.text,
  ℝ: (path, print) => path.node.text,
  ℤ: (path, print) => path.node.text,
  "←": (path, print) => path.node.text,
  "→": (path, print) => path.node.text,
  "↝": (path, print) => path.node.text,
  "↦": (path, print) => path.node.text,
  "⇒": (path, print) => path.node.text,
  "⇔": (path, print) => path.node.text,
  "⇝": (path, print) => path.node.text,
  "⇸": (path, print) => path.node.text,
  "∀": (path, print) => path.node.text,
  "∃": (path, print) => path.node.text,
  "∈": (path, print) => path.node.text,
  "∉": (path, print) => path.node.text,
  "∘": (path, print) => path.node.text,
  "∝": (path, print) => path.node.text,
  "∧": (path, print) => path.node.text,
  "∨": (path, print) => path.node.text,
  "∩": (path, print) => path.node.text,
  "∪": (path, print) => path.node.text,
  "∷": (path, print) => path.node.text,
  "∼": (path, print) => path.node.text,
  "≀": (path, print) => path.node.text,
  "≃": (path, print) => path.node.text,
  "≅": (path, print) => path.node.text,
  "≈": (path, print) => path.node.text,
  "≍": (path, print) => path.node.text,
  "≐": (path, print) => path.node.text,
  "≔": (path, print) => path.node.text,
  "≜": (path, print) => path.node.text,
  "≠": (path, print) => path.node.text,
  "≡": (path, print) => path.node.text,
  "≤": (path, print) => path.node.text,
  "≥": (path, print) => path.node.text,
  "≪": (path, print) => path.node.text,
  "≫": (path, print) => path.node.text,
  "≺": (path, print) => path.node.text,
  "≻": (path, print) => path.node.text,
  "⊂": (path, print) => path.node.text,
  "⊃": (path, print) => path.node.text,
  "⊆": (path, print) => path.node.text,
  "⊇": (path, print) => path.node.text,
  "⊎": (path, print) => path.node.text,
  "⊏": (path, print) => path.node.text,
  "⊐": (path, print) => path.node.text,
  "⊑": (path, print) => path.node.text,
  "⊒": (path, print) => path.node.text,
  "⊓": (path, print) => path.node.text,
  "⊔": (path, print) => path.node.text,
  "⊕": (path, print) => path.node.text,
  "⊖": (path, print) => path.node.text,
  "⊗": (path, print) => path.node.text,
  "⊘": (path, print) => path.node.text,
  "⊙": (path, print) => path.node.text,
  "⊢": (path, print) => path.node.text,
  "⊣": (path, print) => path.node.text,
  "⊨": (path, print) => path.node.text,
  "⋄": (path, print) => path.node.text,
  "⋅": (path, print) => path.node.text,
  "⋆": (path, print) => path.node.text,
  "□": (path, print) => path.node.text,
  "◇": (path, print) => path.node.text,
  "●": (path, print) => path.node.text,
  "◯": (path, print) => path.node.text,
  "⟨": (path, print) => path.node.text,
  "⟩": (path, print) => path.node.text,
  "⟩_": (path, print) => path.node.text,
  "⟵": (path, print) => path.node.text,
  "⟶": (path, print) => path.node.text,
  "⟹": (path, print) => path.node.text,
  "⟺": (path, print) => path.node.text,
  "⟼": (path, print) => path.node.text,
  "⥅": (path, print) => path.node.text,
  "⩴": (path, print) => path.node.text,
  "⪯": (path, print) => path.node.text,
  "⪰": (path, print) => path.node.text,
  "⫤": (path, print) => path.node.text,
  "〈": (path, print) => path.node.text,
  "〉": (path, print) => path.node.text,
  "〉_": (path, print) => path.node.text,
} as const;

export { keyMap };
