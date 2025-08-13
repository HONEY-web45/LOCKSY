import React, { useLayoutEffect,useEffect, useRef } from "react";
import gsap from "gsap";

const About = () => {
  // useEffect(() => {
  //  gsap.from(".a",{
  //   y:100,
  //   opacity:0,
  //   duration:1
  //  })
  // }, [])
  const containerRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from("h1", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      })
      .from(".a", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")
      .from(".b", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2
      }, "-=0.5")
      .from("li", {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.4")
      .from(".c", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2
      }, "-=0.4")
      .from(".d",{
        x:-50,
        opacity:0,
duration:.6
      },"-=.2");
    }, containerRef);

    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={containerRef} className="min-h-screen bg-black/40 text-white flex flex-col py-10 text-center items-center justify-center px-6 ">
      <h1 className="text-4xl font-bold mb-4 "> <span>About </span>
         <span className='text-green-400 '>&lt;</span>
         Lock
          <span className='text-green-400'>sy/&gt;</span>
      </h1>
      <p className="text-lg  max-w-2xl text-center a">
        Locksy is your personal password manager, designed to securely store and manage your credentials with ease. 
        Our platform ensures safety, efficiency, and accessibility, allowing users to safeguard their important login details.
      </p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold b">Why Choose Locksy?</h2>
        <ul className="mt-4 text-gray-200 space-y-2">
          <li>✅ Secure password storage with encryption</li>
          <li>✅ Easy access across devices</li>
          <li>✅ Simple & intuitive interface</li>
          <li>✅ Fast password management</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-center c">Meet the Creator</h2>
        <p className="text-gray-300 mt-2 d">Locksy was built with ❤️ by Honey, with the vision to make password management effortless and secure for everyone.</p>
      </div>
    </div>
  );
};

export default About;
