import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarRating from './components/StarRating'
import Carousel from './components/Carousel'
import Accordion from './components/Accordion'


function App() {
  
  return (
    <>
      <div>
        <StarRating numberofstars={10}/>
        <Carousel/>
        <Accordion/>
      </div>
    </>
  )
}

export default App
