import { useState } from "react"

export const ListaItem = ({prioridad, asunto, mensaje, _id}) => {

    const [mensajeVisible, setMensajeVisible] = useState (false)

    const handleClick = () => {
        setMensajeVisible(!mensajeVisible)
    }

    return (
        < >
            <tr className={mensajeVisible ? "lista-item abierto" : "lista-item"} onClick={handleClick}>
                <td className="lista-prioridad">
                    <span  className={prioridad === "urgente" ? "lista-prioridad-urgente" : "lista-prioridad-normal"}>
                        {prioridad}
                    </span>                    
                </td>
                <td className="lista-no-prioridad">{asunto}</td>                                                 
            </tr>
            <tr className={mensajeVisible ? "lista-mensaje" : "lista-mensaje-oculto"}>
                <td className="lista-mensaje-caja">{mensaje}</td>
            </tr> 
        </>     
    )
}

export const Lista = ({peticiones}) => {
    return (
        <table className="lista">
            <thead>
                <tr className="lista-item-header">
                    <th className="lista-prioridad">Prioridad</th>
                    <th className="lista-no-prioridad">Asunto</th>
                </tr>
            </thead>
            <tbody>
            {
                peticiones.filter((peticiones) => {
                    if(peticiones.prioridad === "urgente") return true;
                })
                .map( (peticiones) => {
                    return (                        
                        <ListaItem 
                            key={peticiones._id}
                            prioridad={peticiones.prioridad}
                            asunto={peticiones.asunto}
                            mensaje={peticiones.mensaje}
                        />            
                    )
                })
            }
            {
                peticiones.filter((peticiones) => {
                    if(peticiones.prioridad === "normal") return true;
                })
                .map( (peticiones) => {
                    return (                        
                        <ListaItem 
                            key={peticiones._id}
                            prioridad={peticiones.prioridad}
                            asunto={peticiones.asunto}
                            mensaje={peticiones.mensaje}
                        />            
                    )
                })
            }
            </tbody>
        </table>
    )
}