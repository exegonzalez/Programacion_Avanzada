import React, {Component} from 'react';

import Criptomoneda from './Criptomoneda';
import Error from './Error';

class Formulario extends Component {
    state={
        moneda:"",
        error: false
    }

    // Validar que el usuario llene ambos campos
    cotizarMoneda = e => {
        e.preventDefault();
        this.setState({
            moneda: e.target.value
        }, ()=>{
            this.props.cotizar(this.state.moneda)
        })
    
        // validar si ambos campos estan llenos
       if(this.state.moneda===""){
        this.setState({
            error: true
            })
       }

        // pasar los datos al componente principal
       
    }

    // Mostrar el error en caso de que exista
    render(){
    const {error} = this.state.error;
    return (
        <form>
            {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
            <div className="row">
                <label>Elige tu Moneda</label>
                <select
                    className="u-full-width" onChange={this.cotizarMoneda}
                   
                >
                    <option value="">- Elige tu Moneda -</option>
                    <option value="USD">Dolar Estadounidense</option>
                    <option value="MXN">Peso Mexicano</option>
                    <option value="GBP">Libras</option>
                    <option value="EUR">Euro</option>
                </select>
            </div>

            <div className="row">
                <label>Elige tu Criptomoneda</label>
                <select
                    className="u-full-width"
                    onChange={this.cotizarMoneda}
                >
                    <option value="">- Elige tu Criptomoneda -</option>
                         <option value="BTC">Bitcoin</option>
                        />
                    ))}

                </select>
            </div>

            <input type="submit" className="button-primary u-full-width" value="Calcular" />

        </form>
    
    )
}
}

export default Formulario;