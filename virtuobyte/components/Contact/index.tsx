import React from 'react';
import Form from '@/components/Form';

const index: React.FC = () => {
    return (
        <div className='flex flex-col items-center gap-8 '>
            <div className='text-[34px] my-[1rem] text-center font-[500] break-words'>
                Have Questions? Contact Us
            </div>
            <div className='flex justify-between max-[1200px]:flex-col gap-4 my-4'>
                <div className='flex flex-1 flex-col justify-between border max-[425px]:p-4 p-6 dark:border-white rounded-xl gap-4 border-black '>
                    <div className="text-[28px] font-[600]">
                        We&apos;ll Be Happy to Hear from You
                    </div>
                    <div className="text-[16px] word-break">
                        At Virtuo Byte, we thrive on meaningful connections. Whether you have questions about our web design services, need assistance with your online presence, or simply want to discuss your digital ambitions, we&apos;re all ears. Our dedicated team is here to listen, assist, and collaborate with you on your journey towards online success. Your satisfaction and growth are our top priorities. Send us a message today, and let&apos;s start crafting the perfect digital solutions for your business together. Your vision is our inspiration, and we can&apos;t wait to make it a reality.
                    </div>
                </div>
                <div className='flex flex-1 border max-[425px]:p-4 p-6 dark:border-white rounded-xl border-black '>
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default index;
