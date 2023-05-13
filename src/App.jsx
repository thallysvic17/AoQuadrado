import { GlobalStyle } from './reset'
import Header from './Components/Header/index'
import Carousel from './Components/Carousel/index'
import QuemSomos from './Components/QuemSomos/index'
import Portifolio from './Components/Portifolio/index'
import ProjetoOnline from './Components/ProjetoOnline/index'
import Contatos from './Components/Contato/index'






function App() {
 

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Carousel/> 
      <QuemSomos/>
      <Portifolio/>
      <ProjetoOnline/>
      <Contatos/>
    </>
  )
}

export default App

