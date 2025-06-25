import React from 'react'
// import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className='bg-slate-800 p-5 text-white gap-4 flex sm:flex-row flex-col justify-around items-center '>
        <div className=' text-3xl font-bold'>
          <a href="/">
            <span className='text-green-400'>&lt;</span>
            Lock
            <span className='text-green-400'>sy/&gt;</span></a>
        </div>
        <ul className='flex   gap-5  font-bold sm text-base'>
        <a href="/" ><li>Home</li></a>
        <a href="/about" ><li>About</li></a>
        <a href="/pass" className='text-center' ><li>Passwords</li></a>
        <a href="/contact" ><li>Contact</li></a>
        
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
