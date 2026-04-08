import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Feauture from "./pages/Feauture"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Addcourse from "./pages/Addcourse"

const App = () => {

  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/f" element={<Feauture/>}></Route>
     <Route path="/add-course" element={<Addcourse/>}></Route>
  </Routes>
  
  <Footer/>
  </BrowserRouter>
  
  
  </>
}

export default App