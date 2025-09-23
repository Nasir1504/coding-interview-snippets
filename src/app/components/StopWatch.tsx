
"use client"

import { useState, useRef } from "react";

export default function StopWatch() {

  const [count, setCount] = useState(0);
  const countRef = useRef<number | null>(null);

  const handleStart = () => {
    if (countRef.current) return
    countRef.current = window.setInterval(() => {
      setCount(p => p + 1)
    }, 1000)

  }

  const handleStop = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
      countRef.current = null;
    } (countRef.current)
  }

  const handleReset = () => {
    handleStop()
    setCount(0)
    countRef.current = null;
  }

  return (
    <div className="flex flex-col items-center gap-10">
      <br />
      <p>{count}</p>
      <div className="flex gap-8">
        <button onClick={handleStart} className="px-5 py-1 border border-[#c5c5c530]">Start</button>
        <button onClick={handleStop} className="px-5 py-1 border border-[#c5c5c530]">Stop</button>
        <button onClick={handleReset} className="px-5 py-1 border border-[#c5c5c530]">Reset</button>

      </div>
    </div>
  );
}
