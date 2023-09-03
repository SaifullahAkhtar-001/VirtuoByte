'use client'
import React, { useContext, useRef } from 'react';
import s from '../../styles/skills.module.css';
import { ScrollContext } from '../../utils/scroll-observer';

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  // console.log(elContainer)
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }
  return (
    <div ref={refContainer} className=' dark:text-white text-black'>
      <div className='min-h-screen  flex flex-col justify-center items-center text-[3rem] max-[782px]:text-[1.5rem] max-[500px]:text-[28px] my-[1rem] min-[10000px]:m-8 tracking-wide font-[600]'>
        <div className='leading-[1.15] flex flex-col  gap-14 min-[500px]:items-center break-words min-[500px]:text-center'>
          <div
            className={s.skillText}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
           At VirtuoByte, we&apos;re all about making businesses flourish in the ever-evolving digital world. 
          </div>
          <span
            className={`${s.skillText} inline-block after:content-['_']`}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            Our dedicated team of experts empathizes with the hurdles that modern businesses encounter and is passionately devoted to crafting inventive solutions that can fuel your success.
          </span>
          <span
            className={`${s.skillText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            Our commitment to innovation, expertise, and personalized solutions has consistently driven growth and success for our clients.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
