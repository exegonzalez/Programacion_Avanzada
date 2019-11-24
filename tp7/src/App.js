import React, {Component} from 'react';
import './bootstrap.min.css'
import Header from './components/Header'
import NuevaArma from './components/NuevaArma';
import ListaArmas from './components/ListaArmas';
import RefactoringVista from './components/RefactoringVista';


class App extends Component  {

  state = {
    armas : []
  }

  // crea una nueva arma
  crearNuevaArma = datos => {
    //console.log(datos);
    //copiar el state actual
    const armas = [...this.state.armas, datos]

    // agregar el nuevo state
    this.setState({
      armas
    })
    
  }

  //elimina una arma del state
  eliminarArma = id => {
    //console.log(id)

    //tomar una copia del state
    const armas = [...this.state.armas].filter(arma => arma.id !== id)

    this.setState({
      armas
    })
    
  }

  // cuando la aplicacion se carga
  componentDidMount(){
    const armasLS = localStorage.getItem('armas')
    
    if(armasLS) this.setState({ armas: JSON.parse(armasLS) })
  }

  // cuando agregamos o eliminamos una nueva arma
  componentDidUpdate() {
    localStorage.setItem('armas', JSON.stringify(this.state.armas))
  }

  render() {

    return (

      <div className="absolute">
        
        <Header 
          titulo="Kylo Ren - Administrador de armas falladas"
        />
        <RefactoringVista/>
        <NuevaArma
          crearNuevaArma={this.crearNuevaArma}
        />

        <ListaArmas
          armas = { this.state.armas }
          eliminarArma = { this.eliminarArma }
         />

      </div>
        
    );
  }
 

}

export default App;
