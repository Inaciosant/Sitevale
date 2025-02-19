
import './App.css'
import SobreEmpreendimento from './components/Empreendimento'
import Footer from './components/Footer'
import Galeria from './components/Galeria'
import Header from './components/Header'
import Mapa from './components/Mapa'
import Navbar from './components/Navbar'
import StatusObra from './components/Statusdaobra'
import WhatsappButton from './components/Whatssapcontato'

function App() {

  return (
    <>
    <Navbar/>
    <Header/>
    <Galeria/>
    <SobreEmpreendimento/>
    <StatusObra/>
    <Mapa/>
    <WhatsappButton/>
    <Footer/>
   
    </>
  )
}

export default App
