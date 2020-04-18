import React from 'react'
import { Card, Button } from 'react-bootstrap'

const WeatherList = (props: any) => {
    return (
        <div className="row weatherList">
            {props.cityList.map((item: any) => {
                return <div key={item.id} className="col-md-4 col-sm-12 list">
                    <Card className="cardList shadow-sm p-2 mb-2 bg-white rounded">
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Button onClick={() => props.getData(item.id)} variant="primary">Get Temperature</Button>
                        </Card.Body>
                    </Card>
                </div>
            })}
        </div>
    )
}

export default WeatherList
