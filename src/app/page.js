
"use client"
import React, { useState, useRef } from 'react';


export default function page() {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  const handleStart = () => { 
    if(countRef.current) return; 
    countRef.current = setInterval(() => {setCount(p => p+1)},1000)

  }
  const handleReset = () => {
    handleStop();
    setCount(0)
  }
  const handleStop = () => { 
    clearInterval(countRef.current)
    countRef.current = null;

  }

  return (
    <div className='text-center'>
      <br />
      <p>{count}</p>
      <br />

      <div>
        <button onClick={handleStart} className='border border-[#c5c5c530] px-5 py-1 cursor-pointer'>Start</button>&nbsp;
        <button onClick={handleStop} className='border border-[#c5c5c530] px-5 py-1 cursor-pointer'>Stop</button>&nbsp;
        <button onClick={handleReset} className='border border-[#c5c5c530] px-5 py-1 cursor-pointer'>Reset</button>
      </div>
    </div>
  )
}
