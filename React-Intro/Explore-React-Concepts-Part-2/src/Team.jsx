// state hook -> useState
//hook is a function
import { useState } from "react";

export default function Team() {

    //destructuring
    const [team,setTeam] = useState(11); //useState(11) is passing value 11 to the state variable

    const handleAdd = () => { //adding event handler
        //team = team + 1; eita kora jabena. karon state immutable. 
        const newTeam = team + 1;
        //state change korar jonno team k ekta variable a nie setTeam use korte hobe.
        setTeam(newTeam); 
    }

    const handleRemove = () => {
        setTeam(team - 1);
    }
       
    const teamStyle = {
        border: '2px solid red', // corrected 'bordedr' to 'border'
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'
    };
    
    return (
        <div style={teamStyle}>
            <h1>Players:{team}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
}
