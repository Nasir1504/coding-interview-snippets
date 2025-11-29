import React from "react";
import { CounterProvider } from "./CounterContext";
import Example from "./Example";

function ContextApp() {
  return (
    <CounterProvider>
      <Example />
    </CounterProvider>
  );
}

export default App;
