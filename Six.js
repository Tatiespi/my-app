import "./App.css";
import "./index.js"

import React from 'react';
import App from './App';

function Counter() {
  const { count, increment, decrement, reset } = App(0, 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
