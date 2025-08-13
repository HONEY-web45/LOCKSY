import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const ContactPage = () => {
const cntref=useRef()
useLayoutEffect(() => {
 
  const cont=gsap.context(()=>{
  const tl=gsap.timeline()
  tl.from(".a",{
    y:50,
    opacity:0,
    duration:.5,
    
   
  })
  .from(".b",{
y:50,
opacity:0,
duration:.5,
  },"-=.2")
  .from(".c",{
    x:-50,
    opacity:0,
    duration:.5
  },"-=.2")
  .from(".d",{
    y:50,
    opacity:0,
duration:.5
  },"-=.3")
  },cntref)
  return () =>cont.revert()
}, [])

  return (
    <div ref={cntref} className="min-h-screen pt-10 bg-black/30  text-white flex flex-col items-center justify-center px-6 ">
    
      <h1 className="text-4xl font-bold mb-4 a">Contact Us</h1>
   
      <div className="mb-4  text-center b">
        <p>📧 Email: nitik2643@gmail.com</p>
     
       
      </div>
      <p className="text-lg text-gray-300 max-w-xl text-center c">
        Got questions or need assistance with Locksy? Reach out to us!
      </p>

      
      <form className="my-6 bg-black/50 backdrop-blur-md border border-white/30 p-6 rounded-lg shadow-md w-full max-w-md d">
        <div className="mb-4 space-y-1">
          <label className="block ">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 rounded-md bg-gray-700/20 border border-white/20 text-white"
          />
        </div>
        <div className="mb-4 space-y-1">
          <label className="block ">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded-md bg-gray-700/20 border border-white/20 text-white"
          />
        </div>
        <div className="mb-4 space-y-1">
          <label className="block ">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full p-2 rounded-md bg-gray-700/20 border border-white/20 text-white"
          ></textarea>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full" >
          Send Message
        </button>
      </form>

     </div>
   
  );
};

export default ContactPage;
