import React, { useState } from 'react';
import Error from './Error'
import PropTypes from 'prop-types';

const Form = ({search, saveSearch, saveQuery}) => {

    const [error, saveError] = useState(false);

    const { ciudad, pais } = search;

    const handleChange = (e) => {
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handelSubmit = (e) => {
        e.preventDefault();

        if (ciudad.trim() !== "" && pais.trim() !== "") {

        } else { saveError(true); return }
        saveError(false)
        saveQuery(true)
    }

    return (
        <form onSubmit={handelSubmit}>
            <div>
                {error ? <Error mensaje="Complete todos los campos" /> : null}
            </div>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad</label>
            </div>
            <div className="input-field col s12">
                <select name="pais" id="pais" value={pais} onChange={handleChange}>
                    <option value="" disabled="disabled">Seleciona un País</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="VE">Venezuela</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais</label>
            </div>
            <div>
                <input
                    type="submit"
                    value="Buscar..."
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    />
            </div>
        </form>
    );
}

Form.protoTypes = {
    search: PropTypes.object.isRequired,
    saveSearch: PropTypes.func.isRequired,
    saveQuery: PropTypes.func.isRequired
}

export default Form;