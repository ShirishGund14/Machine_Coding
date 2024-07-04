import React, { useState } from 'react'

const Accordion = () => {

    const [show,setShow]=useState(false);

    const handletoggle=()=>{
        setShow(!show);
    }
  return (
    <div className='bg-zinc-700 h-screen w-full p-4 flex flex-col justify-center items-center'>
    <div className='text-4xl text-yellow-600 text-center font-bold my-20'>Accordion</div>


    <div className='w-1/2 bg-gray-800 text-yellow-500 p-5 flex flex-col gap-6 '>

           <div className='flex justify-between items-center'>
           <p> Lorem ipsum dolor sit amet.</p>
           <button className='bg-yellow-600 text-gray-900 p-4 w-[3rem] hover:bg-transparent hover:text-yellow-600 hover:border hover:border-yellow-600'
           onClick={handletoggle}
           >+</button>
           </div>

           <p className={`${show ?'block' :'hidden'} bg-gray-700 p-4`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus optio rem inventore quia dolorem iusto nobis omnis harum alias cupiditate.
           </p>
    </div>
      
    </div>
  )
}

export default Accordion
