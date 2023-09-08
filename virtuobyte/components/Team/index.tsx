import Image from 'next/image'
import React from 'react'

const index = () => {
    return (
        <div id='team' className='flex items-center scroll-mt-[110px] flex-col my-[6rem] gap-8'>
            <div className='text-[34px] my-[1rem] text-center font-[500] break-words' >Meet Our Highly Skilled Team</div>
            <div className='flex items-center justify-center gap-5 w-full flex-wrap'>
                <div className='flex items-center flex-col'>
                    <Image src='/assets/avatar-svgrepo-com.svg' width={300} height={300} alt='Mubashir' />
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='text-[18px] font-[500] text-center break-words'>Mubashir | Software Engineer</div>
                        <a href='https://github.com/mubashir05-beep' target='_blank' className='text-[16px]'>@mubashir</a>
                    </div>
                </div>
                <div className='flex items-center flex-col'>
                    <Image src='/assets/avatar-portrait-svgrepo-com.svg' width={300} height={300} alt='Saifullah' />
                    <div className='flex flex-col items-center justify-center gap-2'>
                    <div className='text-[18px] font-[500] text-center break-words'>Saifullah | Full-Stack Engineer</div>
                        <a href='https://github.com/SaifullahAkhtar-001' target='_blank' className='text-[16px]'>@saifullah</a>
                    </div>
                </div>
                <div className='flex items-center flex-col'>
                    <Image src='/assets/shoaib.svg' width={300} height={300} alt='Shoaib' />
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='text-[18px] font-[500] text-center break-words '>Shoaib | Full-Stack Engineer</div>
                        <a href='https://github.com/Shoaib-Ali-ASif' target='_blank' className='text-[16px]'>@shoaib</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index