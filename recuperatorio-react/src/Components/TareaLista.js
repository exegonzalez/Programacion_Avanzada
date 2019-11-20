import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

function TareaLista({tarea}){

    const eliminarTarea = async id =>{
        const resultado = await axios.delete(`http://localhost:4000/tareas/${id}`)
        console.log("eliminado", resultado)
        //Falta recargar pagina
    }

    return(
        <li data-estado={tarea.EstadoTarea} className="list-group-item d-flex justify-content-between align-items-center">
            <p>
                <span className="font-weight-bold">Tarea: {tarea.id} - Estado: {tarea.EstadoTarea} - Desarollador: {tarea.NombreDesarrollador} {tarea.ApellidoDesarrollador}</span>
            </p>

            <div>
                <Link to={`/tareas/editar/${tarea.id}`}
                    className="btn btn-success mr-2">
                    Editar
                </Link>

                <button type="button"
                className="btn btn-danger"
                onClick={() => eliminarTarea(tarea.id)}>
                Eliminar &times;
                </button>
            </div>
        </li>
    )
}

export default TareaLista