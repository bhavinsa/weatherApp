import React, { useEffect, useState, Fragment, useCallback } from 'react'
import axios, { AxiosResponse } from 'axios';
import { cityNames, API_URL } from '../constant/constant';
import WeatherList from './WeatherList';
import WeatherDetails from './WeatherDetails';

export const Weather = () => {
    const [weatherData, setWeatherData] = useState<AxiosResponse | null | void>(null);
    const [city, setCity] = useState({ name: '', temp: '', tempMin: '', tempMax: '', pressure: '', humidity: '', icon: '', wind: '', description: '' })

    let cityIds: number[] = [];
    cityNames.filter(item => cityIds.push(Number(item.id)));

    const getWeatherData = useCallback(() => {
        axios.post(API_URL, { "cityIds": cityIds }).then(res => {
            setWeatherData(res);
        }).catch(err => {
            alert('Please try after sometime, We are facing some issue');
        });
    }, [setWeatherData, cityIds])


    useEffect(() => {
        getWeatherData();
        return function () {
        };
    }, []);


    const getData = (cityId?: string) => {
        const data = weatherData ? weatherData.data.list : [];
        if(data){
        const cityData = data.find((item: { id: string; }) => Number(item.id) === Number(cityId));
        console.log(cityData);
        if (cityData) {
            setCity(prevState => ({
                ...prevState,
                name: cityData.name,
                temp: cityData['main'].temp,
                tempMin: cityData['main'].temp_min,
                tempMax: cityData['main'].temp_max,
                pressure: cityData['main'].pressure,
                humidity: cityData['main'].humidity,
                wind: cityData['wind'].speed,
                icon: cityData['weather'][0].icon,
                description: cityData['weather'][0].description
            }));
        }
    }
    }

    return (
        <Fragment>
            <WeatherList getData={getData} cityList={cityNames}></WeatherList>
            <WeatherDetails city={city}></WeatherDetails>
        </Fragment>
    )
}
export default Weather