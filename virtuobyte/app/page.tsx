
import React from 'react'
import Hero from '../components/Hero'
import ScrollToTop from '../components/ScrollTo'
import { StreamlinedExperience } from '@/components/Experince'
import Skills from '@/components/Skills';
import Works from '@/components/Works';
import StepsForWorking from '@/components/StepsForWorking';
const page:React.FC = () => {


  return (
    <>
    <Hero/>
    <ScrollToTop top={true}/>
    <Skills/>
    <StepsForWorking/>
    <div className="relative z-10 w-full overflow-x-clip">
    <StreamlinedExperience/>
    </div>
    {/* <Works/> */}
   
    </>
  )
}

export default page