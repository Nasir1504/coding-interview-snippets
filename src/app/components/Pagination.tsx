
"use client"

import { useState } from "react";


const arrData = Array.from({ length: 52 }, (_, i) => {
    return `Item ${i + 1}`
})


export default function Pagination() {
    const itemPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1)
    const startIndex = (currentPage - 1) * 10;
    const lastIndex = startIndex + 10;
    const currentItem = arrData.slice(startIndex, lastIndex)
    const totalPage = Math.ceil(arrData.length / itemPerPage)

    return (
        <div className="flex flex-col justify-center gap-7">
            <br />

            {
                currentItem.map((item, i) => {
                    return <p key={i} className="text-center">
                        <span className="px-10 py-3 border border-[#c5c5c530]">{item}</span>
                    </p>
                })
            }
            <br />
            <div className="flex justify-center">
                <button
                    onClick={() => { setCurrentPage(p => p - 1) }}
                    disabled={currentPage === 1}
                    className="border border-[#c5c5c530] px-6 py-1 cursor-pointer hover:bg-[#fff] hover:text-black"
                >Prev</button>&nbsp;&nbsp;
                <span className="py-1">Page: {currentPage} out of {totalPage}</span>&nbsp;&nbsp;
                <button
                    onClick={() => { setCurrentPage(p => p + 1) }}
                    disabled={currentPage === totalPage}
                    className="border border-[#c5c5c530] px-6 py-1 cursor-pointer hover:bg-[#fff] hover:text-black"
                >Next</button>
            </div>
        </div>
    );
}

