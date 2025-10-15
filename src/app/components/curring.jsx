import React from 'react'

export default function Memoization() {



    const add = (a, b) => {
        let total = a;

        function curring(b) {
            total += b
            return curring;
        }

        curring.valueOf = () => total

        return curring;
    }


    console.log(+add(2)(2)(2)(2)(2))



    return (
        <div className='text-center'>Curring (open console)</div>
    )
}
