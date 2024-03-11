import "./styles.css";
import Modal from 'react-modal';
import { FaRegWindowClose } from "react-icons/fa";


Modal.setAppElement('#root'); 

const CaixaEquipe = ({ isOpen, onClose }) => {
   return (
     <Modal className="caixa-equipe" overlayClassName="overlay" isOpen={isOpen} onRequestClose={onClose}>
      <div className="titulo-exit">
        <h1>Equipes</h1>
        <FaRegWindowClose className="exit-button" onClick={onClose}/>
      </div>
      <select></select>
     </Modal>
   );
 };

export default CaixaEquipe