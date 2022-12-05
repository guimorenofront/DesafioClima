import axios from "axios";
import { api } from './APICONFIG'
const UseApi = async (Data, Load, Modal, dados, setError, showError) => {
    Load(true)
    await axios.get(`${api.base}weather?q=${Data},BR&units=${api.units}&lang=${api.lang}&appid=633cd1a0b632fec137c7079c6b919a6c`)
        .then(async (response) => {
            Load(true)
            await dados(response.data)
            Modal(true)
            Load(false)
        }).catch((error) => {
            if (error.response) {
                console.warn(error.response.data);
                setError(error.response.data)
                showError(true)
                Load(false)
            } else if (error.request) {
                console.warn(error.request);
                setError({cod: "Conexão", message:"Erro de Conexão com servidor"})
                showError(true)
                Load(false)
            }
        })
    return (null);
}

export { UseApi }