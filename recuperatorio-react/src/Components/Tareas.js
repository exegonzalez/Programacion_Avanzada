import React, {Fragment} from 'react';
import TareaLista from './TareaLista';

function Tareas({tareas}) {
     
    return (
        <Fragment>
        <h1 className="text-center">Tareas</h1>
        <ul className=" list-group mt-5">
            { tareas.map(tarea => (
                <TareaLista
                key= {tarea.id}
                tarea = { tarea }
                 />
            ))}
        </ul>
        </Fragment>
    )
}

export default Tareas;