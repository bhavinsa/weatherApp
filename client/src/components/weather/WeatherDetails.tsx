import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const WeatherDetails = (props: { city: any; }) => {
    const city = props.city;
    return (
        <div className="row">

            {city.name ?
                <Card className="weather shadow-lg p-3 mt-3 mb-3 bg-white rounded">
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>City Name: {city.name}</ListGroup.Item>
                            <ListGroup.Item>Current Temperature:  {city.temp} &deg;<small>F</small> </ListGroup.Item>
                            <ListGroup.Item>Minimum Temperature:  {city.tempMin} &deg;<small>F</small></ListGroup.Item>
                            <ListGroup.Item>Maximum Temperature: {city.tempMax} &deg;<small>F</small></ListGroup.Item>
                            <ListGroup.Item>Pressure: {city.pressure}</ListGroup.Item>
                            <ListGroup.Item>Wind: {city.wind} <small>km/h</small></ListGroup.Item>
                            <ListGroup.Item>Description:  {city.description}<img src={'http://openweathermap.org/img/wn/' + city.icon + '.png'} alt="icon"></img></ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
                : ""}
        </div >
    )
}
export default WeatherDetails