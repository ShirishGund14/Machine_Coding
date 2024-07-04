import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarRating from './components/StarRating'

function App() {
  
  return (
    <>
      <div>
        <StarRating numberofstars={10}/>
      </div>
    </>
  )
}

export default App
