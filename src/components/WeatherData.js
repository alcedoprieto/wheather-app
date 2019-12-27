import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, FOG,
} from './../constans/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature 
            temperature={20} 
            weatherState={SNOW}
        />
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
    </div>
);

export default WeatherData;