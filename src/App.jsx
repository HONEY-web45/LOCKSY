

import Manager from './component/Manager'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'
import { BrowserRouter as Router, Route, Routes}  from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import ContactPage from './component/Contact'
import PrivateRoute from './component/Private'
import { useState } from 'react'

function App() {
const [videoStarted, setVideoStarted] = useState(false)


  return (
    <div className='relative bg-black/40' >
         <link rel="preload" as="image" href="/public/fallback.png" />
    <link rel="preload" as="video" href="/bg.mp4" type="video/mp4" />

    <video
  autoPlay
  loop
  onPlay={()=>setTimeout(() => {
    setVideoStarted(true)
  }, 400)}
  muted
  playsInline
  className="fixed top-0 left-0 w-full h-full animate-fadeIn object-cover z-[-1]"
>
  <source src="b6.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
{/* <img src="b5.gif" alt="" className='fixed top-0 left-0 w-full h-full object-cover z-[-1]'  /> */}
{!videoStarted ? 
  <div className="fixed inset-0 flex items-center justify-center     z-10">
     <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-red-500"></div>
  </div>
  </div>:


<Router>
  <Navbar />
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
 
  <Route path="/pass" element={ <PrivateRoute><Manager/></PrivateRoute>}/>
  <Route path="/contact" element={<ContactPage/>}/>
  
  
</Routes>
<Footer />
</Router>


}

 
    </div>
  )
}

export default App
