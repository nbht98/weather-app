import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import { Loader } from "semantic-ui-react";
import { Icon, Input } from "semantic-ui-react";

// import React, { useEffect, useState } from "react";

const URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [coords, setCoords] = useState(null);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const getCoords = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        ...coords,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  const setWeatherState = (weatherData) => {
    setWeather({
      ...weather,
      temperature: weatherData.data.main.temp,
      sunset: weatherData.data.sys.sunset,
      sunrise: weatherData.data.sys.sunrise,
      humidity: weatherData.data.main.humidity,
      city: weatherData.data.name,
      icon: weatherData.data.weather[0].main,
    });
    setLoading(false);

    axios
      .get(
        `${URL}/onecall?lat=${weatherData.data.coord.lat}&lon=${weatherData.data.coord.lon}&units=metric&exclude=hourly,minutely&appid=${API_KEY}`
      )
      .then((weatherData) => {
        setForecast(weatherData.data.daily);
      })
      .catch((error) => {});
  };

  const getWeatherInfo = (cityValue) => {
    if (cityValue) {
      axios
        .get(
          `${URL}/weather?q=${cityValue}&units=metric&exclude=hourly,minutely&appid=${API_KEY}`
        )
        .then((weatherData) => {
          setWeatherState(weatherData);
        })
        .catch((error) => {});
    } else {
      getCoords();
      if (coords !== null && weather === null) {
        axios
          .get(
            `${URL}/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&exclude=hourly,minutely&appid=${API_KEY}`
          )
          .then((weatherData) => {
            setWeatherState(weatherData);
          })
          .catch((error) => {});
      }
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, [coords, weather]);

  const search = (evt) => {
    if (evt.key === "Enter" || evt.type === "click") {
      getWeatherInfo(query);
    }
  };

  return (
    <div className="main">
      <Header />

      <div>
        <Input
          icon={<Icon name="search" className="icon" link onClick={search} />}
          placeholder="City..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
        <br />
        <br />
      </div>
      {loading ? (
        <div>
          <p>Loading...</p>
          <Loader active inline="centered" />
        </div>
      ) : (
        <WeatherCard weather={weather} />
      )}
      <Forecast forecast={forecast} />
    </div>
  );
}

export default App;
