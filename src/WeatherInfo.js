import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-8">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
            <img src={props.data.iconUrl} alt={props.data.description} />
          </div>
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>{" "}
          <span className="unit">°C</span>
        </div>
        <div className="col-4">
          <ul>
            <li>Precupitation: 15 %</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
