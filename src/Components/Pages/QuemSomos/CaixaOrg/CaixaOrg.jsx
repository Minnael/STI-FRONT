import "./styles.css"
import Modal from 'react-modal';
import { FaRegWindowClose } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import organograma from "../../../../assets/organograma.svg"


function CaixaOrg({isOpen, onClose }){
   return(
      <Modal className="caixa-org" overlayClassName="overlay-org" isOpen={isOpen} onRequestClose={onClose}>
         <div className="titulo-exit-org">
            <h1>Organograma</h1>
            <FaRegWindowClose className="exit-button-org" onClick={onClose}/>
         </div>
         <p className="texto">
            Esta é a estrutura administrativa da Superintendência de Tecnologia da Informação.<br/>
            Informações baseadas no <a className="link" href="https://sigrh.ufrn.br/sigrh/public/colegiados/anexos/regimento_interno_reitoria.pdf">Regimento Interno da Reitoria. <BsBoxArrowUpRight className="boxe-icon"/></a>
         </p>
         <img src={organograma} alt="organograma"/>
      </Modal>
   )
}

export default CaixaOrg