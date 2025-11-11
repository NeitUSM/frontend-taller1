import React from 'react'
import { Link } from 'react-router-dom'
import { Toolbar } from 'primereact/toolbar'

function NavBar() {
    const startContent = <h3>La Luuuz</h3>
    const endContent = (
        <>
            <Link to='/'>Home</Link>
            <Link to='/registrar'>Registro</Link>
            <Link to='/mediciones'>Mediciones</Link>
        </>
    )
    return (
        <div>
            <Toolbar start={startContent} end={endContent}/>
        </div>
    )
}

export default NavBar
