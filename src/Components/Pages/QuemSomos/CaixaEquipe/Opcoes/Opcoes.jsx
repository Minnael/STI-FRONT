import "./styles.css"

const opcoes = [
  {
    nome: 'Superintendente',
    valor: (
      <div className="super">
        <p className="nome">Marcos César Madruga Alves Pinheiro</p>
        <p>Email: <a href="mailto:superintendente@sti.ufrn.br">superintendente@sti.ufrn.br</a></p>
        <p className="agenda"><a href="https://sti.ufrn.br/quem-somos/agenda-superintendente">Visualizar agenda do Superintendente.</a></p>
        <p className="super-adjunto"><b>Superintendente Adjunto</b><br/>André Medeiros Dantas</p>
        <p className="email-andre">Email: <a href="mailto:superintendente.adj@sti.ufrn.br">superintendente.adj@sti.ufrn.br</a></p>
        <p className="agenda"><a href="https://sti.ufrn.br/quem-somos/agenda-superintendente-adjunto">Visualizar agenda do Superintendente Adjunto.</a></p>
      </div>
    ),
  },
  { nome: 'Diretor de Infraestrutura',
  valor: (
    <>
      Edivaldo Cavalcante de Albuquerque Junior <br />
      E-mail: diretor-redes@sti.ufrn.br
    </>
  ) 
  },
  { nome: 'Diretora de Sistemas', 
  valor: (
    <>
      Clarissa Lorena Alves Coelho Lins <br/>
      E-mail: diretor-sistemas@sti.ufrn.br
    </> 
  )
  },
  { nome: 'SIGAA', 
  valor: (
    <>
      O SIGAA informatiza os procedimentos da área acadêmica através dos módulos de: graduação,
      pós-graduação (stricto e lato sensu), ensino técnico, ensino médio e infantil, submissão e controle
      de projetos e bolsistas de pesquisa, submissão e controle de ações de extensão, submissão e
      controle dos projetos de ensino (monitoria e inovações), registro e relatórios da produção
      acadêmica dos docentes, atividades de ensino a distância e um ambiente virtual de aprendizado
      denominado Turma Virtual. Também disponibiliza portais específicos para: reitoria, professores,
      alunos, tutores de ensino a distância, coordenações lato sensu, stricto sensu e de graduação e
      comissões de avaliação (institucional e docente).
    </>
  ) },
];

export default opcoes;