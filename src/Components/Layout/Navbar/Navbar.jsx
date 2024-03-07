import './styles.css'
import logo from '../../../assets/sti-logo.png'

function Navbar(){
   return (
      <nav className='navbar'>
         <img src={logo} alt="STI"/>
            <div className='container-navbar'>
               <ul className='list'>
                  <li className='item'>Início</li>
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