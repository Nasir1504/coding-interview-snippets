import React from 'react'

export default function Comparator() {
    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }

        return 0;
    }


    const people = [
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 },
        { name: "Carol", age: 35 },

    ]

    const result = people.sort((a, b) => descendingComparator(a, b, "age"))

    console.log(result)
    // output: [
    //     { name: "Carol", age: 35 },
    //     { name: "Alice", age: 30 },
    //     { name: "Bob", age: 25 },
    // ]

    function getComparator(
        order,
        orderBy,
    ) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    const items = [
        { name: "A", value: 5 },
        { name: "B", value: 2 },
        { name: "C", value: 8 },

    ]

    const cmpAsc = getComparator('asc, value');
    const cmpDesc = getComparator('desc, value');

    return (
        <div>Comparator</div>
    )
}




// ------------- TypeScript version ----------------

// export default function Comparator() {
//     function descendingComparator<T>(a: T, b: T, orderBy: keyof T): number {
//         if (b[orderBy] < a[orderBy]) {
//             return -1
//         }
//         if (b[orderBy] > a[orderBy]) {
//             return 1;
//         }

//         return 0;
//     }

//     type Person = {
//         name: string;
//         age: number;
//     }

//     const people: Person[] = [
//         { name: "Alice", age: 30 },
//         { name: "Bob", age: 25 },
//         { name: "Carol", age: 35 },

//     ]

//     const result = people.sort((a, b) => descendingComparator(a, b, "age"))

//     console.log(result)
//     // output: [
//     //     { name: "Carol", age: 35 },
//     //     { name: "Alice", age: 30 },
//     //     { name: "Bob", age: 25 },
//     // ]

//     function getComparator<Key extends keyof any>(
//         order: Order,
//         orderBy: Key,
//     ): (
//         a: { [key in Key]: number | string },
//         b: { [key in Key]: number | string },

//     ) => number {
//         return order === 'desc'
//             ? (a, b) => descendingComparator(a, b, orderBy)
//             : (a, b) => -descendingComparator(a, b, orderBy);

//     }


//     return (
//         <div>Comparator</div>
//     )
// }
