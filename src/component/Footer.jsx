import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-white flex flex-col items-center py-2  w-full'>
            <div className=' text-2xl font-bold text-white'>
                <span className='text-green-400'>&lt;</span>
                Lock
                <span className='text-green-400'>sy/&gt;</span>
            </div>
            <div className='flex items-center gap-1 text-lg font-medium'>
                <span> Created with</span>
                <span className='text-2xl'>🔐</span>
                <span>by  Honey</span>
            </div>
        </div>
    )
}

export default Footer
