
"use client"

import { useState, useEffect } from "react";

const data = Array.from({ length: 50 }, (_, i) => { return `Item ${i + 1}` })

export default function ScrollTrigger() {
  const [currentItem, setCurrentItem] = useState(data.slice(0, 10));
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY > document.documentElement.scrollHeight - 50
        &&
        !loading
        &&
        currentItem.length < data.length
      ) {
        setLoading(true)
        const nextItem = data.slice(currentItem.length, currentItem.length + 10);

        setTimeout(() => {
          setCurrentItem(p => [...p, ...nextItem])
          setLoading(false)
        }, 1000)

      }

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [loading, currentItem])

  return (
    <div className="flex flex-col justify-start items-center gap-20">
      <br />
      {
        currentItem.map((item, i) => {
          return <p className="text-center" key={i}>
            <span className="px-15 py-8 border border-[#c5c5c530]">{item}</span>
          </p>
        })
      }
      {loading && <p className="text-center pb-4">loading...</p>}

    </div>
  );
}
