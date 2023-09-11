import React from 'react'
import PropTypes from 'prop-types'


const Header = ({ title }) => {
  return(
    <nav className="header">
      <div className="nav-wrapper bg-light p-4">
        <a href="/" className="d-flex justify-content-center titulo-header">{title}</a>
      </div>
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}


export default Header
