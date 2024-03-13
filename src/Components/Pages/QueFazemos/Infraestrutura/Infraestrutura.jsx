import "./styles.css"
import Card from "./Card/Card"
import sigaa from "../../../../assets/sigaa.png"
import sipac from "../../../../assets/sipac.png"
import sigrh from "../../../../assets/sigrh.png"
import redes from "../../../../assets/redes.png"

function Infraestrutura(){
   return (
      <> 
         <div className="card-infra">
            <div className="cards">
               <Card logo={sigaa} titulo="ACADÊMICO" descricao={<span>O<strong> Sistema Integrado de Gestão de Atividades Acadêmicas</strong> é um pacote de soluções modernas para os procedimentos relacionados à área acadêmica da instituição, permitindo o gerenciamento das informações e atividades em todos os níveis de ensino.</span>}/>
               <Card logo={sipac} titulo="ADMINISTRATIVO" descricao={<span>O<strong> Sistema Integrado de Patrimônio, Administração e Contratos</strong> oferece um vasto conjunto de ações para a gestão das unidades da instituição, integrando de maneira otimizada todas as operações e procedimentos gerenciais, tornando mais fáceis, ágeis e eficientes os processos burocráticos.</span>}/>
               <Card logo={sigrh} titulo="PESSOAS" descricao={<span>O<strong> Sistema Integrado de Gestão de Planejamento e de Recursos Humanos</strong> permite o cadastro, o gerenciamento e a consulta das principais informações funcionais dos servidores da instituição, tornando mais transparentes e relevantes as pesquisas e os dados sobre o nosso quadro pessoal.</span>}/>
            </div>
         </div>
         <div className="container-redes">
            <div className="redes">
               <img src={redes}/>
               <div className="descricao-redes">
                  <h2>Infraestrutura e Redes</h2>
                  <p>
                     A STI é responsável pela instalação e manutenção de todos os ativos de rede (como roteadores e 
                     access points) e cabeamento. Também gerenciar o sistema de datacenter, storage e máquinas
                     virtuais, além de prevenir e solucionar qualquer incidente relacionado à segurança da informação na
                     instituição. Além disso, a Superintendência instala, configura e dá suporte a uma vasta gama de
                     serviços, como os servidores de e-mail e web e o sistema de comunicação por voz que trafega sobre a
                     rede IP da Instituição.
                  </p>
               </div>
            </div>
         </div>
      </>
   )
}

export default Infraestrutura