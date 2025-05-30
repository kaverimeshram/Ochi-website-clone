import React from 'react'

function Footer() {
  return (
    <div className=' flex gap-5 w-full h-screen bg-zinc-900 py-20 px-20 font-[FoundersGrotesk]'>
      <div className='w-1/2 h-full  flex flex-col '>
        <div className='heading'>
          <h1 className='text-[10vw] font-semibold uppercase leading-none mb-12'>Eye</h1>
        <h1 className='text-[10vw] font-semibold uppercase leading-none mb-12'>Opening</h1>
        </div>
      </div>
      <div className='w-1/2'>
       <h1 className='text-[5.5vw] uppercase leading-none mb-15'>Presentations
       </h1>
        <div className='relative font-thin left-7 border-10 mt-5'>
          <a className='block'>Facebook</a>
          <a className='block'>Twitter</a>
          <a className='block'>Instagram</a>
          <a className='block'>GooglePlay</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
