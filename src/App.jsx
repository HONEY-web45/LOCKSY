
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
    <>
<Router>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
 
  <Route path="/pass" element={ <PrivateRoute><Manager/></PrivateRoute>}/>
  <Route path="/contact" element={<ContactPage/>}/>
  
  
</Routes>

</Router>




 
    </>
  )
}

export default App
