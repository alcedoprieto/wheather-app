import React, {Component} from 'react';
import LocationList from './components/LocationList';
//import logo from './logo.svg';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Mérida,ve',
  'Cucuta,col',
  'Quito,ec',
  'Lima,pe',
];
class App extends Component {
  render() {
    return (
      <div className="App">
      <LocationList cities={cities}></LocationList>
      </div>
    )
  }
}

export default App;
