import "./styles.css"
import Descricao from "./Descricao/Descricao"

function QueFazemos(){
   return(
      <div>
         <Descricao/>
         <div className="container-solucoes">
            <div className="solucoes">
               <h2>Soluções em sistemas</h2>
            </div>
         </div>
         <div className="infraestrutura-redes"></div>
      </div>
   )
}

export default QueFazemos