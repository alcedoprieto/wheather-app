import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
    CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY,
} from './../../constans/weathers';

const data = {
	temperature: 35,
	weatherState: SUN,
	humidity: 13,
	wind: '10 m/s',
}
const data2 = {
	temperature: 5,
	weatherState: CLOUD,
	humidity: 5,
	wind: '10 m/s',
}
class WeatherLocation extends Component {
    constructor(){
        super();
        this.state = {
            city: 'Guayaquil',
            data: data,
        };
    }
    handleUpdateClick = () => {
        console.log("Actualizado");
        this.setState({
            city: "Quito!",
            data:data2,
        });
    }
    render() {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data = {data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}


export default WeatherLocation;