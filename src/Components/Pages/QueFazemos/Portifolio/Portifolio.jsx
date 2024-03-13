import "./styles.css"

import sinfolab from "../../../../assets/portifolio/sinfolab.png"
import sigprojetos from "../../../../assets/portifolio/sigprojetos.png"
import sigcompras from "../../../../assets/portifolio/sigcompras.png"
import archanjo from "../../../../assets/portifolio/archanjo.png"
import gestao from "../../../../assets/portifolio/gestao.png"
import cmdb from "../../../../assets/portifolio/cmdb.png"

import bonita from "../../../../assets/portifolio/bonita.png"
import redesgas from "../../../../assets/portifolio/redesgas.png"
import eduroam from "../../../../assets/portifolio/eduroam.png"
import chico from "../../../../assets/portifolio/chico.png"
import docentes from "../../../../assets/portifolio/docentes.png"
import memo from "../../../../assets/portifolio/memo.png"

import servicos from "../../../../assets/portifolio/servicos.png"
import portaluf from "../../../../assets/portifolio/portaluf.png"
import dados from "../../../../assets/portifolio/dados.png"
import sigaamobile from "../../../../assets/portifolio/sigaamobile.png"
import reuse from "../../../../assets/portifolio/reuse.png"
import apisistemas from "../../../../assets/portifolio/apisistemas.png"


function Portifolio(){
   const imagens = [sinfolab, sigprojetos, sigcompras, archanjo, gestao, cmdb, bonita, redesgas, eduroam, chico, docentes, memo, servicos, portaluf, dados, sigaamobile, reuse, apisistemas]
   const titulos = ['SINFOlab ', 'SIGProjetos', 'SIGCompras', 'Archanjo', 'Gestão de Itendidade', 'CMDB', 'BONITA (BPMS)', 'REDESGAS', 'Eduroam', 'Projeto CHICÓ', 'Docentes', 'Memo', 'Serviços', 'Portal da UFRN', 'Dados Abertos', 'SIGAA Mobile', 'Reuse', 'API.Sistemas']

   return ( 
      <div className="container-portifolio">
         <h1>Portfólio</h1>
         <div className="portifolio">  
            {imagens.map((imagem, index) => (  
               <div className="card-container">
                  <div
                     key={index}
                     className="image"
                     style={{ backgroundImage: `url(${imagem})` }}
                  >
                     <div className="back"></div>
                     <p className="titulo">{titulos[index]}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Portifolio