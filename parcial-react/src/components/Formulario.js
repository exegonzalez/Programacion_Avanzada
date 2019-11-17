import React, {Component} from 'react';

import Error from './Error';

class Formulario extends Component {
    state={
        moneda:"",
        criptomoneda:"",
        error: true
    }
    
    // Validar que el usuario llene ambos campos
    cotizarMoneda = e => {
        e.preventDefault();

        console.log(this.state.moneda)
        console.log(this.state.criptomoneda)
        
        if(this.state.moneda==="" || this.state.criptomoneda===""){
            this.setState({
                error: true
                })
           }

        // validar si ambos campos estan llenos
       if(this.state.moneda!=="" && this.state.criptomoneda!==""){
        this.setState({
            error: false
            })
        this.props.cotizar(this.state.criptomoneda,this.state.moneda)      
       }

        // pasar los datos al componente principal
    }

    // Mostrar el error en caso de que exista
    render(){
    return (
        <form onSubmit = {this.cotizarMoneda}>
            {(this.state.error) ? <Error mensaje="Ambos campos son obligatorios" /> : null}
            <div className="row">
                <label>Elige tu Moneda</label>
                <select
                    className="u-full-width" onChange={e => this.setState({
                        moneda: e.target.value,
                    })}
                   
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
                    onChange={e => this.setState({
                        criptomoneda: e.target.value
                    })}
                >
                    <option value="">- Elige tu Criptomoneda -</option>
                         <option value="BTC">Bitcoin</option>
                         <option value="ETH">Ethereum</option>
                         <option value="EOS">EOS</option>
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