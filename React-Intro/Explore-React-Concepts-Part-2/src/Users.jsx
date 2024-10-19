
import React, { useEffect, useState } from 'react'

/* -------- API Call with useEffect and useState -------- 
--> Users er data amra api theke fetch korbo
--> fetch korar shomoy data paiteo pari abr naw paite pari er jonno amader State Lagbe.

--> useEffect hook er Syntax:

    useEffect(() => {
        // code
    }, [dependencies]);


--> Steps:
     R1 - State declare korlam data hold korar jonno, defualt man empty array.
     R2 - useEffect with depedency use korlam, jate data fetch kora jay.
     R3 - data setUsers a set korlam.
 */
export default function Users() {
    const [users, setUsers]=useState([]); // R1


    useEffect(() => { // R2
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=>setUsers(data)) //R3

    }, []); 



    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}

