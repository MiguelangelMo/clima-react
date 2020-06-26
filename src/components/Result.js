import React from 'react';
import PropTypes from 'prop-types';

const Result = (props) => {
    const { name, main } = props.respAPI;

    //Esto es para que no cargue el componente
    if (!name) return null

    // Esta constante es porque main.temp me los retorna en en grados klevin
    // entonces debemos aplicar la resta siguiente
    const klevin = 273.15;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2> El clima de {name} es: </h2>
                <p className="temperatura">
                    {Math.round(main.temp - klevin, 4)} <span> &#x2103; </span>
                </p>
                <p className=""> Temperatura Máxima &nbsp;
                    {Math.round(main.temp_max - klevin, 4)} <span> &#x2103; </span>
                </p>
                <p className=""> Temperatura Mínima &nbsp;
                    {Math.round(main.temp_min - klevin, 4)} <span> &#x2103; </span>
                </p>
            </div>
        </div>
    );
}

Result.protoTypes = {
    props: PropTypes.object.isRequired
}

export default Result;