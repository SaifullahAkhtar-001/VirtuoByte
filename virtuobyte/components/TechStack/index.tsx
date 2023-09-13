'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import { wrap } from '@motionone/utils';



interface ParallaxProps {
  children: any;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 20 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 800
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -47, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <>
      <div className='overflow-hidden'>
        <motion.div className="flex items-center gap-12 " style={{ x }}>
          <span className='flex items-center justify-between gap-12 text-[40px]'>{children} </span>
          <span className='flex items-center justify-between gap-12 text-[40px]'>{children} </span>
          <span className='flex items-center justify-between gap-12 text-[40px]'>{children} </span>
          <span className='flex items-center justify-between gap-12 text-[40px]'>{children} </span>
          <span className='flex items-center justify-between gap-12 text-[40px]'>{children} </span>

        </motion.div>
      </div>
    </>
  );
}

export default ParallaxText;
