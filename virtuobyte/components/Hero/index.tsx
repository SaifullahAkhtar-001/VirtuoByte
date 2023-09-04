'use client'
import React, { useEffect, useRef, useState } from 'react';
import HeroSVG from '@/public/UI-UX team-bro.svg';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const Index: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"]

  });
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  return (
    <motion.div style={{opacity}}  id='top' ref={targetRef} className='flex items-center   max-[1450px]:mt-[5rem]  gap-4 justify-between min-h-screen max-[1450px]:flex-col '>
      <div className='flex flex-col gap-[4rem] max-[450px]:gap-[2rem]  flex-1 justify-between '>
        <div className='flex flex-col  gap-4'>
          <div className='text-[45px] max-[550px]:text-[28px] max-[386px]:text-[25px]  font-[600] break-words '>
            Elevating Businesses through Innovative Software Solutions and Digital Excellence.
          </div>
          <div className='text-[15px] break-words'>Discover how our innovative software solutions and commitment to digital excellence can revolutionize your business operations. We&apos;re dedicated to elevating businesses by seamlessly integrating cutting-edge technology, optimizing processes, and delivering exceptional customer experiences. Explore the limitless possibilities with our tailored solutions, and let us be your partner in achieving sustainable growth and success.</div>
        </div>

        <div className='flex max-[1200px]:flex-col min-[12001px]:items-center gap-8'>
          <button className='underline underline-offset-4 flex items-center gap-1 '>Know More About Us <FiArrowUpRight size={17} /></button>
          <button className='underline underline-offset-4 flex items-center gap-1 '>Contact Us <FiArrowUpRight size={17} /></button>
        </div>
      </div>
      
      <Image src={HeroSVG} height={0} width={0} alt='Hero Image'  />
     
    </motion.div>
  );
}

export default Index;