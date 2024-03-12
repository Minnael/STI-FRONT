import "./styles.css"
import { FaCode } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";


function Descricao(){
   return (
      <>
         <div className="container-que-fazemos">
            <h2 id="QueFazemos" >O que fazemos</h2>
               <div className="descricao-que-fazemos">
                  <p className="descricao-sti">
                     A STI/UFRN é responsável por elaborar a política de informática da
                     Universidade, bem como por planejar, desenvolver e administrar de forma
                     eficaz todas as ações que dizem respeito aos sistemas computacionais, à
                     infraestrutura de rede e à segurança de informação da Instituição. Além
                     disso, atua diretamente na pesquisa, aplicação e incentivo à adoção de
                     novas tecnologias, não apenas pela própria Superintendência, mas também
                     pelos demais setores da UFRN.
                  </p>
                  
               <div className="tipos-servico">
                  <div>
                     <FaCode className="icon"/>
                     <p>Sistemas de Gestão</p>
                  </div>
                  <div>
                     <FaWifi className="icon"/>
                     <p>Infraestrutura e Redes</p>
                  </div>
                  <div>
                     <FaRegLightbulb className="icon"/>
                     <p>Pesquisa e Inovação</p>
                  </div>
                  <div>
                     <FaRegHandshake className="icon"/>
                     <p>Cooperação Técnica</p>
                  </div>
               </div>

               <div className="opcoes-que-fazemos">
                  <div className="carta">
                     <TfiMenuAlt className="icon-service"/>
                     <a href="https://wp-sites.info.ufrn.br/admin/sinfo/wp-content/uploads/sites/2/2020/06/Cat%C3%A1logo_de_servi%C3%A7os_de_TI.pdf">Carta de Serviços</a>
                  </div>
                  <div className="governanca">
                     <BsBank className="icon-service"/>
                     <a href="https://governanca.sti.ufrn.br/">Governança de TI</a>
                  </div>
                  <div className="transparencia">
                     <FaInfoCircle className="icon-service"/>
                     <p>Transparência</p>
                  </div> 
                  <div className="manuais">
                     <FaBook className="icon-service"/> 
                     <p>Manuais</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Descricao