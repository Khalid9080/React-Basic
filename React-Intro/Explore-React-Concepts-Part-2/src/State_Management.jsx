

/*       -------------- State Analogy --------------

jodi amra destructutring korte cai, evabe korbo:
            const [name, age]={name:'Rahim', age:25};

            // array destructuring ----
            const [first, second]=[10, 20]; 
            ekhane, first=10, second=20 hobe. simple hishab.
            --> dan pasher [10, 20] array ta kno variable a thakte pare, abar function er moddheo thakte pare.

            suppose, ekta function liklam,
                getSomething(){
                    return [10, 20];
                }
                    getSomething() // output: [10, 20]
            --> eta jehutu array function, so amra arrray die destructuring korte pari.
            const [a, b]=getSomething();

            // akhon jodi amra  kno parameter die function cai--
            //ebong function er vitor function use kore value return korte cai, evabe korbo:

            function getSomething(num){
            
                function innerThing(value){
                    num=value;
                }
                return [num, innerThing]; //number, function return korlam
            }

            same another expmle--

            function useState(num){

                 function updateNum(value){

                    num=value;
                    }
                return [num, updateNum]; //  eta hocche ekta array 
            }

        return [num, updateNum] ei array take destructure korte caile--
       
        const [count, setCount]=useState(10);

         **State Analogy --> datatype [variable, function]=useState(initialValue);
        **useState hocche ekta function, jeta 2 ta value return kore. ekta holo variable, arekta holo function.


*/

// je jinishta change hoite pare oite k state bole. like: like,comment,share,view etc.
// useState use korar shate shate import { useState } from "react"; add hoe jabe.
import { useState } from "react";

export default function Counter() {

    const [count, setCount]=useState(0);
    const handleAdd=()=>{
        const newCount=count+1;
        setCount(newCount);
    }

    const handleReduce=()=>{
        const newCount=count-1;
        setCount(newCount);
    }

    return (
        <div style={{border: '2px solid yellow'}}>
            <h2>Counter:{count}</h2>
            <button onClick={handleAdd}>Add</button>

            <button onClick={handleReduce}>Reduce</button>
            
        </div>
    );
}


