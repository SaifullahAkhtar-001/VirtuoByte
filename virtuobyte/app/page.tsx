import React from 'react'
import Hero from '../components/Hero'
import ScrollToTop from '../components/ScrollTo'
import { StreamlinedExperience } from '@/components/Experince'
import Skills from '@/components/Skills';
import Works from '@/components/Works';
import StepsForWorking from '@/components/StepsForWorking';
import Testimonials from '@/components/Carousel/Testimonials';
import Team from '@/components/Team';
import About from '@/components/About';
import Form from '@/components/Form'
const page: React.FC = () => {
  return (
    <>
      <Hero />
      <ScrollToTop top={true} />
      <Skills />
      <About />
      <Team />
      <div className='mb-[6rem]'>
        <StepsForWorking />
      </div>
      <div className="relative z-10 w-full overflow-x-clip">
        <StreamlinedExperience />
      </div>
      <Works />
      <Testimonials />
      <Form/>
    </>
  )
}

export default page