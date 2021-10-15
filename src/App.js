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
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [icon, setIcon] = useState("");
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const getCoords = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };

  const setWeatherState = (weatherData) => {
    setLoading(false);
    setTemperature(weatherData.data.main.temp);
    setSunset(weatherData.data.sys.sunset);
    setSunrise(weatherData.data.sys.sunrise);
    setHumidity(weatherData.data.main.humidity);
    setCity(weatherData.data.name);
    setIcon(weatherData.data.weather[0].main);

    axios
      .get(
        `${URL}/onecall?lat=${weatherData.data.coord.lat}&lon=${weatherData.data.coord.lon}&units=metric&exclude=hourly,minutely&appid=${API_KEY}`
      )
      .then((weatherData) => {
        setForecast(weatherData.data.daily);
      })
      .catch((error) => {
        alert(error);
      });
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
        .catch((error) => {
          alert(error);
        });
    } else if (latitude === null || longitude === null) {
      getCoords();
    } else {
      axios
        .get(
          `${URL}/weather?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly,minutely&appid=${API_KEY}`
        )
        .then((weatherData) => {
          setWeatherState(weatherData);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, [latitude, longitude]);

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
        <WeatherCard
          temperature={temperature}
          sunset={sunset}
          sunrise={sunrise}
          humidity={humidity}
          city={city}
          icon={icon}
        />
      )}
      <Forecast forecast={forecast} />
    </div>
  );
}

export default App;
