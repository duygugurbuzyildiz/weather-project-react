import React, {useState, useEffect} from "react";
import WeatherForecastDaily from "./WeatherForecastDaily";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(()=> {
        setLoaded(false);
    }, [props.coordinates])

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if(loaded === true){
        return(
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast, index){
                    if(index < 5){
                    return(
                        <div className="col" key={index}>
                            <WeatherForecastDaily data={dailyForecast}/>
                        </div>)
                    } else {
                        return null;
                    }
                })}
            </div> 
        </div>);
    } else {
            let latitude = props.coordinates.lat;
            let longitude = props.coordinates.lon;
           
            let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=7511873474dcd0a7a6ab23240ca6b9ec&units=metric`;
            axios.get(apiUrl).then(handleResponse);
            return null;
    }
}