import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "RAIN",
    "04d": "SLEET",
    "04n": "SNOW",
    "09d": "WIND",
    "09n": "FOG",
    "10d": "FOG",
    "10n": "FOG",
    "11d": "FOG",
    "11n": "FOG",
    "13d": "FOG",
    "13n": "FOG",
    "50d": "FOG",
    "50n": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#1e1e1e"
      size={64}
      animate={true}
    />
  );

  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="#1e1e1e"
      size={64}
      animate={true}
    />
  );
}
