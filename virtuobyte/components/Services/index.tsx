import React from 'react'

const index = () => {
  return (
    <div id='services' className='flex  items-center scroll-mt-[80px] flex-col my-[6rem] gap-8'>
    <div className='flex flex-col items-center my-8 '>
    <div className='text-[34px] my-[2rem] text-center font-[500] break-words'>Discover Our Service Spectrum</div>
    <div className='break-words text-center text-[16px]'>At VirtuoByte, we take pride in delivering cutting-edge web solutions and development services tailored to your unique needs. Our team of experts is committed to bringing your vision to life and ensuring your online presence stands out. Explore our range of services below:</div>
    </div>
    <div id='contact' className='flex scroll-mt-[100px] flex-wrap gap-4  justify-center  flex-col my-4'>
      <div className='flex flex-1 flex-col gap-5 justify-between border  dark:border-white border-black rounded-xl max-[425px]:p-4 p-6'>
        <div className='text-[28px] max-[425px]:text-[25px] font-[500] break-words'>Creative Web Design</div>
        <div className='break-words text-[16px]'>Elevate your online presence with our creative web design services. We blend aesthetics with functionality to craft visually stunning websites that leave a lasting impression. Whether you're starting from scratch or looking to revamp your existing site, our designers are ready to turn your ideas into reality.</div>
      </div>
      <div className='flex flex-1 flex-col gap-8  justify-between border dark:border-white border-black rounded-xl max-[425px]:p-4 p-6'>
        <div className='text-[28px] max-[425px]:text-[25px] font-[500] break-words'>Web App Development</div>
        <div className='break-words text-[16px]'>
          Stay ahead of the competition with our web app development expertise. We specialize in building robust, scalable, and feature-rich web applications that empower your business. From e-commerce platforms to custom enterprise solutions, we've got your web development needs covered.
        </div>
      </div>
      <div className='flex flex-1 flex-col gap-8  justify-between border dark:border-white border-black rounded-xl max-[425px]:p-4 p-6'>
      <div className='text-[28px] max-[425px]:text-[25px] font-[500] break-words'>UI/UX Design</div>
      <div className='break-words text-[16px]'>User experience is at the heart of everything we do. Our UI/UX designers are dedicated to creating seamless and intuitive interfaces that keep your audience engaged. We focus on usability, accessibility, and aesthetics to ensure your users have a delightful journey through your digital products.
        </div>
      </div>
      <div className='flex flex-1 flex-col gap-8   justify-between border dark:border-white border-black rounded-xl max-[425px]:p-4 p-6'>
      <div className='text-[28px] max-[425px]:text-[25px] font-[500] break-words'>Custom Solutions</div>
      <div className='break-words text-[16px]'>Every business is unique, and we understand that. If your needs go beyond our standard services, we're here to create custom solutions tailored to your specific requirements. Let's collaborate to build something truly exceptional.</div>
      </div>
    </div>
    </div>
    
  )
}

export default index