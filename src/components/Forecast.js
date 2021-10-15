import React from 'react';
import { Card } from 'semantic-ui-react';
import moment from 'moment';
import utils from '../helpers/Utils'

export default function Forecast({ forecast }) {
    return (
        <div class="forecast">
            <Card.Group itemsPerRow={8} className="forecast">
                {forecast.map((data) => {
                    return (
                        <Card className="forecast-card">
                            <Card.Content>
                                <Card.Header className="forecast-content">
                                    {moment.unix(data.dt).format('DD.MM')}
                                </Card.Header>
                                <Card.Header className="forecast-content">
                                    {Math.round((data.temp.max + data.temp.min) / 2)} ℃
                                </Card.Header>
                                <Card.Meta className="forecast-content">
                                    {data.humidity} %
                                </Card.Meta>
                                <Card.Description className="forecast-content">
                                    {utils.getWeatherIcon(data.weather[0].main)}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    )
                })}
            </Card.Group>
        </div>
    )
}