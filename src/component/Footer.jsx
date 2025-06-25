import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col items-center py-2  w-full'>
            <div className=' text-2xl font-bold text-white'>
                <span className='text-green-400'>&lt;</span>
                Lock
                <span className='text-green-400'>sy/&gt;</span>
            </div>
            <div className='flex items-center gap-2 text-lg font-medium'>
                <span> Created with  </span>
                <span> <img src="/public/heart.png" alt="" className='w-10' /></span>
                <span>by  Honey</span>
            </div>
        </div>
    )
}

export default Footer
