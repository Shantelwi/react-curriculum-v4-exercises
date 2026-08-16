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
    setCount((previous) => previous + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// (Write your explanation here)
// The effect caused an infinite loop because it depended on count. I changed the dependency array to an empty array so it runs once when the component mounts.
