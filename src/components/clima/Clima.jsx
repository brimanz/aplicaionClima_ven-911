import React from 'react'
import PropTypes from 'prop-types'


const Clima = ({ resultado }) =>{

	const { name, visibility, main } = resultado;

	if(!name) return null;

	//transformación de grados kelvin
	const kelvin = 273.15;

 
	return(
		<div className="card mt-5 mx-4 clima">
			<h1 className="titulo-clima">El clima en { name } es:</h1>
			<h3 className="subtitulo-clima">Temperatura: { parseFloat(main.temp - kelvin, 10).toFixed(2) } ºC </h3>

			<p className="text">Visibilidad: { visibility / 1000 } km </p>
			<p className="text">Temperatura maxima { parseFloat(main.temp_max - kelvin, 10).toFixed(2) } ºC  </p>
			<p className="text">Humedad: {main.humidity}</p>

			<a 
				className="link-mapa"
				href="https://openweathermap.org/weathermap?basemap=map&cities=true&layer=clouds&lat=8.5983&lon=-71.145&zoom=6"
			>
				Ver Mapa Metereologíco
			</a>
		</div>
	);
}

Clima.propTypes = {
	resultado: PropTypes.object.isRequired
}


export default Clima