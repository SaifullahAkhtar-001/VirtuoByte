import React from 'react'
import Hero from '../components/Hero'
import ScrollToTop from '../components/ScrollTo'
import { StreamlinedExperience } from '@/components/Experince'
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import StepsForWorking from '@/components/StepsForWorking';
import Team from '@/components/Team';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Services from '@/components/Services'
import Stack from '@/components/Stack'
import ContactCTA from '@/components/ContactCTA'
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
      <ContactCTA />
      <Projects />
      <Stack />
      <Testimonials />
      <Contact />

    </>
  )
}

export default page