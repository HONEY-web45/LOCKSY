import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
  <App />
</GoogleOAuthProvider>
    <Footer/>
  </StrictMode>,
)





