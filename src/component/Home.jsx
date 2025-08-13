import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const HomePage = () => {
  const {user, loginWithRedirect,isAuthenticated, isLoading,logout  } = useAuth0();
 
 useLayoutEffect(() => {
 const cont=gsap.context(()=>{
const tl=gsap.timeline()

tl.from(".q",{
  rotateX:360,
  opacity:0,
  duration:1,
  scale:0,
 

})
.from(".w",{
  x:-50,
  opacity:0,
duration:.3
},)
.from(".e",{
  x:-50,
  opacity:0,
  duration:.5})
.from(".r",{
  x:50,
  opacity:0,
  duration:.5},"-=.5")
 })
 return()=>cont.revert()
 }, [])
  

   
  return (
    <div className="min-h-[80vh] bg-black/20 text-white text-center gs flex flex-col items-center justify-center px-4 " >
      
      <h1 className="text-4xl font-bold mb-4 text-slate-200 text-center q" id="gs"><span>Welcome to </span>
         

          <span className='text-green-400 '>&lt;</span>
          Lock
          <span className='text-green-400 '>sy/&gt;</span>

        
      </h1>
      <p className="text-lg text-slate-200 mb-6 w">Your Own Password Manager to Store & Secure Credentials.</p>

      <div className="flex space-x-4">
      {isAuthenticated? <a href="/pass"><button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md e" >
         start here
        </button></a> : <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md e" onClick={() => loginWithRedirect()}>
          start here
        </button>}
        
        <a href="/about" className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md r">
          About Us
        </a>
      </div>
    </div>
  );
};

export default HomePage;
