import "./styles.css"
import { BsBoxArrowUpRight } from "react-icons/bs";

function Oportunidades(){
   return (
      <div className="container-oportunidades">
         <h2 id="Oportunidades">Oportunidades</h2>
         <div className="opcoes-oportunidades">
            <div class="opcoes-triangulo"></div>
            <div className="processos">
               <p>Processos seletivos</p>
            </div>
            <div className="licenciada">
               <div className="opcoes-linha"></div>
               <p>Seja uma licenciada<BsBoxArrowUpRight className="arrow-opcoes"/></p>
            </div>
         </div>
      </div>
   )
}

export default Oportunidades