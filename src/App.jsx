import './global.css'
import Navbar from "./Components/Layout/Navbar/Navbar.jsx"
import BemVindo from "./Components/Pages/BemVindo/BemVindo.jsx"
import QuemSomos from './Components/Pages/QuemSomos/QuemSomos.jsx'
import QueFazemos from './Components/Pages/QueFazemos/QueFazemos.jsx'
import Oportunidades from './Components/Pages/Oportunidades/Oportunidades.jsx'

function App() {
  return (
    <>
      <div id="topo" duration={500}></div>
      <Navbar/>
      <BemVindo />
      <QuemSomos/>
      <QueFazemos/>
      <Oportunidades/>
    </>
  )
}

export default App
