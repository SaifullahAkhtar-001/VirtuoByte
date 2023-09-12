import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface ServiceCardProps {
    image: StaticImageData;
    title: string;
    description: string;
  }
  
  const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => {
    return (
        <div className='flex flex-col gap-5 h-[500px] flex-1 border max-[650px]:min-w-[250px] min-w-[500px] justify-between dark:border-white border-black rounded-xl p-6'>

         
            {/* <Image src={image} alt={title} className='w-[2/4]'/> */}
            {/* <div className='flex flex-col'> */}
            <div className='text-[28px] font-[500] break-words'>{title}</div>
            <div className='break-words text-[16px]'>{description}</div>
     {/* </div> */}
      </div>
    );
  };
  
  
  export default ServiceCard;

        
