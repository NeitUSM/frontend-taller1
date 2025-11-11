const localKey = "registro_lectura";

const createRegistro = (registro) => {
    let lista = [];
    const data = localStorage.getItem(localKey);
    if (data != null){
        lista = JSON.parse(data);
    }
    lista = [...lista, registro];
    localStorage.setItem(localKey, JSON.stringify(lista));
}

const getRegistros = () => {
    const data = localStorage.getItem(localKey);
    if (data != null){
        return JSON.parse(data);
    } 
    return [];
}

const deleteAllRegistros = () => {
    localStorage.removeItem(localKey);
}

export {createRegistro, getRegistros, deleteAllRegistros}