import React from 'react'
import Hero from '../components/Hero'
import ScrollToTop from '../components/ScrollTo'
import StepsForWorking from '../components/StepsForWorking'
const page:React.FC = () => {
  return (
    <>
    <Hero/>
    <ScrollToTop top={true}/>
    <StepsForWorking/>
    </>
  )
}

export default page