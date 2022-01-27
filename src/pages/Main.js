import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWeatherApiKey } from "../etc/Config";
import Nav from "./Nav";

function Main () {

    let [weather, setWeather] = useState('불러오는 중 . . .');
    let [temp, setTemp] = useState('불러오는 중 . . .');
    let [humidity, setHumidity] = useState('불러오는 중 . . .');

    const getWeatherInfo = async (city) => {
        const weatherApiKey = getWeatherApiKey();

        let cityName = 'seoul';

        await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApiKey}`)
        .then(res => {

            let weather_ = res['data']['weather'][0]['main'];
            let temp_ = Math.floor(res['data']['main']['temp'] - 273.15);
            let humidity_ = res['data']['main']['humidity'];

            setWeather(weather_);
            setTemp(temp_);
            setHumidity(humidity_);
        })
    }

    useEffect(() => {

        getWeatherInfo();

        let interval = setInterval(() => {
            getWeatherInfo();
        }, 5000);

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="main-page-container">            
            <img src="backgrounds/bg2.jpg" width={"100%"} height={"100%"} alt=""/>

            <div className="main-page-nav">
                <Nav/>
            </div>

            <div className="main-page-text stop-dragging"><Link to="/about">How are you?</Link></div>
            <div className="main-page-text-weather-weather stop-dragging">서울 현재 날씨: {weather}</div>
            <div className="main-page-text-weather-temp stop-dragging">온도 : {temp}℃</div>
            <div className="main-page-text-weather-humidity stop-dragging">습도 : {humidity}%</div>
        </div>
    )

}

export default Main;