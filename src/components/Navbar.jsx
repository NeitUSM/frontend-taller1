import { NavLink } from 'react-router-dom'
import { Toolbar } from 'primereact/toolbar'

function NavBar() {
    const startContent = <h3>La Luuuz</h3>
    const endContent = (
        <>
            <NavLink className='px-3' to='/'>Home</NavLink>
            <NavLink className='px-3' to='/registrar'>Registro</NavLink>
            <NavLink className='px-3' to='/mediciones'>Mediciones</NavLink>
        </>
    )
    return (
        <div>
            <Toolbar start={startContent} end={endContent} />
        </div>
    )
}

export default NavBar
