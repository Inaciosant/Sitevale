
import './App.css'
import SobreEmpreendimento from './components/Empreendimento'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import Galeria from './components/Galeria'
import Header from './components/Header'
import Mapa from './components/Mapa'
import Navbar from './components/Navbar'
import StatusObra from './components/Statusdaobra'

function App() {

  return (
    <>
    <Navbar/>
    <Header/>
    <Galeria/>
    <SobreEmpreendimento/>
    <StatusObra/>
    <Mapa/>
    <Formulario/>
    <Footer/>
   
    </>
  )
}

export default App
