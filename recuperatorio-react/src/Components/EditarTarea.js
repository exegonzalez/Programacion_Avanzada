import React, {useState} from 'react';
import Error from './Error';
import axios from 'axios';

function EditarTarea({id}){

    const [idTarea, guardarid ] = useState(id);
    const [NombreDesarrollador, guardarNombre ] = useState('');
    const [ApellidoDesarrollador, guardarApellido ] = useState('');
    const [TipoDesarrollador, guardarTipo ] = useState('');
    const [Fecha, guardarFecha ] = useState('');
    const [Hora, guardarHora ] = useState('');
    const [EstadoTarea, guardarEstado ] = useState('');
    const [error, guardarError ] = useState(false);

    const leerValorRadio = e => {
        guardarEstado(e.target.value)
    }

    const editarTarea = async e => {

        const anteriores = await axios.get(`http://localhost:4000/tareas/${idTarea}`, {
                NombreDesarrollador,
                ApellidoDesarrollador,
                TipoDesarrollador,
                Fecha,
                Hora,
                EstadoTarea,
                id
            })
        
        guardarNombre(anteriores.NombreDesarrollador)
        guardarApellido(anteriores.ApellidoDesarrollador)
        guardarTipo(anteriores.TipoDesarrollador)
        guardarFecha(anteriores.Fecha)
        guardarHora(anteriores.Hora)
        guardarTipo(anteriores.EstadoTarea)
        guardarid(anteriores.id)

        e.preventDefault();
        if(NombreDesarrollador === '' || ApellidoDesarrollador === '' || TipoDesarrollador === '' || Hora === '' || Fecha === '' || EstadoTarea === '') {
            guardarError(true);
            return;
        }

        guardarError(false);

        try {
            const resultado = await axios.post('http://localhost:4000/tareas', {
                NombreDesarrollador,
                ApellidoDesarrollador,
                TipoDesarrollador,
                Fecha,
                Hora,
                EstadoTarea,
                id
            })

            console.log(resultado);
            
        }catch(error){
            console.log('error')  
        }

    }

     
    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Editar Tarea</h1>
            {(error) ? <Error mensaje='Todos los campos son obligatorios'/> : null }

            <form
                className="mt-5"
                onSubmit= { editarTarea }
            >
                <div className="form-group">
                    <label>Nombre Desarrollador</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Nombre desarrollador"
                        onChange={e => guardarNombre(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Apellido Desarrollador</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="apellido"
                        placeholder="Apellido desarrollador"
                        onChange={e => guardarApellido(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Tipo de desarrollador</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="tipo"
                        placeholder="Tipo desarrollador"
                        onChange={e => guardarTipo(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Fecha</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        name="fecha"
                        onChange={e => guardarFecha(e.target.value)}
                    />
                </div>
                
                <div className="form-group">
                    <label>Hora</label>
                    <input 
                        type="time" 
                        className="form-control" 
                        name="hora"
                        onChange={e => guardarHora(e.target.value)}
                    />
                </div>

                <legend className="text-center">Estados:</legend>
                <div className="text-center">
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="estado"
                        value="activa"
                        onChange={leerValorRadio}
                    />
                    <label className="form-check-label">
                        Activar
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="estado"
                        value="pausada"
                        onChange={leerValorRadio}
                    />
                    <label className="form-check-label">
                        Pausar
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="estado"
                        value="finalizada"
                        onChange={leerValorRadio}
                    />
                    <label className="form-check-label">
                        Finalizar
                    </label>
                </div>
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Actualizar tarea" />
            </form>
        </div>
    )
}
export default EditarTarea
