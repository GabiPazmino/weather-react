import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="row">
      <div className="col">
        <div className="WeatherForecast-day">Fri</div>
        <WeatherIcon code="01d" size={36} />
        <br />
        <br />
        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperatures-max">19°C</span>{" "}
          <span className="WeatherForecast-temperatures-min">10°C</span>
        </div>
      </div>
    </div>
  );
}
