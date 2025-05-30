import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center px-32 gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center '>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-6'>&copy;2025</button>
        </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
           <div className='card relative rounded-xl w-1/2 h-full bg-[#05342e] flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"></img>
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-6'>RATING 5.0 ON CLUTCH</button>
           </div>
           <div className='card relative rounded-xl w-1/2 h-full bg-[#05342e] flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"></img>
            <button className='absolute px-7 py-2 rounded-full border-2 left-2.5 bottom-5'>BUSINESS BOOTCAMP ALUMINI</button>
           </div>
         </div>
    </div>
  )
}

export default Cards
