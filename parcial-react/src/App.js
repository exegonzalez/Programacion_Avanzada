import React, {Component} from 'react';

import imagen from './cryptomonedas.png';

import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

class App extends Component {

  state = {
    monedas : [],
    estado: false
  }

  cotizar= async (moneda='BTC') =>{
    const url = `https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=${moneda}`
    const resp = await fetch (url);
    const monedas = await resp.json();

    this.setState ({
      monedas : monedas.data
    })
  }  
  

  componentDidMount () {
    this.cotizar ();
  }
  // si no hay moneda, no ejecutar
       

  // mostrar spinner
   

  // Mostrar Spinner o resultado

  render(){
    const {estado} = this.state.estado;
    return (
    <div className="container">
        <div className="row">
            <div className="one-half column">
                <img src={imagen} alt="imagen criptomonedas" className="logotipo" />
            </div>
            <div className="one-half column">
                <h1>Cotiza Criptomonedas al Instante</h1>
                <Formulario cotizar={this.cotizar}/>
           </div>
           {estado ? <Spinner /> : <Cotizacion resultado={this.state.monedas} />}
        </div>
    </div>
  );
}
}

export default App;
