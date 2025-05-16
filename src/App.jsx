import { useState } from 'react'
import Hello from './components/Hello'
import './App.css'
import AddMovieForm from './components/AddMovieForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <AddMovieForm/>
      </div>
    </>
  )
}

export default App
