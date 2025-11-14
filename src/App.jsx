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
          <Route path='/' element={<RegistrarLecturaContainer />} />
          <Route path='/mediciones' element={<MedicionesContainer />} />
          <Route path='/home' element={<Home></Home>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
