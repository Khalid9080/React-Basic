import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Todo from './Todo' // Component Todo.jsx theke import kora hoise
// import function from './Todo' 
import Actor from './Actor'
import Product from './product'
import BookStore from './BookStore'


// import-> recieve
// export-> send
// jSX -> JavaScript XML



function App() { // root component


const actors=['Tom Hanks', 'Tom Cruise', 'Tom Hardy', 'Tom Holland', 'Tom Felton']
  
const books=[
  {id:1, name:'Harry Potter', author:'J.K Rowling'},
  {id:2, name:'The Alchemist', author: 'Paulo Coelho'},
  {id:3, name:'The Da Vinci Code', author: 'Dan Brown'},
  {id:4, name:'The Kite Runner', author: 'Khaled Hosseini'},
  {id:5, name:'The Hunger Games', author: 'Suzanne Collins'},
  {id:6, name:'The Great Gatsby', author: 'F. Scott Fitzgerald'},
]



  // Array of Object 
  const products=[
    {id:1, name:'laptop', price:1400 }, 
    {id:2, name: 'mobile', price:1500},
    {id:3, name: 'watch', price:5000}, 
    {id:4, name: 'camera', price:8000}, 
    {id:5, name:'laptop', price:1900},
  
  ]

  return (
    <> 
      
      <h1>Vite + React</h1>

    <BookStore boi={books}></BookStore>




      {/* -------- products array of object k dynamically use korar system ------------*/}
      {
        products.map(prdct=><Product product={prdct}></Product>)
      }
      



      {/*---------- actors array ta k dynamically use korar system ----> */}
      <Actor name={"Khalid Saifullah"}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>) // map() array er shobgulo element k ekshat kore kisu ekta return kore.
      }


      {/* Declear/Import the Component */}
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explorer Core concepts" isDone={false}></Todo> {/* Import from Todo.jsx*/}
      <Todo task="Try JSX" isDone={true}></Todo>


{/*  -------------Dynamically Object Declearation ------------- 

      --> Amra Componenet Declear korar shomoy Object er property gulo assign kore dite pari. 
          like: <Device name="Laptop" price="55,000 tk"></Device>
      --> Conmponent er vitor just ekta variable name dite hobe. oitake dhore access korte parbe. 
          like: function Device(props) 
          return(<h2>This Device is : {props.name} Price: {props.price}</h2>) 
      */}

      <Device name="Laptop" price="55,000 tk"></Device> {/*name="Laptop" price="55,000 tk" Egulo Comoponent er vitor as an object er property hishebe pass hobe. */}
      <Device name ="Mobile" price="14,000 tk"></Device> {/*Jar karone easely object er moto access kora jae  */}
      <Device name ="Watch" price="3,000 tk"></Device>
      <Person></Person> 
      <Student grade="7" score="99"></Student> 
      <Student grade={12} score="100"></Student> 
      <Student grade="9" score="98"></Student> 
      <Developer></Developer>

    </>
  )
}





function Device(props){ //Object name hobe props, r eitar property gulo upore decleare kora ase.
  console.log(props);
  return(
  <h2>This Device is : {props.name} Price: {props.price}</h2>

  ) 
}


/* ---------- Component Rules ----------
--> 1. Component er nam capital letter diye start korte hobe
--> 2. Component er moddhe JSX return korte hobe
--> 3. JSX a return () er moddhe likhte hobe
--> 4. Component ke use korar jonno function App() er return er vitor Component/Function name import korte hobe 
*/



/* ---------- JSX Rules ----------
--> 1. JSX external CSS use korar jonno App.css file use korte hobe and App.jsx a div er vitor className='' tag use korte hobe.
--> 2. JSX inline CSS use korar jonno App.jsx a div er vitor style={} tag use korte hobe.
       Componenet er vitor ekta const variable declear kore oitar vitor custom css property gula set korte hobe.
       then variable ta style={} er moddhe likhte hobe. 
--> 3. Othoba pura object ta style={} er moddhe likha jae.

*/




// Component
function Person(){ // component function er nam capital letter diye start korte hobe.
  // JSX
  const age= 20;
  const money= 1000;
  const person={name:'sakib', age:25}
  return(
    <h3>I am a {person.name} with age: {age+money}</h3>
  )
}



//Another Component
// function Student(props){
//  console.log(props);
//   // JSX
//   return(
//     // External CSS - R1
//     <div className='student'> 
//       <h1>This is a Student</h1>
//       <p>Class: Khalid</p> 
//       <p>age: 23</p>
//     </div>
//   )
// }

/*  -------- Destructuring props object -------------
--> Things you need to know, 

     props={
       grade: 7,
       score: 99
     }
    Destucturing er jonno amra etake likhte pari --
    const {grade, score}= props; 
    or
    const {grade, score}= {grade: 7, score: 99}
    Then, amra directly grade, score variable use korte pari.
    

*/

// Component
const {grade, score}= {grade: '7', score: '99'}
function Student({grade, score=3}){  // destructuring props object , we can use default value also
 console.log(grade, score);
  // JSX
  return(
    // External CSS - R1
    <div className='student'> 
      <h1>This is a Student</h1>
      <p>Class: {grade}</p> 
      <p>Score : {score}</p>
    </div>
  )
}




function Developer(){
  const developerStyle={ // inline CSS - R2
    margin: '20px',
    padding: '20px',
    border: '2px solid forestgreen',
    borderRadius: '20px'
  }

  return(
    <div style={developerStyle}>
      <h5>Devoloper</h5>
      <p>Coding: Awosome Journey</p>
    </div>
  )

  // return(
  //   <div style={{ // inline CSS - R3
  //     margin: '20px',
  //     padding: '20px',
  //     border: '2px solid forestgreen',
  //     borderRadius: '20px'
  //   }}>
  
  //     <h5>Devoloper</h5>
  //     <p>Coding:</p>
  //   </div>
  // )
}

export default App
