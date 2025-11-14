import { NavLink } from 'react-router-dom'
import { Toolbar } from 'primereact/toolbar'

function NavBar() {
    const startContent = <h3>SanQuinta</h3>
    const endContent = (
        <>
            <NavLink className='px-3' to='/home'>Home</NavLink>
            <NavLink className='px-3' to='/'>Registro</NavLink>
            <NavLink className='px-3' to='/mediciones'>Mediciones Existentes</NavLink>
        </>
    )
    return (
        <div>
            <Toolbar start={startContent} end={endContent} />
        </div>
    )
}

export default NavBar
