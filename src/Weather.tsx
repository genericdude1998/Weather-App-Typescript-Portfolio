import React from "react";
import { ICurrentWeather } from "./App";

interface IWeatherProps {
    weather: ICurrentWeather,
}

class Weather extends React.Component<IWeatherProps> {
    public render() {
        return(
            <>
                <h1>{this.props.weather.cloud}</h1>
                <h1>{this.props.weather.temperature}</h1>
            </>
        );
    }
}

export default Weather;