import "./styles.css"
import { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import CaixaOrg from "./CaixaOrg/CaixaOrg.jsx";
import { RiOrganizationChart } from "react-icons/ri";
import CaixaEquipe from "./CaixaEquipe/CaixaEquipe.jsx";

function QuemSomos(){
   const [caixaEquipe, setCaixaEquipe] = useState(false);
   const [caixaOrg, setCaixaOrg] = useState(false);

   useEffect(() => {
      if (caixaEquipe || caixaOrg) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
      return () => {
        document.body.classList.remove('no-scroll');
      };
   }, [caixaEquipe, caixaOrg]);

   return (
      <>
         <div className="  container-quem-somos">
            <h1 id="QuemSomos" >Quem Somos</h1>
            <div className="descricao">
               <p>A Superintendência de Tecnologia da Informação - STI é um órgão diretamente subordinado à Reitoria da Universidade Federal do Rio Grande do Norte. Responsável por planejar, desenvolver e administrar os sistemas computacionais e a infraestrutura de rede da UFRN, a STI elabora, em conjunto com os demais órgãos administrativos, toda a política de informática da Instituição.</p>
               <p>Toda a estrutura da STI e os esforços de seus colaboradores são voltados para a disponibilização de serviços de qualidade a todos que utilizam os sistemas SIG, oferecendo recursos modernos e adequados à solução de problemas e transformando, assim, a rotina da comunidade acadêmica.</p>
               <div className="linha"></div>
               <div className="container-icones">
                  <div className="equipes">
                     <FaUserFriends className="icone-equipe" onClick={() => setCaixaEquipe(true)}/>  
                     <span className="span" onClick={() => setCaixaEquipe(true)}>Equipes</span>
                     <CaixaEquipe isOpen={caixaEquipe} onClose={() => setCaixaEquipe(false)}/>
                  </div>
                  <div className="organograma">
                     <RiOrganizationChart className="icone-org" onClick={() => setCaixaOrg(true)}/>
                     <span className="span" onClick={() => setCaixaOrg(true)}>Organograma</span>
                     <CaixaOrg isOpen={caixaOrg} onClose={() => setCaixaOrg(false)}/>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default QuemSomos