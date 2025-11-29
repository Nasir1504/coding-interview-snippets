import { createContext, useContext, useState } from "react";

// Create Context
const CounterContext = createContext();

// Create Provider component
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

// Custom hook for easy use
export function useCounter() {
  return useContext(CounterContext);
}
    