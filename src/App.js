import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container border border-primary">
        <Weather />

        <br />
        <footer>
          This project was created by{" "}
          <a href="https://gabipazminoportfolio.netlify.app/" target="_blank">
            Gabi Pazmiño
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/GabiPazmino/weather-react"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
