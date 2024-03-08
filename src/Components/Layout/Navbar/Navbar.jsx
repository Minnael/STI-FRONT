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
      <nav className={fix ? 'navbar small' : 'navbar'}>
         <img src={logo} alt="STI"/>
            <div className='container-navbar'>
               <ul className='list'>
                  <Link className='item' to="quem-somos" smooth={true} offset={-70}>Início</Link>
                  <li className='item'>Quem somos</li>
                  <li className='item'>O que fazemos</li>
                  <li className='item'>Oportunidades</li>
                  <button className='item'>Fale conosco</button>
               </ul>
            </div>
      </nav>
   )
}

export default Navbar