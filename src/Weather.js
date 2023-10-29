import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary"
            ></input>
          </div>
        </div>
      </form>
      <h1>Quito</h1>
      <ul>
        <li>Wednesday</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-7">
          <img src="#" alt="Mostly Cloudy" />
          12 °C
        </div>
        <div className="col-5">
          <ul>
            <li>Precupitation: 15 %</li>
            <li>Humidity: 70 &</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}