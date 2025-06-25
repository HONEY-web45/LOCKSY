import React from 'react'
import { GoogleLogin } from '@react-oauth/google';



const Login = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4'>
      <GoogleLogin
  onSuccess={(credentialResponse) => {
    console.log(credentialResponse);
    // Send token to backend for verification
  }}
  onError={() => {
    console.log("Login Failed");
  }}
/>
    </div>
  )
}

export default Login
