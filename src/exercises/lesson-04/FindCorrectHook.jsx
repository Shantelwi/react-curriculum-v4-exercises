// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useState } from 'react';
export default function FindCorrectHook() {
  const [count, setCount] = useState(0); // ← incorrect implementation

  function handleClick() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{count} Clicks</button>
    </div>
  );
}
