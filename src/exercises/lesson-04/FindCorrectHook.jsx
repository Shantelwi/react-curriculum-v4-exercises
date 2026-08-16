/* eslint-disable react-hooks/refs */
// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render

import { useRef } from 'react';

export default function FindCorrectHook() {
  let clickCount = useRef(0);

  const button = useRef(null);

  function handleClick() {
    clickCount.current += 1;
    button.current.textContent = `${clickCount.current} Clicks`;
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button ref={button} onClick={handleClick}>
        {clickCount.current} Clicks
      </button>
    </div>
  );
}
