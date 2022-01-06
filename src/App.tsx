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
    background-color: green; 
`

class App extends React.Component {
    public render() {
        return (
            <Container>
                <SelectCity cities={['rome', 'new york']}/>
                <City name={'sample_city'} coordinates={'NSWE'}/>
                <Weather weather={'sample_weather'}/>
            </Container>
        );
    }
}

export default App;