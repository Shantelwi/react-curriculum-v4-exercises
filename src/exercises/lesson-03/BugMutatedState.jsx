// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button type="button" onClick={handleAdd}>
        Add 1
      </button>
    </div>
  );
}

// Explanation:
// (Write your explanation here)
//The bug happened because it was directly mutating the count state with count++. Instead I used the state setter to calculate the next value from the previous state.
