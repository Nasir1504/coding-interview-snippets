"use client"

import { useState } from "react"

export default function page() {
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState([]);

  const hardCodedValues = {
    "hi": "Hey there",
    "how are you": "I'm good, You say?",
    "bye": "Goodbye!! Have a nice day!"
  }

  const handleClick = () => {

    if (!input.trim()) return;

    const query = input.toLowerCase();

    const userMessage = { sender: "user", text: input }
    setMsg(p => [...p, userMessage])
    setInput("");

    const botTyping = { sender: "bot", text: "typing..." }
    setMsg(p => [...p, botTyping])

    const botReply = hardCodedValues[query] || "Sorry I've no idea!! "

    setTimeout(() => {

      const botMessage = { sender: "bot", text: botReply }
      setMsg(p => {
        const updatedMsg = [...p];
        updatedMsg.pop();
        return [...updatedMsg, botMessage]
      }
      )
    }, 600)
  }


  return (
    <div className="text-center">
      <br />
      {
        msg.map((item, i) => {
          return <p key={i}
            className={`${item.sender === 'bot' ? "text-right" : "text-left"} px-200`}

          >
            <span  >
              {item.text}

            </span>
          </p>
        })
      }
      <br />
      <div>
        <input
          className="border border-[#c5c5c510] px-2 py-1"
          type="text" placeholder="Type here..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={handleClick} className="bg-white px-6 py-1 text-[#000] ml-2 rounded cursor-pointer">Send</button>
      </div>
    </div>
  )
}
