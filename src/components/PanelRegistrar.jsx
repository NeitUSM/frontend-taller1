import React, { useState } from 'react'
import { Panel } from 'primereact/panel'
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown';
import { Editor } from 'primereact/editor';
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { v4 as uuidv4 } from 'uuid';

function PanelRegistrar({ showToast = () => { }, register = () => { } }) {
    const medidores = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
    const [direccion, setDireccion] = useState(null);
    const [dateTime, setDateTime] = useState(null);
    const [medidor, setMedidor] = useState(null);
    const [valor, setValor] = useState(null);
    const [medida, setMedida] = useState('');

    const clearInputs = () => {
        setMedidor(null)
        setDireccion(null)
        setDateTime(null)
        setDireccion(null)
        setValor(null)
        setMedida('')
    }

    const handleClick = () => {
        const nuevosErrores = [];
        if (dateTime === null) {
            nuevosErrores.push("Debe ingresar la Fecha y Hora del registro");
        }

        if (medidor === null) {
            nuevosErrores.push("El medidor debe tener un valor válido");
        }

        if (direccion === null) {
            nuevosErrores.push("Debe ingresar la dirección");
        }

        if (valor === null) {
            nuevosErrores.push("Debe ingresar el valor del registro");
        }

        if (medida.trim() === '') {
            nuevosErrores.push("Debe ingresar la medida");
        }

        if (nuevosErrores.length != 0) {
            showToast(nuevosErrores)
            return;
        }
        register({id:uuidv4(), dateTime, medidor, direccion, valor, medida });
        clearInputs();
        return;
    }

    return (
        <Panel header="Registrar Lectura">
            <div className="mt-3 d-flex flex-column">
                <label htmlFor="calendar-12h" className="font-bold block mb-2">
                    Fecha y hora de la lectura
                </label>
                <Calendar value={dateTime} onChange={(e) => setDateTime(e.value)}
                    showTime hourFormat="24" />
            </div>
            <div className="mt-3 d-flex flex-column">
                <label htmlFor="calendar-12h" className="font-bold block mb-2">
                    Seleccione el número del medidor
                </label>
                <Dropdown value={medidor} onChange={(e) => setMedidor(e.value)} options={medidores}
                    optionLabel="medidor" placeholder="Medidores" className="w-full md:w-14rem" />
            </div>
            <div className="mt-3 d-flex flex-column">
                <label htmlFor="calendar-12h" className="font-bold block mb-2"> Dirección </label>
                <Editor value={direccion} onTextChange={(e) => setDireccion(e.htmlValue)}
                    style={{ height: '120px' }} />
            </div>
            <div className="mt-3 d-flex flex-column">
                <label htmlFor="calendar-12h" className="font-bold block mb-2">
                    Valor obtenido
                </label>
                <InputNumber min={0} max={500} id="valor" value={valor}
                    onValueChange={(e) => setValor(e.value)} />
            </div>
            {/* Tuve que agregar el zIndex porque la renderización del Editor bugeaba todo y no podia elegir en el groupbutton xD */}
            <div className="mt-3 d-flex justify-content-center align-items-center gap-5 mb-3"
                style={{ position: 'relative', zIndex: 5 }}>
                <div className="d-flex align-items-center">
                    <RadioButton
                        inputId="KiloWatts"
                        name="unidad"
                        value="KiloWatts"
                        onChange={(e) => setMedida(e.value)}
                        checked={medida === 'KiloWatts'}
                    />
                    <label htmlFor="kilowatts" className="ms-2">Kilowatts</label>
                </div>

                <div className="d-flex align-items-center">
                    <RadioButton
                        inputId="watts"
                        name="unidad"
                        value="Watts"
                        onChange={(e) => setMedida(e.value)}
                        checked={medida === 'Watts'}
                    />
                    <label htmlFor="watts" className="ml-2">Watts</label>
                </div>
                <div className="d-flex align-items-center">
                    <RadioButton
                        inputId="temperatura"
                        name="unidad"
                        value="Temperatura"
                        onChange={(e) => setMedida(e.value)}
                        checked={medida === 'Temperatura'}
                    />
                    <label htmlFor="temperatura" className="ms-2">Temperatura</label>
                </div>
            </div>
            <Button label="Registrar" onClick={handleClick} />
        </Panel >
    )
}

export default PanelRegistrar
