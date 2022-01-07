import axios from "axios";
import React from "react";
import styled from "styled-components";
import City from "./City";
import SelectCity from "./select-city/SelectCity";
import Weather from "./Weather";
import {WiDayHail, WiCloud} from 'react-icons/wi';
import Temperature from "./Temperature";
import Global from "./global";

import Clear from '../assets/Clear.jpg';
import Clouds from '../assets/Clouds.jpg';
import Fog from '../assets/Fog.jpg';

export interface ICurrentWeather {
    desc:string,
    temperature: string,
}

interface IState {
    cities: string[],
    currentCity:string,
    currentWeather: ICurrentWeather,
}

interface IContainerProps{
    desc:string;
}

const Container = styled.div<IContainerProps>`
    margin:0px;
    background-image: ${
    props => {
        switch (props.desc) {
            case 'ThunderStorm': return `url(${Clouds})`;
            case 'Drizzle': return `url(${Clouds})`;
            case 'Rain': return `url(${Clouds})`;
            case 'Clouds': return `url(${Clouds})`;
            case 'Clear': return `url(${Clear})`;
            case 'Clear': return `url(${Clear})`;
            default: return `url(${Fog})`;
        }
    }};
    background-size: 100vw 100vh;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`

class App extends React.Component<{}, IState> {
    state = {
        cities: ['Rome', 'New York', 'Amsterdam','London', 'Manchester','Berlin',],
        currentCity: 'Rome',
        currentWeather:{
            desc:'Cloudy',
            temperature:'9'
        }
    }

    componentDidMount(){
        const city = this.state.cities[0];
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0202cadc7f22d242d14160b50c9d955c`).then(
            res => {
                console.log(res);
                const baseStringDesc = res.data.weather[0].main;
                const newDesc = baseStringDesc.charAt(0).toUpperCase() + baseStringDesc.slice(1);
                const newCurrentWeather: ICurrentWeather = {
                    desc: newDesc,
                    temperature: Math.ceil(res.data.main.temp - 273.15).toString(), 
                }

                this.setState({currentWeather: newCurrentWeather});
            });
    }

    componentDidUpdate(prevProps:{}, prevState:IState){
        if(prevState.currentCity !== this.state.currentCity){
            const city = this.state.currentCity;
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0202cadc7f22d242d14160b50c9d955c`).then(
            res => {
                console.log(res);
                const baseStringDesc = res.data.weather[0].main;
                const newDesc = baseStringDesc.charAt(0).toUpperCase() + baseStringDesc.slice(1);

                const newCurrentWeather: ICurrentWeather = {
                    desc: newDesc,
                    temperature: Math.ceil(res.data.main.temp - 273.15).toString(), 
                }

                this.setState({currentWeather: newCurrentWeather});
        });
        }
    }

    setCity = (city:string) => this.setState({currentCity: city})

    public render() {
        const {cities, currentCity, currentWeather} = this.state;
        
        return (
            <>
            <Global/>
            <Container desc={currentWeather.desc}>
                <SelectCity 
                    cities={cities}
                    setCity = {this.setCity}
                />
                <City name={currentCity} />
                <Weather desc={this.state.currentWeather.desc}/>
                <Temperature temp={currentWeather.temperature}/>
            </Container>
            </>
        );
    }
}

export default App;