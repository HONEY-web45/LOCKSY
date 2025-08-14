
import Footer from './component/Footer'
import Manager from './component/Manager'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Route, Routes}  from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import ContactPage from './component/Contact'
import PrivateRoute from './component/Private'
function App() {



  return (
    <div className='relative bg-black/40' >
    <video
  autoPlay
  loop
  poster='/fallback.png'
  muted
  playsInline
  className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
>
  <source src="b6.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
{/* <img src="b5.gif" alt="" className='fixed top-0 left-0 w-full h-full object-cover z-[-1]'  /> */}
<Router>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
 
  <Route path="/pass" element={ <PrivateRoute><Manager/></PrivateRoute>}/>
  <Route path="/contact" element={<ContactPage/>}/>
  
  
</Routes>

</Router>




 
    </div>
  )
}

export default App
