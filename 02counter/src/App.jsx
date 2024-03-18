import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter+1);
    // setCounter((prev)=> prev+1) // to avoid batching we use callbacks
  }

  const removeValue = () => {
    setCounter(counter-1);
  }

  return (
    <>
     <h1>React Course with hitesh {counter}</h1>
     <h2>Counter value is : {counter}</h2>
     <button onClick={addValue}>Add Value</button> {" "}
     <button onClick={removeValue}>Remove Value</button>
     <p>Footer: {counter}</p>
    </>
  )
}

export default App
