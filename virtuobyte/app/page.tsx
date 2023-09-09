import React from 'react'
import Hero from '../components/Hero'
import ScrollToTop from '../components/ScrollTo'
import { StreamlinedExperience } from '@/components/Experince'
import Skills from '@/components/Skills';
import Works from '@/components/Works';
import StepsForWorking from '@/components/StepsForWorking';
import Team from '@/components/Team';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Services from '@/components/Services'
const page: React.FC = () => {
  return (
    <>
      <Hero />
      <ScrollToTop top={true} />
      <Skills />
      <About />
      <Team />
      <div className="relative z-10 w-full overflow-x-clip">
        <StreamlinedExperience />
      </div>
      <Services />
      <div className='mb-[3rem]'>
        <StepsForWorking />
      </div>
      {/* <Works /> */}
      <Testimonials />
      <Contact />

    </>
  )
}

export default page