import "./styles.css";
import Modal from 'react-modal';
import { useState } from "react";
import opcoes from "./Opcoes/Opcoes";
import { FaRegWindowClose } from "react-icons/fa";

Modal.setAppElement('#root'); 


const CaixaEquipe = ({ isOpen, onClose }) => {

  const [opcaoSelecionada, setOpcaoSelecionada] = useState(opcoes[0].nome);
  const handleChange = (event) => {
    setOpcaoSelecionada(event.target.value);
  };

  return (
    <Modal className="caixa-equipe" overlayClassName="overlay" isOpen={isOpen} onRequestClose={onClose}>
      <div className="titulo-exit">
        <h1>Equipes</h1>
        <FaRegWindowClose className="exit-button" onClick={onClose}/>
      </div>
      <select className="select" onChange={handleChange} value={opcaoSelecionada}>
          {opcoes.map((option) => (
            <option key={option.nome}>{option.nome}</option>
      ))}
      </select>
      {opcaoSelecionada && (
        <p>{opcoes.find((opcao) => opcao.nome === opcaoSelecionada)?.valor}</p>
      )}
    </Modal>
  );
};

export default CaixaEquipe