import { useState } from 'react'

import './App.css'

function App() {
  let [counter,setcounter]=useState(5)
//  let counter = 5
  const addValue = () => {
    console.log('value added',counter);
    //counter = counter + 1
    setcounter(counter + 1)
  } 
  const removeValue = () => {
      console.log('value removed',counter);
      counter = counter + 1
      setcounter(counter - 1)
      
     
 } 
  
  return (
    <>
      <h1> chai or counter project</h1>
      <h3>counter value:{counter}</h3>
      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer:{counter}</p>
   </>
      
  )
}

export default App
