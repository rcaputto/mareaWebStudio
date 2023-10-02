import './App.css';
import Principal from './Pages/Principal';
import {BrowserRouter as Router  , Routes, Route} from 'react-router-dom'
import QuienesSomos from './Pages/QuienesSomos';
import Blog from './Pages/Blog/Blog';

import MainBlog from './Pages/Blog/MainBlog';
import DesarrolloWeb from './Pages/Servicios/DesarrolloWeb';
import MarketingDigital from './Pages/Servicios/MarketingDigital';
import LandingPage from './Pages/Servicios/LandingPage';
import TiendaEnLinea from './Pages/Servicios/TiendaEnLinea';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Principal/>}/>
          
          <Route path='/nosotros' element = {<QuienesSomos/>}/>
          <Route path='/blog' element = {<MainBlog/>}/>
          <Route path='/blog/:id' element = {<Blog/>}/>
          <Route path='/servicios/desarrollo-web' element = {<DesarrolloWeb/> }/>
          <Route path='/servicios/marketing-digital' element = {<MarketingDigital/> }/>
          <Route path='/servicios/landing-page' element = {<LandingPage /> }/>
          <Route path='/servicios/tienda-en-linea' element = {<TiendaEnLinea /> }/>
        </Routes>
      </Router>
    </>
  )
}

export default App
