import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import convert from  'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import {
      SUN,   
} from './../../constans/weathers';

const location = "Merida,VE";
const api_key = "64c1322414d12d2866ee1a5414a9a29d";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;


class WeatherLocation extends Component {
    constructor(){
        super();
        this.state = {
            city: 'Mérida',
            data: null,
        };
    }
    getTemp = kelvin => {
      return Number(convert(kelvin).from("K").to("C").toFixed(2));
    }
    getWeatherState = weather_data => {
      return SUN;
    }
    getData = weather_data => {
      const { humidity,temp } = weather_data.main;
      const { speed } = weather_data.wind;
      const weatherState = this.getWeatherState(weather_data);
      const temperature = this.getTemp(temp);

      const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
      }
      return data;
    }

    componentDidMount(){
      console.log("componentDidMount");
      this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevStates){
      console.log("componetDidUpdate");
    }

    handleUpdateClick = () => {
    	fetch(api_weather).then( resolver => {
        return resolver.json();
      }).then(data => {
        console.log(data);
        this.setState({
            city: "Mérida VE",
            data: this.getData(data),
        });
      });
        console.log("Actualizado");

    }
    render() {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                { data ? <WeatherData data = {data}></WeatherData> : <CircularProgress /> }
            </div>
        );
    }
}


export default WeatherLocation;
