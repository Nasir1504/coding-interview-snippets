"use client"
import { useState, useEffect } from "react";

export default function page() {
  const [apiData, setApiData] = useState([]);
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    (
      async () => {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/posts")

          if (!res.ok) {
            throw new Error(`Failed to fetch data with status: ${res.status}`)
          }

          const data = await res.json();

          setApiData(data)
          setResult(data);

        } catch (error) {
          throw new Error("Something went wrong", error)
        }
      }
    )();
  }, [])

  useEffect(() => {
    const query = input.toLowerCase().trim();

    const handler = setTimeout(() => {
      if (!query) {
        setResult(apiData)
        return;
      }

      const filteredData = apiData.filter(item => {
        return item.title.toLowerCase().includes(query)
      })

      setResult(filteredData)

    }, 600)


    return () => { clearTimeout(handler) }

  }, [input, apiData])

  return (
    <div className="text-center">
      <br />
      <input
        type="search"
        placeholder="search here"
        className="border border-white px-2 py-1"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <br />
      <br />

      {result.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  )
}
