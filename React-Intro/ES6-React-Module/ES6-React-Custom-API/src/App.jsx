import { useEffect, useState } from 'react'
import Watch from './component/Watch/Watch';
import './App.css'


function App() {

/*3 Ways to use data in React jodi API data na use kori r ki
  --> local data use, in memory data for Temporary use API data
  --> JSON generator
  --> ***ChatGPT
  */
  const watches=[
    {id:1, name:"Rolex", price:100},
    {id:2, name:"Omega", price:200},
    {id:3, name:"Tag Heuer", price:300},
    {id:4, name:"Seiko", price:400},
  ]

  const [cars, setCars]=useState([]); //declare state variable

  useEffect(()=>{
    fetch('cars.json')
    .then(res=>res.json())
    .then(data=>setCars(data))

  },[])
  

  return (
    <>
      
      <h1>Vite + React</h1>
      {
        watches.map(watch=><Watch key={watch.id} watch_props={watch}> </Watch>)
      }

<h2>Cars List:</h2>
    <ul>
      {cars.map(car => (
        <li key={car.id}>
          {car.name} - ${car.price}
        </li>
      ))}
    </ul>
      
    </>
  )
}

export default App
