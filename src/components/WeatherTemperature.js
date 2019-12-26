import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    sunny: "day-sunny",
    fog: "day-fog",
}
const getWeatherIcons =weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons name="" size="2x" />
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