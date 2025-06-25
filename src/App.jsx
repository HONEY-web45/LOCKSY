
import Footer from './component/Footer'
import Manager from './component/Manager'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Route, Routes}  from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import ContactPage from './component/Contact'
import Login from './component/Login'
function App() {



  return (
    <>
<Router>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/pass" element={<Manager/>}/>
  <Route path="/contact" element={<ContactPage/>}/>
  <Route path="/login" element={<Login/>}/>
  
</Routes>

</Router>




 
    </>
  )
}

export default App
