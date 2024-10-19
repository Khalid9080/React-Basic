
import { useEffect, useState } from 'react';
import './Friends.css';
import Friend from './Firend';

export default function Friends(){

    const[friends,setFriends]=useState([]) // friends variable ta ekhane ekta array of object hishebe ashe,
                                           // ei vairable ta API fetch korar por ekta array of object hoe gese    

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))

    },[]) // eta dekhanor jonno alada component use korbo.

    return (
        <div className='box'>
            {/* friends array of obj er length ber korbe */}
            <h1>Friends:{friends.length}</h1> 
            {
                friends.map(friend=> <Friend friend_props={friend}></Friend>) // friends array of obj er shob gulo obj friend er moddhe ase, friend_props={friend} etar mane hocche friend_props er moddhe friend obj ta pass kora.
            }                                                   
        </div>

    )
}

/*
--> 1. state to hold data
--> 2. useEffect with dependency array to fetch data
--> 3. feth to load data
--> 4. set loaded data to state
--> 5. display data on the component

*/