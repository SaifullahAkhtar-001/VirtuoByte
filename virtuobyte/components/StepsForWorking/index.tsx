'use client'
import React from 'react'
import {
    motion,
    useScroll,
    useSpring,
  } from "framer-motion";
  
import Image from './Image'
const Index = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  return (
    <>
      {/* {[1, 2, 3, 4, 5].map((image) => (
        <Image key={image} id={image} />

      ))} */}
      <motion.div className="progress" style={{ scaleX }} />
    
    </>
  )
}

export default Index