import React from 'react'
import moment from 'moment'
import utils from '../helpers/Utils'


export default function WeatherCard({weather}) {
  return (
    <div className="weather-card-main">
      <div className="weather-info">
        <div className="weather-city">{weather.city}</div>
        <h5 className="weather-date">{moment().format('MMMM Do YYYY, h:mm a')}</h5>
        <div className="icon-container">{utils.getWeatherIcon(weather.icon)}</div>
      </div>
      <div className="weather-detail">
          <div className="weather-temperature">
            <p>Temperature</p>
            {Math.floor(weather.temperature)} ℃               
          </div>
          <div className="weather-humidity">
            <p>Humidity</p>
            {weather.humidity} %
          </div>
          <div className="weather-sunrise">
            <p>Sunrise</p>
            {new Date(weather.sunrise*1000).toLocaleTimeString('en-IN')}
          </div>
          <div className="weather-sunset">
            <p>Sunset</p>
            {new Date(weather.sunset*1000).toLocaleTimeString('en-IN')}
          </div>
      </div>
    </div>
  )
}
