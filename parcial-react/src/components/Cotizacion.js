import React from 'react';

const Cotizacion = ({resultado}) => {

    return ( 
        <div className="resultado">
            <h2>Resultado</h2>
            <p className="precio">El precio es <span></span> </p>

            <p>Precio más alto del día: <span></span> </p>
            <p>Precio más bajo del día: <span></span> </p>
            <p>Variación últimas 24 horas: <span>%</span> </p>
            <p>Última Actualización: <span></span> </p>
        </div>
     );
}
 
export default Cotizacion;