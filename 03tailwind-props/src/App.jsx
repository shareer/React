import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const data = [{ name: "Shareer", role: "Frontend Developer", Place: "Amsterdam" },
  { name: "Fasalu Rahman", role: "Frontend Developer", Place: "Norway" },
  { name: "Fahsan Athif", role: "Android Developer", Place: "Sweden" },
  { name: "Jaison"}];

  return (
    <>
      <h1 className='text-3xl bg-blue-500 rounded-md p-3 mb-6'>Vite with Tailwind</h1>
      <Card person={data}/> 
    </>
  )
}

export default App
