import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Tailwind is Working 🚀</h1>
      <button className="px-6 py-2 bg-white text-indigo-700 rounded-lg hover:bg-indigo-100">
        Click Me
      </button>
    </div>
    </>
  )
}

export default App
