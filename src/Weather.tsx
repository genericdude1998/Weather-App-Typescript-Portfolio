import React from "react";
import styled from "styled-components";
import {ImSpinner} from 'react-icons/im';
import {WiDaySunny, WiCloud, WiDayCloudy, WiDayHail, WiHail, WiThunderstorm, WiSnow, WiFog, WiDayCloudyHigh} from 'react-icons/wi';

interface IWeatherProps {
    cloud: string,
}

const StyledWeather = styled.p`
    margin-top:-20px;
`

class Weather extends React.Component<IWeatherProps> {

    public render() {
        var Icon = ImSpinner;
       switch(this.props.cloud) {
            case 'Clear sky': Icon = WiDaySunny; break;
            case 'Few clouds': Icon = WiDayCloudyHigh;break;
            case 'Scattered clouds': Icon = WiCloud;break;
            case 'Broken clouds': Icon = WiDayCloudy;break;
            case 'Shower rain': Icon = WiDayHail;break;
            case 'Rain': Icon = WiHail;break;
            case 'Thunderstorm': Icon = WiThunderstorm;break;
            case 'Snow': Icon = WiSnow;break;
            case 'Mist': Icon = WiFog;break;
        }
        return(
            <>
                <StyledWeather>{this.props.cloud}</StyledWeather>
                <Icon size={100}></Icon>
            </>
        );
    }
}

export default Weather;