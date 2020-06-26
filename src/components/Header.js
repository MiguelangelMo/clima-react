import React from 'react';
import '../css/Header.css'
import PropTypes from 'prop-types';

const Header = (props) => {

    return (
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{props.title}</a>
            </div>
        </nav>
    )
}

Header.propTypes = {
    props: PropTypes.object
}


export default Header;