import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const HomePage = () => {
   const {user, loginWithRedirect,isAuthenticated, isLoading,logout  } = useAuth0();
   
   
  return (
    <div className="min-h-screen bg-gray-800 text-white text-center flex flex-col items-center justify-center px-4" >
      <h1 className="text-4xl font-bold mb-4 text-slate-200 text-center"><span>Welcome to </span>
         

          <span className='text-green-400'>&lt;</span>
          Lock
          <span className='text-green-400'>sy/&gt;</span>

        
      </h1>
      <p className="text-lg text-slate-200 mb-6">Your Own Password Manager to Store & Secure Credentials.</p>

      <div className="flex space-x-4">
      {isAuthenticated? <a href="/pass"><button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md" >
         start here
        </button></a> : <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md" onClick={() => loginWithRedirect()}>
          start here
        </button>}
        
        <a href="/about" className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md">
          About Us
        </a>
      </div>
    </div>
  );
};

export default HomePage;
