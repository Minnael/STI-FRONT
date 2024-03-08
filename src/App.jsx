import './global.css'
import Navbar from "./Components/Layout/Navbar/Navbar.jsx"
import { Link, animateScroll as scroll } from "react-scroll";
import QuemSomos from "./Components/Pages/QuemSomos/QuemSomos.jsx"


function App() {

  return (
    <>
      <Navbar/>
      <QuemSomos/>
      <div className='x' id="quem-somos"></div>
      <div className='x' id="quem-somos"></div>
      <div className='x' id="quem-somos"></div>
      <div className='x' id="quem-somos"></div>
      <div className='x' id="quem-somos"></div>
    </>
  )
}

export default App
