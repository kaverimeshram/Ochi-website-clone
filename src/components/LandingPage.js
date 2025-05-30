import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
     <div className='textstructure mt-52 px-20'>
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
            return (
            <div className='masker'>
                <div className='w-fit flex items-end overflow-hidden'>
                {index === 1 && (
                  <motion.div 
                  initial={{width: 0}}
                  animate={{width: "9vw" }}
                  transition={{ease: [0.45, 0, 0.55, 1], duration: 1}} 
                  className='w-[9vw] h-[5.7vw] rounded-md relative top-[1.5vw] bg-red-500'></motion.div>
                  )}
        <h1 className=" uppercase text-[7.5vw] leading-[7.1vw] tracking-tighter font-['Founders Grotesk'] font-medium">
            {item}
        </h1>
        </div>
        </div>
            )
        })}
     </div>
     <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20">
      {[
        "For public and private companies",
       "From the first pitch to the last pitch to IPO",
       ].map((item, index)=> (
      <p className="text-md font-light tracking-tight leading-none">{item}</p>
      ))}
     <div className="start flex items-center gap-5">
        <div className="px-5 py-2 border-[1px]  border-zinc-500 font-light text-md uppercase rounded-full">start the project</div>
        <div className="w-10 h-10  flex items-center justify-center border-[2px]  border-zinc-500 rounded-full">
            <span className='rotate-[45deg]'>
            <FaArrowUpLong />
            </span>
        </div>
     </div>
      </div> 
        </div>
    
  )
}

export default LandingPage;

