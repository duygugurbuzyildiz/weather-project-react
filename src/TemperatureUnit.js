import React from "react";
import "./Weather.css";

export default function TemperatureUnit(props){
    
    return (<div className="TemperatureUnit">
        <span className="ms-2 temperature">
            {Math.round(props.celcius)}
        </span>
        <span className="unit">
            ºC
        </span> 
    </div>);

}