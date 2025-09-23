import React from 'react'

export default function Memoization() {

    const add = (a, b) => a + b

    const MemoFunction = (fn) => {

        let cache = {};

        function memo(...args) {

            const key = JSON.stringify(args)

            if (cache[key]) {
                console.log('Cached result')
                return cache[key]
            }
            const result = fn(...args)
            cache[key] = result
            console.log('Calculated result')

            return result;
        }

        return memo

    }

    const memoAdd = MemoFunction(add)


    console.log(memoAdd(5, 6))
    console.log(memoAdd(5, 6))



    return (
        <div className='text-center'>Memoization (open console)</div>
    )
}
