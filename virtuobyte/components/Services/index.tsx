import Image from 'next/image';
import React from 'react';
import CreativeWeb from '@/public/Opensource-cuate.svg';
import WebApp from '@/public/Software engineer-amico.svg';
import UIUX from '@/public/Static website-cuate.svg';
import CUSTOMSOL from '@/public/Starting a business project-rafiki.svg'
const index = () => {
  return (
    <div id='services' className='flex items-center scroll-mt-[80px]  flex-col my-[6rem] gap-8'>
      <div className='flex flex-col items-center my-8 '>
        <div className='text-[34px] my-[2rem] text-center font-[500] break-words'>Discover Our Service Spectrum</div>
        <div className='break-words text-center text-[16px]'>At VirtuoByte, we take pride in delivering cutting-edge web solutions and development services tailored to your unique needs. Our team of experts is committed to bringing your vision to life and ensuring your online presence stands out. Explore our range of services below:</div>
      </div>
      <div className='flex scroll-mt-[100px] flex-wrap gap-4   my-4'>
        <div className='flex flex-col gap-5 border max-w-[300px] justify-between dark:border-white border-black rounded-xl max-[425px]:p-4 p-6'>
        <Image src={CreativeWeb} height={300} width={300} alt='Web Design' className='' />
          <div className='flex flex-col'>
            <div className='text-[28px]  max-[425px]:text-[25px] font-[500] break-words'>Creative Web Design</div>
            <div className='break-words text-[16px]'>Enhance your online image with our creative web design. We create beautiful websites that make a strong impact, whether you're starting fresh or updating your current site.</div>
          </div> </div>
        <div className='flex flex-col gap-8 max-w-[300px] justify-between border dark:border-white border-black rounded-xl max-[425px]:p-4 p-6'>
          <Image src={WebApp} height={300} width={300} alt='Web Design' className='' />
          <div>
            <div className='text-[28px] max-[425px]:text-[25px] font-[500] break-words'>Web App Development</div>
            <div className='break-words text-[16px]'>
              Outshine your competitors with our web app expertise. We excel in crafting powerful, scalable, and feature-packed web applications for your business, including e-commerce and custom enterprise solutions.
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-8 max-w-[300px]  justify-between border dark:border-white border-black rounded-xl max-[425px]:p-4 p-6'>
          <Image src={UIUX} height={300} width={300} alt='Web Design' className='' />
          <div>
            <div className='text-[28px] max-[425px]:text-[25px] font-[500] break-words'>UI/UX Design</div>
            <div className='break-words text-[16px]'>We prioritize user experience. Our UI/UX designers create user-friendly, attractive interfaces that engage your audience, emphasizing usability, accessibility, and aesthetics for a delightful digital journey.</div>
          </div>
        </div>
        <div className='flex  flex-col gap-8  max-w-[300px] justify-between border dark:border-white border-black rounded-xl max-[425px]:p-4 p-6'>
          <Image src={CUSTOMSOL} height={300} width={300} alt='Web Design' className='' />
          <div>
            <div className='text-[28px] max-[425px]:text-[25px] font-[500] break-words'>Custom Solutions</div>
            <div className='break-words text-[16px]'>Every business is unique, and we understand that. If your needs go beyond our standard services, we&apos;re here to create custom solutions tailored to your specific requirements. Let&apos;s collaborate to build something truly exceptional.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
