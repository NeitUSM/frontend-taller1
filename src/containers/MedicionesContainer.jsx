import React, { useEffect, useRef, useState } from 'react'
import { Toast } from 'primereact/toast';
import { getRegistros } from '../services/registroLectura'
import { deleteRegistro } from '../services/registroLectura'
import MedicionesComponent from '../components/MedicionesComponent';

function MedicionesContainer() {
    const toast = useRef(null);
    const [registers, setRegisters] = useState([]);

    const showToast = () => {
        toast.current.show({ severity: 'info', summary: 'Registro eliminado correctamente' });
    }
    useEffect( () => {
        const data = getRegistros()
        setRegisters(data)
    }, [])

    const removeReading = (lectura) => {
        deleteRegistro(lectura)
        setRegisters(getRegistros())
        showToast()
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className='flex justify-content-center'>
                    <Toast ref={toast}></Toast>
                    <MedicionesComponent registers={registers} removeLectura={removeReading}></MedicionesComponent>
                </div>
            </div>
        </div>
    )
}

export default MedicionesContainer
