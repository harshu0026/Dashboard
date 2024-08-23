import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Search from './components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app bg-d-bg p-10 m-16">
      <Dashboard />
      <Search />
    </div>
    </>
  )
}

export default App
