"use client"

import { useState } from "react"
export default function TodoList() {

    const [items, setItems] = useState("");
    const [itemList, setItemList] = useState([]);

    const handleClick = () => {
        if (!items.trim()) return;

        setTimeout(() => {
            setItemList(p => [...p, items])
            setItems("")
        }, 200)
    }

    const handleKeyDown = (e) => {
        if (!items.trim()) return;

        if (e.key === "Enter") {

            setTimeout(() => {
                setItemList(p => [...p, items])
                setItems("")
            }, 200)
        }
    }

    const handleRemove = (id) => {
        const result = itemList.filter((_, i) => {
            return id !== i
        })

        setItemList(result)
    }
    return (
        <div className='text-center '>

            {
                itemList.map((item, i) => {
                    return <p key={i}>
                        <span
                            className="font-200 text-[10px] cursor-pointer"
                            onClick={() => handleRemove(i)}
                        ><i>remove</i></span>&nbsp;&nbsp;
                        <span>{item}</span>

                    </p>
                })
            }
            <br />
            <br />
            <input
                type='text'
                placeholder='Add items'
                value={items}
                onChange={e => setItems(e.target.value)}
                onKeyDown={handleKeyDown}
                className="border border-[#c5c5c520] px-4 py-1"

            />
            <button 
            onClick={handleClick} 
            className="cursor-pointer border border-[#c5c5c5] px-4 py-1 bg-[#c5c5c520]"
            >+Add</button>

        </div>
    )
}
