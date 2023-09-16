import Image from 'next/image';
import React from 'react';
import CreativeWeb from '@/public/Opensource-cuate.svg';
import WebApp from '@/public/Software engineer-amico.svg';
import UIUX from '@/public/Static website-cuate.svg';
import CUSTOMSOL from '@/public/Starting a business project-rafiki.svg'
import ServiceCard from '../ServiceCard';
import WebDevelop from '@/public/assets/web-development-svgrepo-com.svg'
const index = () => {
  return (
    <div id='services' className='flex items-center scroll-mt-[80px]  flex-col my-[6rem] gap-8'>
      <div className='flex flex-col items-center my-8 '>
        <div className='text-[34px] my-[2rem] text-center font-[500] break-words'>Discover Our Service Spectrum</div>
        <div className='break-words text-center text-[16px]'>At VirtuoByte, we take pride in delivering cutting-edge web solutions and development services tailored to your unique needs. Our team of experts is committed to bringing your vision to life and ensuring your online presence stands out. Explore our range of services below:</div>
      </div>
      <div className='flex scroll-mt-[100px] flex-wrap gap-4   my-4'>
        <ServiceCard
          image={CreativeWeb}
          title='Full-Stack Web Development'
          description="Elevate your online presence with our full-stack web development services. Our creative web designs are crafted to leave a lasting impact, whether you&apos;re launching a new website or giving your current one a fresh update."
        />
        <ServiceCard
          image={CreativeWeb}
          title='Front-End Development'
          description="At VirtuoByte, we specialize in front-end development that transforms your online image. Our creative web designs are engineered to make a powerful impression, whether you&apos;re starting from scratch or revitalizing an existing website."
        />
        <ServiceCard
          image={CreativeWeb}
          title='Back-End Development'
          description="Our back-end development expertise is your key to enhancing your online presence. Through creative web design, we create websites that leave a strong impression, whether you&apos;re embarking on a new project or rejuvenating an existing site."
        />
        <ServiceCard
          image={CreativeWeb}
          title='Webflow Development'
          description="Harness the potential of your online presence with our Webflow development services. Our creative web designs are designed to make a significant impact, whether you&apos;re launching a new website or refreshing your current one."
        />
        <ServiceCard
          image={CreativeWeb}
          title='Wordpress Development'
          description="Empower your online identity with our WordPress development solutions. Our creative web designs are tailored to make a lasting impact, whether you&apos;re starting anew or revamping your current website."
        />
        <ServiceCard
          image={UIUX}
          title='UI/UX Design'
          description='User experience is paramount. Our UI/UX designers are dedicated to crafting user-friendly, visually appealing interfaces that captivate your audience. We prioritize usability, accessibility, and aesthetics to ensure a delightful digital journey.'
        />
        <ServiceCard
          image={CUSTOMSOL}
          title='Custom Solutions'
          description="We understand that every business is unique. If your requirements extend beyond our standard services, our team is ready to collaborate and create bespoke solutions tailored to your specific needs. Let&apos;s work together to build something truly exceptional."
        />
      </div>
    </div>
  );
}

export default index;
