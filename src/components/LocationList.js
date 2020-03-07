import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
		<div>
			<WeatherLocation city="Merida,VE"  /> 
			<WeatherLocation city="Bogota,COL" /> 
			<WeatherLocation city="Cucuta,COL" /> 
		</div>
	);

export default LocationList;