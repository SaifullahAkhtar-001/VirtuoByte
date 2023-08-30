import React from 'react';

const Index: React.FC = () => {
  return (
    <div className='flex flex-col justify-between  '>
      <div className='text-[75px] w-[90vw] py-8'>
        Unleashing Technological Excellence
      </div>
      <div className='flex items-center w-[90vw] justify-between '>
        <div className='text-lg w-[750px] '>
          Elevate your business with VirtuoByte: Where Innovation Meets Functionality, delivering premier web and software solutions for empowered success.
        </div>
        <button className='bg-black dark:bg-white dark:text-black text-white  px-4 py-2 rounded-lg'>
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Index;
