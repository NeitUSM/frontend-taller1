import React, { useRef, useState } from 'react'
import PanelRegistrar from '../components/PanelRegistrar';
import { Toast } from 'primereact/toast';
import {createRegistro} from '../services/registroLectura'
import { useNavigate } from 'react-router-dom';

function RegistrarLecturaContainer() {
    const toast = useRef(null);
    const navigate = useNavigate();
    
    const showToast = (errores) => {
        const errorDetails = (
            <div>
                <ul>
                    {errores.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            </div>
        )
        toast.current.show({ severity: 'warn', summary: 'Existen conflictos en el registro', detail: errorDetails });
    }

    const register = (newRegister) => {
        createRegistro(newRegister)
        navigate("/mediciones")
    }
    return (
        <div className="container mt-4">
            <Toast ref={toast}></Toast>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className='flex justify-content-center'>
                        <PanelRegistrar showToast={showToast} register={register}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrarLecturaContainer
