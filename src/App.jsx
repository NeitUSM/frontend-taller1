import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './containers/Home'
import RegistrarLecturaContainer from './containers/RegistrarLecturaContainer'
import NavBar from './components/NavBar'
import MedicionesContainer from './containers/MedicionesContainer'

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/registrar' element={<RegistrarLecturaContainer/>}/>
        <Route path='/mediciones' element={<MedicionesContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
