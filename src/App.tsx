import React from "react";
import City from "./City";
import SelectCity from "./SelectCity";
import Weather from "./Weather";

class App extends React.Component {
    public render() {
        return (
            <div>
                <City name={'sample_city'} coordinates={'NSWE'}/>
                <Weather weather={'sample_weather'}/>
                <SelectCity cities={['rome', 'new york']}/>
            </div>
        );
    }
}

export default App;