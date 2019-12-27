import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, FOG,
} from './../constans/weathers';

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [FOG]: "day-fog",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
}
const getWeatherIcons =weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons name={icon} size="2x" />
    else
    return <WeatherIcons name="day-sunny" size="2x" />
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {
            getWeatherIcons(weatherState)
        }

        <span>{`${temperature} C°`}</span>
    </div>
);

export default WeatherTemperature;