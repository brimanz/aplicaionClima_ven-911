import React, { useState } from 'react';
import PropTypes from 'prop-types'


const Form = ({ busqueda, setBusqueda, setConsultar }) => { 

  const [error, setError] = useState(false);

  //usando distructuring
  const { ciudad, pais } = busqueda;

  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validate
    if (ciudad.trim() === '' || pais.trim() === '') {
      setError(true);
      return;
    }

    setError(false);

    setConsultar(true);
  };


  return (

    <form
      className="formulario" 
      onSubmit={handleSubmit}
    >
      {error ? <p className="error">Son necesarios todos los campos</p> : null}


      <h2 className="titulo">Ingresa los Datos para Consultar Clima</h2>

      <div className="col-md-6 col-sm-6 mx-5 my-4">
	      <label htmlFor="ciudad">Ciudad:</label>        
        <input
	        className="form-control"
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        
      </div>

      <div className="col-md-6 col-sm-6 mx-5">
	      <label htmlFor="pais">País: </label>        
	      <select
	        className="form-control"
          name="pais"
          id="pais"
          value={pais}
          onChange={handleChange}
        >
          <option value="">-- Seleccione un país --</option>
          <option value="VE">Venezuela</option>
        </select> 
      </div>

      <div>
        <input
          type="submit"
          value="Obtener Clima"
          className="btn btn-outline-success mt-5 mx-5"
        />
      </div>

    </form>
  );
};

Form.propTypes = {
  busqueda: PropTypes.object.isRequired,
  setBusqueda: PropTypes.func.isRequired,
  setConsultar: PropTypes.func.isRequired
}


export default Form;