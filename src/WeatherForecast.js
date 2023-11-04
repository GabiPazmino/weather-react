import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "5a40dfe3dd2903939dfof7704baa0cat";

  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&${apiKey}=&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Fri</div>
        </div>
        <WeatherIcon code="01d" size={36} />
        <br />
        <br />
        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperatures-max">19°</span>{" "}
          <span className="WeatherForecast-temperatures-min">10°</span>
        </div>
      </div>
    </div>
  );
}
