import Parser from "tree-sitter";
import { Query } from "tree-sitter";
import TLA from "@tlaplus/tree-sitter-tlaplus";

import * as prettier from "prettier";

import nodeTypes from "@tlaplus/tree-sitter-tlaplus/src/node-types.json";
import { plugin } from "./index";

const text = `-------------------------- MODULE state_transition --------------------------
EXTENDS Integers, TLC

(*--algorithm state_transiiton

variables
  state = "A",
  created_date = 0,
  current_date = 0,
  max_count = 5;
  
define
  Invariant == /\ (current_date = created_date => state = "A")
               /\ (current_date = created_date + 1 => state = "B")
               /\ (current_date >= created_date + 2 => state = "C")
end define;


process Transition = 1
begin
  UpdateState:
    while current_date < max_count do
      print << state, current_date>>;
      if state = "A" /\ current_date = created_date then
        state := "B";
      elsif state = "B" /\ current_date = created_date + 1 then
        state := "C";
      end if;
      current_date := current_date + 1;
    end while;
end process;

end algorithm; *)
\* BEGIN TRANSLATION (chksum(pcal) = "e3a749a2" /\ chksum(tla) = "c708672f")
VARIABLES state, created_date, current_date, max_count, pc

(* define statement *)
Invariant == /\ (current_date = created_date => state = "A")
             /\ (current_date = created_date + 1 => state = "B")
             /\ (current_date >= created_date + 2 => state = "C")


vars == << state, created_date, current_date, max_count, pc >>

ProcSet == {1}

Init == (* Global variables *)
        /\ state = "A"
        /\ created_date = 0
        /\ current_date = 0
        /\ max_count = 5
        /\ pc = [self \in ProcSet |-> "UpdateState"]

UpdateState == /\ pc[1] = "UpdateState"
               /\ IF current_date < max_count
                     THEN /\ PrintT(<< state, current_date>>)
                          /\ IF state = "A" /\ current_date = created_date
                                THEN /\ state' = "B"
                                ELSE /\ IF state = "B" /\ current_date = created_date + 1
                                           THEN /\ state' = "C"
                                           ELSE /\ TRUE
                                                /\ state' = state
                          /\ current_date' = current_date + 1
                          /\ pc' = [pc EXCEPT ![1] = "UpdateState"]
                     ELSE /\ pc' = [pc EXCEPT ![1] = "Done"]
                          /\ UNCHANGED << state, current_date >>
               /\ UNCHANGED << created_date, max_count >>

Transition == UpdateState

(* Allow infinite stuttering to prevent deadlock on termination. *)
Terminating == /\ \A self \in ProcSet: pc[self] = "Done"
               /\ UNCHANGED vars

Next == Transition
           \/ Terminating

Spec == Init /\ [][Next]_vars

Termination == <>(\A self \in ProcSet: pc[self] = "Done")

\* END TRANSLATION 

=============================================================================
\* Modification History
\* Last modified Sat Apr 20 20:33:40 JST 2024 by yumuuu
\* Created Sat Apr 20 15:02:16 JST 2024 by yumuuu
`;

const text2 = `-------------------------- MODULE state_transition --------------------------
EXTENDS Integers, TLC

(*--algorithm state_transiiton

variables
  state = "A",
  created_date = 0,
  current_date = 0,
  max_count = 5;
  
define
  Invariant == /\ (current_date = created_date => state = "A")
               /\ (current_date = created_date + 1 => state = "B")
               /\ (current_date >= created_date + 2 => state = "C")
end define;


process Transition = 1
begin
  UpdateState:
    while current_date < max_count do
      print << state, current_date>>;
      if state = "A" /\ current_date = created_date then
        state := "B";
      elsif state = "B" /\ current_date = created_date + 1 then
        state := "C";
      end if;
      current_date := current_date + 1;
    end while;
end process;

end algorithm; *)
`;

const text3 = `-------------------------- MODULE state_transition --------------------------
EXTENDS Integers, TLC

(*--algorithm state_transiiton

variables
  state = "A",
  created_date = 0,
  max_count = 5;
  
define
  Invariant == /\ (current_date = created_date => state = "A")
               /\ (current_date = created_date + 1 => state = "B")
               /\ (current_date >= created_date + 2 => state = "C")
end define;

end algorithm; *)
`;

const parser = new Parser();
parser.setLanguage(TLA);
const tree = parser.parse(text3);
const callExpression = tree.rootNode.toString();
console.log(callExpression);

async function f() {
  const result = await prettier.format(text3, {
    parser: "tlaplus",
    plugins: [plugin],
    printWidth: 80, //lineの動作検証のため最大長を決める
    tabWidth: 2,
  });
  console.log(result);
  return result;
}

f();
