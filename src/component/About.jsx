import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-800  text-white flex flex-col py-10 text-center items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-4"> <span>About </span>
         <span className='text-green-400'>&lt;</span>
         Lock
          <span className='text-green-400'>sy/&gt;</span>
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center">
        Locksy is your personal password manager, designed to securely store and manage your credentials with ease. 
        Our platform ensures safety, efficiency, and accessibility, allowing users to safeguard their important login details.
      </p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Why Choose Locksy?</h2>
        <ul className="mt-4 text-gray-400 space-y-2">
          <li>✅ Secure password storage with encryption</li>
          <li>✅ Easy access across devices</li>
          <li>✅ Simple & intuitive interface</li>
          <li>✅ Fast password management</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-center">Meet the Creator</h2>
        <p className="text-gray-400 mt-2">Locksy was built with ❤️ by Honey, with the vision to make password management effortless and secure for everyone.</p>
      </div>
    </div>
  );
};

export default About;
