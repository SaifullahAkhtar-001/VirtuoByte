import Link from 'next/link'
import React from 'react'


import { BsArrowUp } from 'react-icons/bs';
const index: React.FC<{ top: boolean }> = (top) => {
    return (
        
            <Link href={'#top'} className='flex flex-col fixed bottom-3 right-3 gap-2 border w-[60px] text-center border-black justify-center p-2 rounded-lg break-words  items-center text-black font-[500]'><BsArrowUp size={22}/>Scroll Up</Link>
        
    )
}

export default index