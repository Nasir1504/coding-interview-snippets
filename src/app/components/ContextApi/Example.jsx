import React from "react";
import { useCounter } from "./CounterContext";

function Example() {
  const { count, increment, decrement } = useCounter();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CounterDisplay;
