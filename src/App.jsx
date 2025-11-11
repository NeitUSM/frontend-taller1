import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './containers/Home'
import RegistrarLecturaContainer from './containers/RegistrarLecturaContainer'
import NavBar from './components/NavBar'
import MedicionesContainer from './containers/MedicionesContainer'

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
