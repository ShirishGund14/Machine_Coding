import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
    const [Barval,SetBarVal]=useState(100);

    useEffect(()=>{
      setInterval(() => {
        SetBarVal((prev)=>prev-5);
      }, 150);
    },[]);
    return (
        <div className='bg-gray-950  h-screen w-full p-4 flex flex-col justify-evenly items-center '>
            <div className='text-green-500 text-4xl font-bold text-center'>Progress Bar</div>

            <div className='w-full flex flex-col items-center overflow-hidden '>

                <div className='w-1/2 h-8 bg-gray-400 rounded-full relative overflow-hidden'></div>

                {/* transform: translateX(100%); this will shift 100% backwards 
                
           original           |......|
     after translatex  |......|
                */}
                <div className='w-1/2 h-8 bg-green-500  absolute' style={{
                    transform:`translatex(-${Barval}%)`
                }}></div>
                <button className='bg-green-600 p-3 mt-8 text-gray-100'>Upload</button>
            </div>
        </div>
    )
}

export default ProgressBar
