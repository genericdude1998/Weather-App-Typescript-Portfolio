import React from "react";
import styled from "styled-components";

interface IWeatherProps {
    cloud: string,
}

const StyledWeather = styled.p`
    margin-top:-20px;
`

class Weather extends React.Component<IWeatherProps> {
    public render() {
        return(
            <StyledWeather>{this.props.cloud}</StyledWeather>
        );
    }
}

export default Weather;