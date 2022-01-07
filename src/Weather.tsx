import React from "react";
import styled from "styled-components";
import {ImCodepen, ImSpinner} from 'react-icons/im';
import {WiDaySunny, WiCloud, WiDayCloudy, WiDayHail, WiHail, WiThunderstorm, WiSnow, WiFog, WiDayCloudyHigh} from 'react-icons/wi';

interface IWeatherProps {
    desc: string,
}

const StyledWeather = styled.p`
    margin-top:-20px;
`

class Weather extends React.Component<IWeatherProps> {

    public render() {
        var Icon = ImSpinner;
       switch(this.props.desc) {
            case 'Clear': Icon = WiDaySunny; break;
            case 'Clouds': Icon = WiDayCloudy;break;
            case 'Drizzle': Icon = WiDayHail;break;
            case 'Rain': Icon = WiHail;break;
            case 'Thunderstorm': Icon = WiThunderstorm;break;
            case 'Snow': Icon = WiSnow;break;
            case 'Atmosphere': Icon = WiFog;break;
        }
        return(
            <>
                <StyledWeather>{this.props.desc}</StyledWeather>
                <Icon size={100}></Icon>
            </>
        );
    }
}

export default Weather;