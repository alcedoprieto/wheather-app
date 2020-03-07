import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import convert from  'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import {
      SUN,
} from './../../constans/weathers';

const location = "Merida,VE";



class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const { city } = props;
        this.state = {
            city,
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
      const api_weather = getUrlWeatherByCity(this.state.city);
    	fetch(api_weather).then( resolver => {
        return resolver.json();
      }).then(data => {
        console.log(data);
        this.setState({
            city: this.state.city,
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
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
};

export default WeatherLocation;
