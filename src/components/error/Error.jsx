import React from 'react'
import PropTypes from 'prop-types'


const Error = ({ mensaje }) =>{
	return(
		<h2 className="error">{ mensaje }</h2>
	);
}

Error.propTypes = {
	mensaje: PropTypes.string.isRequired
}


export default Error