import React from 'react';

const Cotizacion = ({resultado}) => {

    return ( 
        <div className="resultado">
            <h2>Resultado</h2>
            <p className="precio">El precio es:{resultado.PRICE} <span></span> </p>

            <p>Precio más alto del día:{resultado.HIGHDAY} <span></span> </p>
            <p>Precio más bajo del día:{resultado.LOWDAY} <span></span> </p>
            <p>Variación últimas 24 horas:{resultado.CHANGEPCT24HOUR} <span>%</span> </p>
            <p>Última Actualización:{resultado.LASTUPDATE} <span></span> </p>
        </div>
     );
}
 
export default Cotizacion;