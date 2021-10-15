import React from 'react'
import moment from 'moment'
import utils from '../helpers/Utils'


export default function WeatherCard({temperature, city, sunrise, sunset, humidity, icon}) {
  return (
    <div className="weather-card-main">
      <div className="weather-info">
        <div className="weather-city">{city}</div>
        <h5 className="weather-date">{moment().format('MMMM Do YYYY, h:mm a')}</h5>
        <div className="icon-container">{utils.getWeatherIcon(icon)}</div>
      </div>
      <div className="weather-detail">
          <div className="weather-temperature">
            <p>Temperature</p>
            {Math.floor(temperature)} ℃               
          </div>
          <div className="weather-humidity">
            <p>Humidity</p>
            {humidity} %
          </div>
          <div className="weather-sunrise">
            <p>Sunrise</p>
            {new Date(sunrise*1000).toLocaleTimeString('en-IN')}
          </div>
          <div className="weather-sunset">
            <p>Sunset</p>
            {new Date(sunset*1000).toLocaleTimeString('en-IN')}
          </div>
      </div>
    </div>
  )
}
