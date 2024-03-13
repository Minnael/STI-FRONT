import "./styles.css"
import { FaPlus } from "react-icons/fa6";


function Card({titulo, logo, descricao}){
   return (
      <div className="container-card">
         <h3>{titulo}</h3>
         <div className="card">
            <img src={logo}/>
            {descricao}
         </div>
         <div className="triangle"></div>
         <FaPlus className="icon-mais"/>
      </div>
   )
}

export default Card