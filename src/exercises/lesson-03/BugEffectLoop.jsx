/* eslint-disable react-hooks/set-state-in-effect */
//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setCount(count => count + 1);
  },[]);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
//added a dependency array
//State updated happens only once
//avoids stale value bug