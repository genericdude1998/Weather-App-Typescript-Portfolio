import React from "react";
import styled from "styled-components";
import {ImCodepen, ImSpinner} from 'react-icons/im';
import {WiDaySunny, WiCloud, WiDayCloudy, WiDayHail, WiHail, WiThunderstorm, WiSnow, WiFog} from 'react-icons/wi';

interface IWeatherProps {
    desc: string,
}

const StyledWeather = styled.p`
    margin: 40px;
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
            case 'Haze': Icon = WiFog;break;
            default: Icon = WiFog;  
        }
        return(
            <>
                <StyledWeather>{this.props.desc}</StyledWeather>
                <Icon size={200}></Icon>
            </>
        );
    }
}

export default Weather;