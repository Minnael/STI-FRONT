import "./styles.css"
import { FaUserFriends } from "react-icons/fa";

function QuemSomos(){
   return (
      <>
         <div className="container-quem-somos">
            <h1 id="QuemSomos" >Quem Somos</h1>
            <div className="descricao">
               <p>A Superintendência de Tecnologia da Informação - STI é um órgão diretamente subordinado à Reitoria da Universidade Federal do Rio Grande do Norte. Responsável por planejar, desenvolver e administrar os sistemas computacionais e a infraestrutura de rede da UFRN, a STI elabora, em conjunto com os demais órgãos administrativos, toda a política de informática da Instituição.</p>
               <p>Toda a estrutura da STI e os esforços de seus colaboradores são voltados para a disponibilização de serviços de qualidade a todos que utilizam os sistemas SIG, oferecendo recursos modernos e adequados à solução de problemas e transformando, assim, a rotina da comunidade acadêmica.</p>
               <FaUserFriends />
            </div>
         </div>
      </>
   )
}

export default QuemSomos