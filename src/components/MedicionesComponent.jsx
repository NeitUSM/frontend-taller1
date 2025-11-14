import React, { useState, useMemo } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Dropdown } from 'primereact/dropdown';

function MedicionesComponent({ registers, removeLectura = () => { } }) {

    const [medidaSeleccionada, setMedidaSeleccionada] = useState(null)
    const [filtroAplicado, setFiltroAplicado] = useState(null)

    const medidas = useMemo(() => {
        const nombres = registers.map(r => r.medida)
        return [...new Set(nombres)].map(m => ({ label: m, value: m }))
    }, [registers])

    const registrosFiltrados = useMemo(() => {
        if (!filtroAplicado) return registers
        return registers.filter(r => r.medida === filtroAplicado)
    }, [filtroAplicado, registers])

    const aplicarFiltro = () => {
        setFiltroAplicado(medidaSeleccionada);
    };

    const header = (
        <div className="mb-3 d-flex flex-row justify-content-between align-items-center">
            <h3 className="m-0">Lecturas Registradas</h3>
            <div className="d-flex gap-2">
                <Dropdown
                    value={medidaSeleccionada} options={medidas} showClear
                    onChange={(e) => {
                        setMedidaSeleccionada(e.value)
                        setFiltroAplicado(null)
                    }}
                    placeholder="Seleccionar medida" style={{ minWidth: '220px' }}
                />
                <Button label="Filtrar" icon="pi pi-search" onClick={aplicarFiltro} />
            </div>
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

    const accionesTemplate = (registro) => (
        <Button
            severity="warning"
            label="Descartar Lectura"
            rounded
            onClick={() => removeLectura(registro)}
        />
    );

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
