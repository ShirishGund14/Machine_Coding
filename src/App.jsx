import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarRating from './components/StarRating'
import Carousel from './components/Carousel'
import Accordion from './components/Accordion'
import ProgressBar from './components/ProgressBar'
import Pagination from './components/Pagination'


function App() {
  
  return (
    <>
      <div>
        <StarRating numberofstars={10}/>
        <Carousel/>
        <Accordion/>
        <ProgressBar/>
        <Pagination NumberOfProductsToShow={8}/>
      </div>
    </>
  )
}

export default App
