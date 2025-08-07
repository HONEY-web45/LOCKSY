import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";



const Navbar = () => {
  const {user, loginWithRedirect,isAuthenticated, isLoading,logout  } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
 
  const toggle = () => {
    setIsOpen(!isOpen);
    
    
  }
  const toggle1 = () => {
    setIsOpen1(!isOpen1);
    
    
  }
    const onclose =() => { 
      setIsOpen(false);
    
  };
  return (
    <div>
      <nav className='bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]  text-white px-4 md:px-2 lg:px-5 py-5 block  '>
         
            <div className='flex flex-row gap-4 gap2 md:gap-2 lg:gap-4 justify-between  items-center'>
              
            <button className='block text-2xl  md:hidden' onClick={()=>toggle()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg></button>
        <div className=' text-3xl md:block  flex justify-around gap-10 font-bold'>
          <a href="/">
            <span className='text-green-400'>&lt;</span>
            Lock
            <span className='text-green-400'>sy/&gt;</span></a>
        
      </div>
        <div className='flex items-center gap-3 lg:gap-5'>
        <ul className={`hidden  md:flex items-center  gap-2.5 lg:gap-4  font-bold sm text-base`}>
        <a href="/" className='  border  focus:outline-none  focus:ring-4  font-medium rounded-lg text-sm px-4 py-2   bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700' ><li>Home</li></a>
        <a href="/about" className='  border  focus:outline-none  focus:ring-4  font-medium rounded-lg text-sm px-4 py-2   bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700' ><li>About</li></a>

        {isAuthenticated ? <a href="/pass" className='  border  focus:outline-none  focus:ring-4 cursor-pointer  font-medium rounded-lg text-sm px-4 py-2   bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700' ><li>Passwords</li></a>: <li className=' cursor-pointer  border  focus:outline-none  focus:ring-4  font-medium rounded-lg text-sm px-4 py-2   bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700' onClick={()=>loginWithRedirect()}>Passwords</li>}
        <a href="/contact" className='  border  focus:outline-none  focus:ring-4  font-medium rounded-lg text-sm px-4 py-2   bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700' ><li>Contact</li></a>
        </ul>
        {isAuthenticated ?
        <div className='flex items-center gap-2 md:gap-1 lg:gap-2 relative'>

          <div className="w-9 h-9 hid1 rounded-full overflow-hidden border-2 border-white  shadow-sm" onClick={()=>toggle1()} >
  <img src={user.picture} alt="User avatar" className="w-full h-full object-cover" onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.nickname)}&background=random&length=1`; }} />
</div> 
<button className=' hidd  border  focus:outline-none  focus:ring-4  font-medium rounded-lg text-sm px-4 md:px-2 lg:px-4 py-1.5   bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 flex items-center gap-2'><img  src={user.picture} alt="profile"className='rounded-full '   onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.nickname)}&background=random&length=1`; }} height={25} width={25} /> <span className=''>{ user.nickname || user.email} </span></button>
        <div id="userDropdown" className={`absolute ${isOpen1?"block":"hidden"}  hid1  -right-4 top-8 mt-2 w-48 bg-gray-900 rounded-md shadow-lg  z-50 text-sm`}>
    <div className="px-4 py-3 border-b border-gray-200">
      <p className="font-semibold text-white ">Hey, {user.nickname}</p>
    </div>
    <button onClick={()=>logout()} className=" w-full text-left  px-4 py-2 text-sm font-semibold text-white hover:bg-gray-500 flex gap-2  "><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out">
  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="white"/>
  <polyline points="16 17 21 12 16 7" stroke="white"/>
  <line x1="21" y1="12" x2="9" y2="12" stroke="white" />
</svg>
</span>Logout </button>
   
 
</div>
         <button className=' hidd  border  focus:outline-none  focus:ring-4 font-medium rounded-lg text-sm px-4 py-2   bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700' onClick={()=>logout()}>logout</button> 
         </div>:<button className=' bg-gray-800 border  focus:outline-none  focus:ring-4  font-medium rounded-lg text-sm px-4 py-2    text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700' onClick={()=>loginWithRedirect()}>login</button>}


        <div className={`fixed top-0 left-0 z-10 h-full w-48 bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-white  py-3 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
<div className='flex px-3 items-center justify-between mb-2'>
       <h5 className="text-base font-semibold  uppercase text-gray-400">Menu</h5>   <button onClick={onclose} className=" text-gray-500 text-xl p-1 hover:bg-gray-800 rounded-xl focus:outline-none">&lt;&lt;</button></div>
    <ul className="flex flex-col gap-1 px-4">
      <li className='rounded-lg text-white py-2 pl-2  hover:bg-gray-700  '><a href="/" className='flex items-center gap-5 '><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

</span><span className='text-lg'>Home</span></a></li>
      <li className='rounded-lg text-white py-2 pl-2  hover:bg-gray-700  '><a href="/about" className='flex items-center gap-5 text-lg '><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <line x1="12" y1="16" x2="12" y2="12"/>
  <line x1="12" y1="8" x2="12.01" y2="8"/>
</svg>
</span>About</a></li>
      <li className='rounded-lg text-white py-2 pl-2  hover:bg-gray-700  '><a href="/pass" className='flex items-center gap-5 text-lg '><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
</svg>

</span>Passwords</a></li>
      <li className='rounded-lg text-white py-2 pl-2  hover:bg-gray-700  '><a href="/contact" className='flex items-center gap-5 text-lg '><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <rect x="3" y="5" width="18" height="14" rx="2" ry="2"/>
  <polyline points="3,7 12,13 21,7"/>
</svg>
</span>Contact</a></li>
   {isAuthenticated?<li className='rounded-lg text-white py-2 pl-2  hover:bg-gray-700  '><button onClick={()=>logout()} className='flex items-center gap-5 text-lg '><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out">
  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="white"/>
  <polyline points="16 17 21 12 16 7" stroke="white"/>
  <line x1="21" y1="12" x2="9" y2="12" stroke="white" />
</svg>

</span>Logout</button></li>  : <li className='rounded-lg text-white py-2 pl-2  hover:bg-gray-700  '><button onClick={()=>loginWithRedirect()} className='flex items-center gap-5 text-lg '><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
  <polyline points="10 17 15 12 10 7"/>
  <line x1="15" y1="12" x2="3" y2="12"/>
</svg>

</span>Login</button></li>}
    </ul>
     <div className="p-4 text-center text-lg font-semibold   w-full bottom-4 absolute text-gray-100 font-mono tracking-wide ">
      <div className='hover:scale-105 animate-pulse ' title="v1.0.2">
    <span className='text-green-400'>&lt;</span>
          Lock
          <span className='text-green-400'>sy/&gt;</span>
          
         
  </div>
  </div>
  </div>
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
