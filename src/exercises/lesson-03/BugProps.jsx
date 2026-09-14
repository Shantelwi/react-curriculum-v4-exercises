// src/exercises/lesson-03/BugProps.jsx

import { useState } from 'react';

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/
import { useState } from 'react';

import { useState } from 'react';

export default function BugProps({ name = 'friend' }) {

  const [message, setMessage] = useState('Hello, ' + name);

  function handleChange() {
    setMessage( 'Hi, ' + name + '!');
function BugProps({ name = 'friend' }) {
  const [message, setMessage] = useState('Hello, ' + name);

  function handleChange() {
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

export default BugProps;

// Explanation:
// imported useState to be able to manage values through state 
/*  Adjusted the component so the `message` is stored in a way React 
can monitor, allowing the UI to update when the button is clicked. **/
// (Write your explanation here)
// the original code changed message directly. Needed to import and update state. React re-renders when state changes, allowing the greeting to update when the button is clicked.
