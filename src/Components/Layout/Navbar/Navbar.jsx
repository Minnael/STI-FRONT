import './styles.css'
import { useState, useEffect } from 'react';
import logo from '../../../assets/sti-logo.png'
import { Link, animateScroll as scroll } from "react-scroll";


function Navbar(){
   const [fix, setFix] = useState(false);

   function scrolled() {
      if(window.scrollY == 0) {
         setFix(false);
    } else {
         setFix(true);
    }
  }

  useEffect(() => {
      window.addEventListener('scroll', scrolled);
      return () => {
         window.removeEventListener('scroll', scrolled);
      };
   }, []);

   return (
      <nav id="navbar" className={fix ? 'navbar small' : 'navbar'}>
         <Link to={"topo"} offset={-70}><img className="logo" src={logo} alt="STI"/></Link>
            <div className='container-navbar'>
               <ul className='list'>
                  <Link className='item' to={"topo"} offset={-70}>Início</Link>
                  <Link className='item' to={"QuemSomos"} offset={-100}>Quem somos</Link>
                  <li className='item'>O que fazemos</li>
                  <li className='item'>Oportunidades</li>
                  <button className='button'>Fale conosco</button>
               </ul>
            </div>
      </nav>
   )
}

export default Navbar