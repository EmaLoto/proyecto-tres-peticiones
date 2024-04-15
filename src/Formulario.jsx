import { useState } from "react"

export const Formulario = ({peticiones, setPeticiones, setSubmiteado, submiteado}) => {

    const [nuevaPeticion, setNuevaPeticion] = useState(
        {
            prioridad: "",
            asunto: "",
            mensaje: "",
            id: 0
        }
    )

    const generarNuevoAsunto = (event) => {
        const nuevoAsunto = event.target.value
        return (
            setNuevaPeticion({...nuevaPeticion, asunto: nuevoAsunto})
        )
    }

    const generarNuevoMensaje = (event) => {
        const nuevoMensaje = event.target.value
        return (
            setNuevaPeticion({...nuevaPeticion, mensaje: nuevoMensaje})
        )
    }

    const generarNuevaPrioridad = (event) => {
        const nuevaPrioridad = event.target.value
        return (
            setNuevaPeticion({...nuevaPeticion, prioridad: nuevaPrioridad})
        )
    }

    const submitPeticion = (event) => {
        event.preventDefault()
        if(nuevaPeticion.prioridad != "" && nuevaPeticion.asunto != "" && nuevaPeticion.mensaje != "" ) {
            fetch("http://127.0.0.1:3001/api", {
                method : "POST",
                body: JSON.stringify({
                    prioridad: nuevaPeticion.prioridad,
                    asunto: nuevaPeticion.asunto,
                    mensaje: nuevaPeticion.mensaje,
                    id: 0
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
                .then((response) => response.json())
                .then((json) => {console.log(json)})
                setSubmiteado(!submiteado)
        }
        else console.log("Completar formulario antes de enviar")        
    }

    return (
        <form onSubmit={submitPeticion}>
            <p>Realizar petición</p>
            <select name="prioridad" defaultValue="prioridad" onChange={generarNuevaPrioridad}>
                <option value="prioridad">-- seleccionar prioridad --</option>
                <option value="normal">Normal</option>
                <option value="urgente">Urgente</option>
            </select>
            <input type="text" placeholder="Asunto" onChange={generarNuevoAsunto}/>
            <textarea placeholder="Mensaje" onChange={generarNuevoMensaje}></textarea>
            <button type="submit">Enviar</button>
        </form>
    )
}