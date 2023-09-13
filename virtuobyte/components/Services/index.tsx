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
          title='Creative Web Design'
          description="Enhance your online image with our creative web design.We create beautiful websites that make a strong impact, whether you're starting fresh or updating your current site."
        />
        <ServiceCard
          image={WebApp}
          title='Web App Development'
          description='Outshine your competitors with our web app expertise. We excel in crafting powerful, scalable, and feature-packed web applications for your business, including e-commerce and custom enterprise solutions.'
        />
        <ServiceCard
          image={UIUX}
          title='UI/UX Design'
          description='We prioritize user experience. Our UI/UX designers create user-friendly, attractive interfaces that engage your audience, emphasizing usability, accessibility, and aesthetics for a delightful digital journey.'
        />
        <ServiceCard
          image={CUSTOMSOL}
          title='Custom Solutions'
          description="Every business is unique, and we understand that. If your needs go beyond our standard services, we're here to create custom solutions tailored to your specific requirements. Let's collaborate to build something truly exceptional."
        />
      </div>
    </div>
  );
}

export default index;
