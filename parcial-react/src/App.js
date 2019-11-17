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

  cotizar= async (criptomoneda='BTC',moneda='USD') =>{
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
    
    this.setState ({
      estado : true
    })

    const resp = await fetch (url);
    const respuesta = await resp.json();
    
    this.setState ({
      estado: false
    })

    const res = respuesta.DISPLAY[criptomoneda]
    console.log(res)
    const res2 = res[moneda]
    console.log(res2)

    this.setState ({
      monedas : res2
    })
  }  
  

  componentDidMount () {
    this.cotizar ();
  }
  // si no hay moneda, no ejecutar
       

  // mostrar spinner
   

  // Mostrar Spinner o resultado

  render(){
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
           {(this.state.estado) ? <Spinner /> : <Cotizacion resultado={this.state.monedas} />}
        </div>
    </div>
  );
}
}

export default App;
