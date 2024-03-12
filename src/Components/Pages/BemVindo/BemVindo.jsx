import './styles.css'
import Seta from "../../../assets/sti-seta.png"
import { Link, animateScroll as scroll } from "react-scroll";

function BemVindo(){
   return ( 
      
      <div id="BemVindo" duration={50} className='container-bem-vindo'>
         <div className='bem-vindo'>
            <h2>Bem-vindo(a)!</h2>  
            <p>Esta é a página oficial da Superintendência de Tecnologia da Informação da UFRN! Navegue abaixo para saber mais sobre as atividades desenvolvidas pela STI.</p>
            <Link to={"QuemSomos"} offset={-210}><img className="seta" src={Seta} alt="seta"/></Link>
         </div>
      </div>
   )
}

export default BemVindo