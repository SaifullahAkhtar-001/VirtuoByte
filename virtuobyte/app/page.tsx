
import React from 'react'
import Hero from '../components/Hero'
import ScrollToTop from '../components/ScrollTo'
import StepsFromWorking from "../components/StepsForWorking"
import { StreamlinedExperience } from '@/components/Experince'
import Skills from '@/components/Skills'

const page:React.FC = () => {


  return (
    <>
    <Hero/>
    <ScrollToTop top={true}/>
    <Skills/>
    {/* <StreamlinedExperience/> */}
 
    </>
  )
}

export default page