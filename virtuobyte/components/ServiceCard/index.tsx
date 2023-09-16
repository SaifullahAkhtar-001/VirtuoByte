import Image, { StaticImageData } from 'next/image';
import React,{ ReactNode } from 'react'

interface ServiceCardProps {
  image?: StaticImageData;
  title: string;
  description: string;
  icon?: ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description,icon }) => {
  return (
    
    <div className='flex flex-col gap-8 flex-1 border max-[650px]:min-w-[250px] min-w-[500px]  justify-between dark:border-white border-black rounded-xl p-6'>
     {icon && <div className='text-[28px] font-[500] break-words'>{icon}</div>}
      <div className='text-[28px] font-[500] break-words'>{title}</div>
      <div className='break-words text-[16px]'>{description}</div>
    </div>
  );
};


export default ServiceCard;


