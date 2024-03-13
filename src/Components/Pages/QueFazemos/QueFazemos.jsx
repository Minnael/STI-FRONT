import "./styles.css"
import Descricao from "./Descricao/Descricao"
import Portifolio from "./Portifolio/Portifolio"
import Cooperacao from "./Cooperacao/Cooperacao"
import Infraestrutura from "./Infraestrutura/Infraestrutura"


function QueFazemos(){
   return(
      <div>
         <Descricao/>
         <div className="container-solucoes">
               <h2>Soluções em sistemas</h2>
               <div className="linha-vertical"></div>
               <p>
                  Conheça nossos Sistemas Integrados de Gestão (SIG), responsáveis por 
                  proporcionar modernização e agilidade à UFRN e diversas instituições federais.<br/>
                  
                  <br/>Nossos Sistemas Integrados de Gestão (SIG) proporcionam segurança e
                  agilidade aos processos administrativos, acadêmicos e de recursos humanos
                  dentro da UFRN e de diversas instituições federais, que possuem acordo de
                  cooperação conosco.
               </p>
         </div>
         <Infraestrutura/>
         <Portifolio/>
         <Cooperacao/>
      </div>
   )
}

export default QueFazemos