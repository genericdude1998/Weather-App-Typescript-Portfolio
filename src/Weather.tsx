import React from "react";

interface IWeatherProps {
    weather:string,
}

class Weather extends React.Component<IWeatherProps> {
    public render() {
        return(
            <>
                <h1>{this.props.weather}</h1>
            </>
        );
    }
}

export default Weather;