import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Contacto from './components/pages/Contacto';
import Empresa from './components/pages/Empresa';
import Home from './components/pages/Home';


function App() {



  return (
    <Router>

          <Navbar/>

          <Routes>

              <Route path="/"  element={<Home/>} />

              <Route path ="/empresa" element ={<Empresa />} />

              <Route path="/contacto" element={<Contacto/>}/>

          </Routes>

    </Router>

  )
}

export default App;
