import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import AgregarTarea from './Components/AgregarTarea';
import Tareas from './Components/Tareas';
import Header from './Components/Header';
import EditarTarea from './Components/EditarTarea'

function App() {

  const [ tareas, guardarTareas ] = useState([])
  const [ recargarTareas, guardarRecargaTareas ] = useState(true)

  useEffect(() => {

      if(recargarTareas){
        const consultarApi = async () => {
          // consultar la api de json -server
          const resultado = await axios.get('http://localhost:4000/tareas');
  
         // console.log(resultado);
         guardarTareas(resultado.data); // pasamos el resultado al state
      }
     
      consultarApi();// llamamos a la funcion

      // cambiar a false la recarga de los productos
      guardarRecargaTareas(false)
        
      }
     
  },[recargarTareas])
  return (
    
    <Router>
      <Header/>
      <main className="container mt-5">
      <Switch>
        <Route exact path="/tareas" 
        render = { ()=> (
          <Tareas
          tareas={ tareas }
          />
        )}
          />
         
        <Route exact path="/nueva-tarea" 
        render={() => (
          <AgregarTarea
          guardarRecargaTareas={ guardarRecargaTareas }
          />
        )}></Route>
        <Route exact path="tareas/editar/:id" component={EditarTarea}></Route>
      </Switch>
      </main>
    </Router>
  );
}

export default App;
