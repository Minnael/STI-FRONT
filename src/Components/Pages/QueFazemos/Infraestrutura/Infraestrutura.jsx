import "./styles.css"
import Card from "../Card/Card"
import sigaa from "../../../../assets/sigaa.png"
import sipac from "../../../../assets/sipac.png"
import sigrh from "../../../../assets/sigrh.png"

function Infraestrutura(){
   return (
      <> 
         <div className="card-infra">
            <div className="cards">
               <Card logo={sigaa} titulo="ACADÊMICO" descricao={<span>O<strong> Sistema Integrado de Gestão de Atividades Acadêmicas</strong> é um pacote de soluções modernas para os procedimentos relacionados à área acadêmica da instituição, permitindo o gerenciamento das informações e atividades em todos os níveis de ensino.</span>}/>
               <Card logo={sipac} titulo="ADMINISTRATIVO" descricao={<span>O<strong> Sistema Integrado de Patrimônio, Administração e Contratos</strong> oferece um vasto conjunto de ações para a gestão das unidades da instituição, integrando de maneira otimizada todas as operações e procedimentos gerenciais, tornando mais fáceis, ágeis e eficientes os processos burocráticos.</span>}/>
               <Card logo={sigrh} titulo="PESSOAS" descricao={<span>O<strong> Sistema Integrado de Gestão de Planejamento e de Recursos Humanos</strong> permite o cadastro, o gerenciamento e a consulta das principais informações funcionais dos servidores da instituição, tornando mais transparentes e relevantes as pesquisas e os dados sobre o nosso quadro pessoal.</span>}/>
            </div>
            <div className="infraestrutura-redes"></div>
         </div>
      </>
   )
}

export default Infraestrutura