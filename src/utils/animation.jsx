"use client"

import { motion } from 'framer-motion'
import React from 'react'

export default function Animation({children}) {
  return (
    <motion.div 
        initial={{opacity: 0, scaleY: 0, translateY: "2rem"}}
        whileInView={{opacity: 1, scaleY: 1, translateY: 0}}
        viewport={{once : true}}
        className='origin-bottom'
    >{children}</motion.div>
  )
}

{/**
"use client"

import {  motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function FrontPage() {
  const  [deleteObject , setDeleteObject] = useState({
    state : true,
  });

  useEffect(()=>{
    setTimeout(()=>
      setDeleteObject(prevState =>({
        ...prevState,
        state : false
    }))
    ,500)
  })

  return (
    <section>
    <div className="flex relative items-center justify-center border-2 w-[20rem] h-[20rem]">
      {deleteObject.state &&(
          <motion.div 
            initial={{scaleY: 0}}
            animate={{scaleY: 1}}
            exit={{scaleY: 0}}
            transition={{duration : 0.5, ease : [0.22, 1, 0.36, 1]}}
            className={`absolute w-full h-full bg-slate-500 origin-bottom ${deleteObject.state === false ? "hidden" : ""}`}
        />
      )}
        <motion.button
          initial={{scaleY: 1}}
          animate={{scaleY: 0}}
          exit={{scaleY: 0}}
          transition={{duration : 0.5, delay: 0.5,  ease : [0.22, 1, 0.36, 1]}}
          className={`absolute w-full h-full bg-slate-500 origin-top ${deleteObject.state === false ? "" : "hidden"}`}
        />
    </div>
    </section>
  );
};    
*/}