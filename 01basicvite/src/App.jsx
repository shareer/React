import { useState } from 'react'
import Youtube from './Youtube'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite React App</h1>
      <Youtube/>
    </>
  )
}

export default App
