import React from 'react'

function About() {
  return (
      <div className='w-full p-20 bg-[#CDEA68] rounded-tl-2x rounded-tl-3xl text-black'>
        <h  className="font-['NeueMontreal] text-6xl leading-[3vw] tracking-tight">
            Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds,
             sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
             </h>
             <div className='w-full  flex gap-5 border-t-[1px] pt-20 mt-10 border-[#a1b562]'>
               <div className= 'w-1/2'>
               <h1 className='text-7xl'>Our apporoch:</h1>
               <button className='flex uppercase gap-10 items-center px-10 py-6 mt-5 bg-zinc-900 rounded-full text-white'>Read More
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
               </button>
               </div> 
               <div className='w-1/2 h-[70vh] rounded-3xl bg-[#c1c1c1]'>
               </div>
             </div>
      </div>
  );
}

export default About

