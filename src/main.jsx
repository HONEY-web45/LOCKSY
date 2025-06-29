import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import AuthGuard from './component/Authguard.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Auth0Provider
    domain="dev-t4avb1ceyth58eqc.us.auth0.com"
    clientId="HCZvgLEvNpSKVgKP3JLekyxBHRBQG9v0"
    authorizationParams={{
      redirect_uri:`${window.location.origin}/pass`
    }}
    >
  <AuthGuard>
    <Navbar/>

     <App />
    <Footer/>
    </AuthGuard>
  </Auth0Provider>
  </StrictMode>,
)





