import React from "react";
import styled from "styled-components";
import City from "./City";
import SelectCity from "./select-city/SelectCity";
import Weather from "./Weather";

const Container = styled.div` 
    height: 100vh;
    display: flex;
    align-items: space-around;
    flex-direction: column;
    background-color: white; 
`

class App extends React.Component {
    public render() {
        return (
            <Container>
                <SelectCity cities={[
                    'Rome', 'New York', 'Amsterdam',
                    'London', 'Manchester','Berlin',
                    ]}/>
                <City name={'sample_city'} coordinates={'NSWE'}/>
                <Weather weather={'sample_weather'}/>
            </Container>
        );
    }
}

export default App;