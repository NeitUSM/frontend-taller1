const localKey = "registro_lectura";

const createRegistro = (registro) => {
    let registros = [];
    const data = localStorage.getItem(localKey);
    if (data != null){
        registros = JSON.parse(data);
    }
    registros = [...registros, registro];
    localStorage.setItem(localKey, JSON.stringify(registros));
}

const deleteRegistro = (registro) => {
    let registros = [];
    const data = localStorage.getItem(localKey);
    if (data != null){
        registros = JSON.parse(data);
    }
    registros = registros.filter(r=>r.id!==registro.id);
    localStorage.setItem(localKey, JSON.stringify(registros));
}

const getRegistros = () => {
    const data = localStorage.getItem(localKey);
    if (data != null){
        return JSON.parse(data);
    } 
    return [];
}

export {createRegistro, deleteRegistro, getRegistros}