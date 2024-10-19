
import './App.css'
import Counter from './State_Management';
import Team from './Team';
import Users from './Users';
import Firends from './Friends';



// T1- Event handler

function App() {
  
  function handleClick() {
    alert('Button Clicked');
  }

  const handleClick2 = () => {
    alert('Button-2 Clicked');
  }

  const addToFive = (num) => {
    alert(num+5);
  }

  return (
    <>
    <Firends></Firends>
    
    <Users></Users>

    <Team></Team>

    <Counter></Counter>
    {/* T1- Event handler
    --> onclick event handler korar jonno onClick attribute use kora hoy.
    --> onClick attribute er moddhe function call kora hoy. like: onClick={handleClick}
    */}

      <h1>React Core Concepts</h1>
      <button onClick={handleClick}>Click Me B-1</button>
      <button onClick={handleClick2}>Click Me B-2</button>
      
      {/*Event Handler Alert Without Function name */}
      <button onClick={()=>{alert('Third Clicked')}}>Third Clicked</button>
      
      {/* Event Handler Alert With Arrow Function for passing parameter 
      --> Eta use korbo tokhon jokhon amra kno parameter pass korbo event handler click korar shate shate.
      */}
      <button onClick={()=>addToFive(3)}>Calculate</button>

    </>
  )
}

export default App
