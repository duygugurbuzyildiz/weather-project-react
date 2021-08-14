import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecastDaily(props){
    function day(){
        let date = new Date(props.data.dt*1000);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = date.getDay();

        return days[day];
    }
    return(
        <div>
            <div className="Day">{day()}</div>
            <WeatherIcons code={props.data.weather[0].icon} size={35}/>
            <div className="ForecastTemperature">
                <span className="TemperatureMax">{Math.round(props.data.temp.max)}º</span>
                <span className="TemperatureMin">{Math.round(props.data.temp.min)}º</span>
            </div>
        </div>
    );
}