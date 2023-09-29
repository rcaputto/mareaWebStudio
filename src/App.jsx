import './App.css';
import Principal from './Pages/Principal';
import {BrowserRouter as Router  , Routes, Route} from 'react-router-dom'
import QuienesSomos from './Pages/QuienesSomos';
import Blog from './Pages/Blog/Blog';

import MainBlog from './Pages/Blog/MainBlog';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Principal/>}/>
          <Route path='/nosotros' element = {<QuienesSomos/>}/>
          <Route path='/blog' element = {<MainBlog/>}/>
          <Route path='/blog/:id' element = {<Blog/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
