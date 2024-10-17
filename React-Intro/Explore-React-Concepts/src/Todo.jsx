
/* conditional rendering system-1-----------
--> ekhane theke App.jsx file a  Todo function ta export korche.

export default function Todo({ task, isDone }) {

    
    if (isDone === true) {
        return <li>Finished :{task}</li>
    }
    else{
      return <li>Not Finished :{task}</li>
    }

}

*/



//conditional rendering system-2 -----------
/*
export default function Todo({ task, isDone }) {
    if (isDone) {
        return <li>Finished :{task}</li>
    }
      return <li>Not Finished :{task}</li>
    
}
*/

//Conditional rendering Using Ternery Operator system-3  -----------
/*
export default function Todo({ task, isDone }) {
    return (
        <li>{isDone ? 'Finished' : 'Not Finished'} : {task}</li>
    )
}

*/

//Conditional rendering Using && Operator system-4  -----------
/* 
--> && operator er kaj holo jodi isDone true hoi tahole sudhu matro : Finished print korbe, r jodi isDone false hoi tahole kichu print korbe na.

export default function Todo({ task, isDone }) {
    return (
        <li>{task} {isDone && ': Finished'}</li> 
    )
}
    

*/

//Conditional rendering Using || Operator system-5  -----------
// isDone jodi Flase/shotto na hoe tahole : Do it print korbe. 
//        ekhane jodi false hoe    ||      eta print korbe.
/*
export default function Todo({ task, isDone }) {
    return (
        <li>{task} {isDone || ': Do it'}</li> 
    )
}

*/

//Conditional rendering Using variable system-6  -----------

export default function Todo({ task, isDone }) {

    let listItem;
    if (isDone) {
        listItem = <li>Finished : {task}</li>
    }
    else {
        listItem = <li>Not Finished : {task}</li>
    }

    return listItem;
}