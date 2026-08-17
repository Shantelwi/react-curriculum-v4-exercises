/* eslint-disable react-hooks/refs */
// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';

export default function FindCorrectHook() {
  const clickCount = useRef(0); // ← incorrect implementation
  const button = useRef(null);

  function handleClick() {
    clickCount.current += 1;
    button.current.textContent = `${clickCount.current} Clicks`;
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button ref={button} onClick={handleClick}>
        Clicks
      </button>
    </div>
  );
}
