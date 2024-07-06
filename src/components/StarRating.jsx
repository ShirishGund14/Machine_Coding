import React, { useState } from 'react'
import { IoMdStar } from "react-icons/io";

const StarRating = ({ numberofstars }) => {

  const [selectstar,SetSelectedStar]=useState();
  const [hoverval,SetHoverVal]=useState();

  const stars = [];

  for (let i = 0; i < numberofstars; i++) {
    stars.push(<IoMdStar />);
  }



  // console.log(stars)
  return (

    <div className='bg-gray-700 h-screen w-full p-5 flex justify-center items-center'>
      {
        stars.map((star, index) => {
          return (
            <div className='w-1/2  h-40 bg-gray-900 md:p-3 flex items-center justify-center ' key={index}>
              <span className={`text-gray-300 md:text-4xl cursor-pointer ${ (index<=hoverval || (hoverval===0 && index<=selectstar)) ?'text-yellow-500': ''} `} 
              key={index}  
              onClick={()=>SetSelectedStar(index)}
              onMouseEnter={()=>SetHoverVal(index)}
              onMouseLeave={()=>SetHoverVal(0)}
              >
                {star}
              </span>
            </div>
          )
        })
      }


    </div>
  )
}

export default StarRating
