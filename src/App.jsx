import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './containers/Home'
import RegistrarLecturaContainer from './containers/RegistrarLecturaContainer'
import MedicionesContainer from './containers/MedicionesContainer'
import NavBar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registrar' element={<RegistrarLecturaContainer />} />
          <Route path='/mediciones' element={<MedicionesContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
