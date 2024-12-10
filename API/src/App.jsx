import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import APIrequest from './Component/APIrequest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <APIrequest/>
    </>
  )
}

export default App
