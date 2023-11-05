import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "a2dda52dce059eb8a14e95aaa0db6ab7";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;

  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
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
    </div>
  );
}
