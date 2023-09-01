'use client'
import React, { useEffect, useRef, useState } from 'react';
import HeroSVG from '@/public/UI-UX team-bro.svg';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

const Index: React.FC = () => {

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"]

  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <motion.div style={{ opacity }} ref={targetRef} className='flex min-[1201px]:items-center h-screen max-[1200px]:flex-col '>
      <div className='flex flex-col '>
        <div className='text-[35px] break-words  py-[3rem]'>
          Elevating Businesses through Innovative Software Solutions and Digital Excellence.
        </div>
      </div>
      <Image src={HeroSVG} height={100} width={100} alt='Hero Image' className='w-full' />
    </motion.div>
  );
}

export default Index;