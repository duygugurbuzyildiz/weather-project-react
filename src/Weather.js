import React, { useState } from "react";
import axios from "axios";
import WeatherIcons from "./WeatherIcons";
import FormatDate from "./FormatDate";
import TemperatureUnit from "./TemperatureUnit";
import WeatherForecast from "./WeatherForecast";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css"

export default function SearchEngine() {
  let [city, setCity] = useState("Barcelona");
  let [WeatherData, setWeatherData] = useState({ready: false});
  
  function Search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7511873474dcd0a7a6ab23240ca6b9ec&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function handleSubmit(event){
    event.preventDefault()
    Search();
  }
  function SearchCity(event) {
    setCity(event.target.value);
  }
  function showTemperature(response) 
  {
    setWeatherData({
      ready:true,
      coordinates:response.data.coord,
      city:response.data.name,
      temperature: response.data.main.temp,
      date:(new Date(response.data.dt * 1000)),
      description: response.data.weather[0].description,
      humidity:response.data.main.humidity,
      speed:response.data.wind.speed,
      icon:<WeatherIcons code={response.data.weather[0].icon} size={50}/>
    });
  }
  let form = (
    <div className="container">
        <form className="row mt-5" onSubmit={handleSubmit}>
            <input className="col-7 ms-5" type="text" placeholder="Enter a city" onChange={SearchCity}/>
            <input className="col-3 btn-primary ms-2 me-2 searchButton btn-sm" type="submit" value="Search" />
        </form>
    </div>
  );
  if (WeatherData.ready) {
    return (<div>
      {form}
      <div className="WeatherForecast">
        <div className="Weather">
          <ul className="results">
            <li className="city"> {WeatherData.city} <br /> 
              <div className="row mt-3 mb-3">
                <div className="d-flex justify-content-end col">
                  {WeatherData.icon}
                </div>
                <div className="d-flex col" ><TemperatureUnit celcius={Math.round(WeatherData.temperature)} />
                </div>
              </div>
            </li>
            <li className="dateFormat"><FormatDate date={WeatherData.date}/></li>
            <li className="text-capitalize">Description: {WeatherData.description}</li>
            <li></li>
            <li>  <span>Humidity: {WeatherData.humidity}%</span> <span>Speed: {WeatherData.speed}km/h</span></li>
          </ul>
        </div>
      </div>
      <WeatherForecast coordinates={WeatherData.coordinates}/>
    </div>
    );
  } else {
    return (<div> <div className="mb-5">{form} {Search()}</div></div>
    );
  }
}