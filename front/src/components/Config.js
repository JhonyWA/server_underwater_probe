import React, {useState} from "react";

import Alert from "./Alert";

import {sendMessage} from '../api/message'

export default function Config() {

    const [alert, setAlert] = useState({ status: '', error: '', show: false })

    function hanleSubmit(event) {
        event.preventDefault()
        const form = (event.target)
        const formData = new FormData(form)
        const jsonData = {};
        for (const pair of formData.entries()) {
            jsonData[pair[0]] = pair[1];
        }
        sendMessage(jsonData).then(()=>{
            console.log('ok');
            setAlert({ status: 200, error: 'Menssagem enviada com sucesso!!', show: true })
        }).catch(error=>{
            console.error(error);
            setAlert({ status: 400, error: error, show: true })
        })
    }

    return (
        <div>
            <div className="text-center d-flex align-items-center py-4" style={{ height: '100vh' }}>
                <main className='form-signin w-100 m-auto loginMain'>
                    <form onSubmit={hanleSubmit}>
                        <h1>Configuração</h1>
                        <div className="form-floating mb-3">
                            <select name="topic" className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option value="/ph/cfg">PH</option>
                                <option value="/orp/cfg">ORP</option>
                                <option value="/do/cfg">OXIGÊNIO DISSOLVIDO</option>
                                <option value="/rtd/cfg">SENSOR DE TEMPERATURA</option>
                                <option value="/ec/cfg">SENSOR DE CONDUTIVIDADE</option>
                                <option value="/ntu/cfg">SENSOR DE TURBIDEZ</option>
                                <option value="/em/cfg">SENSOR DE ENERGIA</option>
                            </select>
                            <label htmlFor="floatingSelect" style={{ color: 'black', fontSize: 15 }}>Tópico</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input name="message" type="text" className="form-control" id="floatingInput" placeholder="10" required/>
                            <label htmlFor="floatingInput" style={{ color: 'black', fontSize: 15 }}>Valor</label>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Enviar</button>

                        </div>
                    </form>
                </main>
            </div>
            <Alert alert={alert} setAlert={setAlert}></Alert>
        </div>
    )
}