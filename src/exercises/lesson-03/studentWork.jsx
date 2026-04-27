//Lesson-03 Component Lifecycle, Hooks, State, and Props
//Exercise: React Bug Hunt – Fix the broken components in this folder
//Impport components here
import BugEffectLoop from "./BugEffectLoop.jsx";
import BugProps from "./BugProps.jsx";
import BugMutatedState from "./BugMutatedState.jsx"
export default function StudentWork() {
  return (
    <div>
      {/* add components here */}
      <BugEffectLoop />
      <BugProps />
      <BugMutatedState/>
      <p>Student output will go here</p>
    </div>
  );
}
