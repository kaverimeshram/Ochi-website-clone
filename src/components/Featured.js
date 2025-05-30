import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {
const [isHovering,setHovering] = useState(false);

  const handleHover = () => {
  setHovering(true);
  }

  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-2  border-zinc-700  pb-20'>
            <h1 className='text-8xl font-["NeueMontreal"] tracking-tighter'>
                Featured Project
                </h1>
            </div>
           <div className='px-20'>
            <div className='cards w-full flex gap-10 mt-10'>
                <div onMouseEnter={() =>setHovering(true)} onMouseLeave={()=>setHovering(false)} className='cardcontainer relative w-1/2 h-[75vh]'>
                <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-5xl'>FYDE</h1>
                <div className='card w-full h-full rounded-xl overflow-hidden'>
                    {"FYDE".split('').map((item, index) => (
                         <motion.span
                          initial={{y: "100%"}}  
                           animate={isHovering ? {y: "0%"} : {y: "100%"}} 
                           transition={{ease:[0.22, 1, 0.36, 1] ,delay: index*.06}}
                           className='inline-block'
                           >
                            {item}
                            </motion.span>
                        ))} 
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"></img>
                </div>
                </div>
                <div className='cardcontainer relative rounded-lg w-1/2 h-[75vh]'>
                <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-5xl'>AH2 & Matt Horn</h1>
                <div className='card w-full h-full rounded-xl overflow-hidden'>
                                        {"AH2 & Matt Horn".split('').map((item, index) => (
                       <motion.span 
                          initial={{y: "100%"}}  
                           animate={isHovering ? {y: "0%"} : {y: "100%"}} 
                           transition={{ease:[0.22, 1, 0.36, 1] ,delay: index*.06}}
                           className='inline-block'
                           >
                            {item}
                            </motion.span>
                        ))} 
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"></img>
                </div>
                </div>
                </div>
            </div>
           </div>
   
  )
}

export default Featured

