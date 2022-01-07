import axios from "axios";
import React from "react";
import styled from "styled-components";
import City from "./City";
import SelectCity from "./select-city/SelectCity";
import Weather from "./Weather";
import {WiDayHail, WiCloud} from 'react-icons/wi';
import Temperature from "./Temperature";
import Global from "./global";

export interface ICurrentWeather {
    cloud:string,
    temperature: string,
}

interface IState {
    cities: string[],
    currentCity:string,
    currentWeather: ICurrentWeather,
}

const Container = styled.div` 
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: white; 
`

class App extends React.Component<{}, IState> {
    state = {
        cities: ['Rome', 'New York', 'Amsterdam','London', 'Manchester','Berlin',],
        currentCity: 'Rome',
        currentWeather:{
            cloud:'Cloudy',
            temperature:'9'
        }
    }

    componentDidMount(){
        const city = this.state.cities[0];
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0202cadc7f22d242d14160b50c9d955c`).then(
            res => {
                console.log(res);
                const baseStringCloud = res.data.weather[0].description;
                const newCloud = baseStringCloud.charAt(0).toUpperCase() + baseStringCloud.slice(1);
                const newCurrentWeather: ICurrentWeather = {
                    cloud: newCloud,
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
                const baseStringCloud = res.data.weather[0].description;
                const newCloud = baseStringCloud.charAt(0).toUpperCase() + baseStringCloud.slice(1);

                const newCurrentWeather: ICurrentWeather = {
                    cloud: newCloud,
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
            <Container>
                <SelectCity 
                    cities={cities}
                    setCity = {this.setCity}
                />
                <City name={currentCity} />
                <Weather cloud={this.state.currentWeather.cloud}/>
                <Temperature temp={currentWeather.temperature}/>
            </Container>
            </>
        );
    }
}

export default App;