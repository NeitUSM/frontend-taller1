import React, { useState, useMemo } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Dropdown } from 'primereact/dropdown';

function MedicionesComponent({ registers, removeLectura = () => {} }) {

    const [medidaSeleccionada, setMedidaSeleccionada] = useState(null);

    const handleRemoveLectura = (registro) => {
        removeLectura(registro);
    };

    const accionesTemplate = (registro) => {
        return (
            <Button 
                severity="warning" 
                label="Descartar Lectura" 
                rounded 
                onClick={() => handleRemoveLectura(registro)} 
            />
        );
    };

    const medidas = useMemo(() => {
        const nombres = registers.map(r => r.medida)
        return [...new Set(nombres)].map(m => ({ label: m, value: m }))
    }, [registers]);

    const registrosFiltrados = useMemo(() => {
        if (!medidaSeleccionada) return registers
        return registers.filter(r => r.medida === medidaSeleccionada)
    }, [medidaSeleccionada, registers])

    const header = (
        <div className="mb-3 d-flex flex-row justify-content-between">
            <h3 className="m-0 mt-3">Lecturas Registradas</h3>
            <Dropdown
                value={medidaSeleccionada}
                options={medidas}
                onChange={(e) => setMedidaSeleccionada(e.value)}
                placeholder="Filtrar por medida"
                showClear
                style={{ minWidth: '220px' }}
            />
        </div>
    );

    const valorTemplate = (registro) => {
        switch (registro.medida) {
            case "Temperatura":
                return registro.valor + " C"
            case "KiloWatts":
                return registro.valor + " kW"
            case "Watts":
                return registro.valor + " W"
            default:
                return registro.valor
        }
    };

    return (
        <Panel>
            <DataTable 
                value={registrosFiltrados} 
                header={header}
                tableStyle={{ minWidth: '50rem' }}
            >
                <Column sortable field="fecha" header="Fecha"></Column>
                <Column field="hora" header="Hora"></Column>
                <Column field="medidor" header="Medidor"></Column>
                <Column header="Valor" body={valorTemplate}></Column>
                <Column header="Acciones" body={accionesTemplate}></Column>
            </DataTable>
        </Panel>
    );
}

export default MedicionesComponent;
