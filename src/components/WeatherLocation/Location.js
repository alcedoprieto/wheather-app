import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) => {
    //const city = props.city; == const {city} = props;
    return (
    <div><h1>{city}</h1></div>
    );
};

Location.prototype = {
    city: PropTypes.string.isRequired,
};
export default Location;