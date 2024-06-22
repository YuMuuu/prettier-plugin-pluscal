import { AstPath, Doc, ParserOptions } from "prettier";
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
  ERROR: (path, print) =>{
    //note: rootnodeがERRORになっているので、ERRORの子nodeを探索するようにしている
    return group(insertLineBetweenElements(path.map(print, "children")))
  } ,
  single_line: (path) => path.node.text,
  string: (path, print) => {
    throw new Error("Function not implemented.");
  },
  boolean: (path, print) => {
    throw new Error("Function not implemented.");
  },
  _expr: (path, print) => {
    throw new Error("Function not implemented.");
  },
  _number: (path, print) => {
    throw new Error("Function not implemented.");
  },
  _number_set: (path, print) => {
    throw new Error("Function not implemented.");
  },
  _op: (path, print) => {
    throw new Error("Function not implemented.");
  },
  _primitive_value_set: (path, print) => {
    throw new Error("Function not implemented.");
  },
  _proof: (path, print) => {
    throw new Error("Function not implemented.");
  },
  _unit: (path, print) => {
    throw new Error("Function not implemented.");
  },
  address: (path, print) => {
    throw new Error("Function not implemented.");
  },
  all_map_to: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  bigcirc: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  bullet: (path, print) => {
    throw new Error("Function not implemented.");
  },
  bullet_conj: (path, print) => {
    throw new Error("Function not implemented.");
  },
  bullet_disj: (path, print) => {
    throw new Error("Function not implemented.");
  },
  cap: (path, print) => {
    throw new Error("Function not implemented.");
  },
  case: (path, print) => {
    throw new Error("Function not implemented.");
  },
  case_arm: (path, print) => {
    throw new Error("Function not implemented.");
  },
  case_arrow: (path, print) => {
    throw new Error("Function not implemented.");
  },
  case_box: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  circ: (path, print) => {
    throw new Error("Function not implemented.");
  },
  colon: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  cup: (path, print) => {
    throw new Error("Function not implemented.");
  },
  def_eq: (path, print) => {
    throw new Error("Function not implemented.");
  },
  definition_proof_step: (path, print) => {
    throw new Error("Function not implemented.");
  },
  disj_item: (path, print) => {
    throw new Error("Function not implemented.");
  },
  disj_list: (path, print) => {
    throw new Error("Function not implemented.");
  },
  div: (path, print) => {
    throw new Error("Function not implemented.");
  },
  domain: (path, print) => {
    throw new Error("Function not implemented.");
  },
  doteq: (path, print) => {
    throw new Error("Function not implemented.");
  },
  dots_2: (path, print) => {
    throw new Error("Function not implemented.");
  },
  dots_3: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  exists: (path, print) => {
    throw new Error("Function not implemented.");
  },
  extends: (path, print) => {
    throw new Error("Function not implemented.");
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
  forall: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  gets: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  int_number_set: (path, print) => {
    throw new Error("Function not implemented.");
  },
  label: (path, print) => {
    throw new Error("Function not implemented.");
  },
  label_as: (path, print) => {
    throw new Error("Function not implemented.");
  },
  lambda: (path, print) => {
    throw new Error("Function not implemented.");
  },
  land: (path, print) => {
    throw new Error("Function not implemented.");
  },
  langle_bracket: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  local_definition: (path, print) => {
    throw new Error("Function not implemented.");
  },
  lor: (path, print) => {
    throw new Error("Function not implemented.");
  },
  ls_ttile: (path, print) => {
    throw new Error("Function not implemented.");
  },
  lt: (path, print) => {
    throw new Error("Function not implemented.");
  },
  maps_to: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  nat_number_set: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  odot: (path, print) => {
    throw new Error("Function not implemented.");
  },
  ominus: (path, print) => {
    throw new Error("Function not implemented.");
  },
  operator_args: (path, print) => {
    throw new Error("Function not implemented.");
  },
  operator_declaration: (path, print) => {
    throw new Error("Function not implemented.");
  },
  operator_definition: (path, print) => {
    throw new Error("Function not implemented.");
  },
  oplus: (path, print) => {
    throw new Error("Function not implemented.");
  },
  oslash: (path, print) => {
    throw new Error("Function not implemented.");
  },
  other_arm: (path, print) => {
    throw new Error("Function not implemented.");
  },
  otimes: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  plus: (path, print) => {
    throw new Error("Function not implemented.");
  },
  plus_arrow: (path, print) => {
    throw new Error("Function not implemented.");
  },
  postfix_op_symbol: (path, print) => {
    throw new Error("Function not implemented.");
  },
  powerset: (path, print) => {
    throw new Error("Function not implemented.");
  },
  prec: (path, print) => {
    throw new Error("Function not implemented.");
  },
  preceq: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  rangle_bracket: (path, print) => {
    throw new Error("Function not implemented.");
  },
  rangle_bracket_sub: (path, print) => {
    throw new Error("Function not implemented.");
  },
  rd_ttile: (path, print) => {
    throw new Error("Function not implemented.");
  },
  real_number_set: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  set_in: (path, print) => {
    throw new Error("Function not implemented.");
  },
  set_map: (path, print) => {
    throw new Error("Function not implemented.");
  },
  set_of_functions: (path, print) => {
    throw new Error("Function not implemented.");
  },
  set_of_records: (path, print) => {
    throw new Error("Function not implemented.");
  },
  sim: (path, print) => {
    throw new Error("Function not implemented.");
  },
  simeq: (path, print) => {
    throw new Error("Function not implemented.");
  },
  source_file: (path, print) => {
    throw new Error("Function not implemented.");
  },
  sqcap: (path, print) => {
    throw new Error("Function not implemented.");
  },
  sqcup: (path, print) => {
    throw new Error("Function not implemented.");
  },
  sqsubset: (path, print) => {
    throw new Error("Function not implemented.");
  },
  sqsubseteq: (path, print) => {
    throw new Error("Function not implemented.");
  },
  sqsupset: (path, print) => {
    throw new Error("Function not implemented.");
  },
  sqsupseteq: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  subset: (path, print) => {
    throw new Error("Function not implemented.");
  },
  subseteq: (path, print) => {
    throw new Error("Function not implemented.");
  },
  substitution: (path, print) => {
    throw new Error("Function not implemented.");
  },
  succ: (path, print) => {
    throw new Error("Function not implemented.");
  },
  succeq: (path, print) => {
    throw new Error("Function not implemented.");
  },
  suffices_proof_step: (path, print) => {
    throw new Error("Function not implemented.");
  },
  sup_plus: (path, print) => {
    throw new Error("Function not implemented.");
  },
  supset: (path, print) => {
    throw new Error("Function not implemented.");
  },
  supseteq: (path, print) => {
    throw new Error("Function not implemented.");
  },
  take_proof_step: (path, print) => {
    throw new Error("Function not implemented.");
  },
  temporal_exists: (path, print) => {
    throw new Error("Function not implemented.");
  },
  temporal_forall: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
    throw new Error("Function not implemented.");
  },
  vertvert: (path, print) => {
    throw new Error("Function not implemented.");
  },
  witness_proof_step: (path, print) => {
    throw new Error("Function not implemented.");
  },
  wr: (path, print) => {
    throw new Error("Function not implemented.");
  },
  "!": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "!!": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\"": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "#": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "(": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "(*": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "(+)": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "(-)": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "(.)": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "(/)": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "(\\X)": (path, print) => {
    throw new Error("Function not implemented.");
  },
  ")": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "*)": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "+": (path, print) => {
    throw new Error("Function not implemented.");
  },
  ",": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "-": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "-+->": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "----": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "--algorithm": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "--fair": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "->": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "-|": (path, print) => {
    throw new Error("Function not implemented.");
  },
  ".": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "..": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "...": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "/=": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "/\\": (path, print) => {
    throw new Error("Function not implemented.");
  },
  ":": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "::": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "::=": (path, print) => {
    throw new Error("Function not implemented.");
  },
  ":=": (path, print) => {
    throw new Error("Function not implemented.");
  },
  ";": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "<": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "<-": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "<<": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "<=": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "<=>": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "<>": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "=": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "=<": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "==": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "====": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "=>": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "=|": (path, print) => {
    throw new Error("Function not implemented.");
  },
  ">": (path, print) => {
    throw new Error("Function not implemented.");
  },
  ">=": (path, print) => {
    throw new Error("Function not implemented.");
  },
  ">>": (path, print) => {
    throw new Error("Function not implemented.");
  },
  ">>_": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "??": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "@": (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  "[": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "[]": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\/": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\A": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\AA": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\E": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\EE": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\X": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\approx": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\asymp": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\bigcirc": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\bullet": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\cap": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\cdot": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\circ": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\cong": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\cup": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\div": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\doteq": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\equiv": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\exists": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\forall": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\geq": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\gg": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\in": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\intersect": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\land": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\leq": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\ll": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\lnot": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\lor": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\neg": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\notin": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\o": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\odot": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\ominus": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\oplus": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\oslash": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\otimes": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\prec": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\preceq": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\propto": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\sim": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\simeq": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\sqcap": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\sqcup": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\sqsubset": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\sqsubseteq": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\sqsupset": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\sqsupseteq": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\star": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\subset": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\subseteq": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\succ": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\succeq": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\supset": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\supseteq": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\times": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\union": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\uplus": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "\\wr": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "]": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "]_": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "^+": (path, print) => {
    throw new Error("Function not implemented.");
  },
  algorithm: (path, print) => {
    throw new Error("Function not implemented.");
  },
  amp: (path, print) => {
    throw new Error("Function not implemented.");
  },
  ampamp: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  boolean_set: (path, print) => {
    throw new Error("Function not implemented.");
  },
  call: (path, print) => {
    throw new Error("Function not implemented.");
  },
  comment: (path, print) => {
    throw new Error("Function not implemented.");
  },
  compose: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  identifier: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  map_from: (path, print) => {
    throw new Error("Function not implemented.");
  },
  map_to: (path, print) => {
    throw new Error("Function not implemented.");
  },
  minusminus: (path, print) => {
    throw new Error("Function not implemented.");
  },
  mod: (path, print) => {
    throw new Error("Function not implemented.");
  },
  modmod: (path, print) => {
    throw new Error("Function not implemented.");
  },
  mul: (path, print) => {
    throw new Error("Function not implemented.");
  },
  mulmul: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  placeholder: (path, print) => {
    throw new Error("Function not implemented.");
  },
  plusplus: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  setminus: (path, print) => {
    throw new Error("Function not implemented.");
  },
  skip: (path, print) => {
    throw new Error("Function not implemented.");
  },
  slash: (path, print) => {
    throw new Error("Function not implemented.");
  },
  slashslash: (path, print) => {
    throw new Error("Function not implemented.");
  },
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
  vert: (path, print) => {
    throw new Error("Function not implemented.");
  },
  when: (path, print) => {
    throw new Error("Function not implemented.");
  },
  while: (path, print) => {
    throw new Error("Function not implemented.");
  },
  with: (path, print) => {
    throw new Error("Function not implemented.");
  },
  "{": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "|-": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "|->": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "|=": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "||": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "}": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "~": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "~>": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "¬": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "×": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "÷": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "‖": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "‥": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "…": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "‼": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⁇": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⁺": (path, print) => {
    throw new Error("Function not implemented.");
  },
  ℕ: (path, print) => {
    throw new Error("Function not implemented.");
  },
  ℝ: (path, print) => {
    throw new Error("Function not implemented.");
  },
  ℤ: (path, print) => {
    throw new Error("Function not implemented.");
  },
  "←": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "→": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "↝": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "↦": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⇒": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⇔": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⇝": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⇸": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "∀": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "∃": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "∈": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "∉": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "∘": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "∝": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "∧": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "∨": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "∩": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "∪": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "∷": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "∼": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "≀": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "≃": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "≅": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "≈": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "≍": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "≐": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "≔": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "≜": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "≠": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "≡": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "≤": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "≥": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "≪": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "≫": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "≺": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "≻": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊂": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊃": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊆": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊇": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊎": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊏": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊐": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊑": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊒": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊓": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊔": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊕": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊖": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊗": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊘": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊙": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊢": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊣": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⊨": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⋄": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⋅": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⋆": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "□": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "◇": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "●": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "◯": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⟨": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⟩": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⟩_": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⟵": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⟶": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⟹": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⟺": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⟼": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⥅": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⩴": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⪯": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⪰": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "⫤": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "〈": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "〉": (path, print) => {
    throw new Error("Function not implemented.");
  },
  "〉_": (path, print) => {
    throw new Error("Function not implemented.");
  }
} 
// as const;

export { keyMap };
