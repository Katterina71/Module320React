
import { useState } from 'react'
import {sculptureList} from '../data.js'
import './App.css'

function App() {

  let [count, setCount] = useState(0) // returns -> [state, setState]
  const add = () => {
   setCount(count + 1)
  }

  console.log('render')
  // let [mango, banana] = [1,2]
  //array destructuring

  
  // let state = useState(0) // returns -> [state, setState]
  // let count = state[0];
  // let setCount = state[1]; 

  return (
    <>
      {/* <button onClick={()=>{...}} >Add</button> */}
      <button onClick={handleClick} >Next</button>
    </>
    <h2>
      <i> {sculpture.name}</i>
    </h2>

  )
}

export default App
