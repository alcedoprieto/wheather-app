import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"Mérida Ven"} />
        <WeatherData />
    </div>
);

export default WeatherLocation;