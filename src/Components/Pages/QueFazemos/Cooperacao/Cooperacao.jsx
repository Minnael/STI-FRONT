import "./styles.css"
import brasil from "../../../../assets/brasil.png"
import { BsBoxArrowUpRight } from "react-icons/bs";

function Cooperacao(){
   return (
      <div className="container-coop">
         <div className="coop">
            <div className="descricao-coop">
               <div className="descricao-coop">
                  <h2>Cooperação técnica</h2>
                  <p>
                     Os sistemas desenvolvidos pela STI/UFRN
                     auxiliam na gestão e na rotina de organizações
                     de todo o país por meio do projeto de cooperação
                     técnica, que permite a transferência de tecnologia
                     e conhecimento entre a UFRN e outras
                     instituições e órgãos da administração pública. A
                     cooperação é realizada a partir da assinatura de
                     termos de cooperação técnica ou do
                     licenciamento de empresas da área de
                     tecnologia, habilitadas pela UFRN, para dar apoio
                     ao processo de implantação e manutenção dos
                     sistemas.
                  </p>
               </div>
               <button className="button-coop">Portal da Cooperação{<BsBoxArrowUpRight className="box-arrow"/>}</button>
            </div>
            <img src={brasil}/>
         </div>
      </div>
   )
}

export default Cooperacao