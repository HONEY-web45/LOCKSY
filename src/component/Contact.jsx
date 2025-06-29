import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-10 bg-gray-800 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
   
      <div className="mb-4 text-gray-400 text-center">
        <p>📧 Email: nitik2643@gmail.com</p>
     
       
      </div>
      <p className="text-lg text-gray-300 max-w-xl text-center">
        Got questions or need assistance with Locksy? Reach out to us!
      </p>

      
      <form className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-400">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          ></textarea>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full">
          Send Message
        </button>
      </form>

     
    </div>
  );
};

export default ContactPage;
