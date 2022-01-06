import React from "react";

interface ISelectCityProps {
    cities: string[],
}

interface ISelectCityState{
    open: boolean,
}

class SelectCity extends React.Component<ISelectCityProps, ISelectCityState> {
    
    constructor(props: ISelectCityProps) {
        super(props);
        this.state = {
            open: false,
        }
        this.openCityList = this.openCityList.bind(this);
    }

    private openCityList(){
        this.setState((prevState) => {
            return {open: !prevState.open}
        })
    }

    public render() {
        const cities = this.props.cities;
        const open = this.state.open;
        return(
            <>
                <button onClick={this.openCityList}>Select City</button>
                {open ? <ul> {cities.map(city => {
                            return <li key={city}>{city}</li>
                            })}
                        </ul>
                :null}
            </>
        );
    }
}

export default SelectCity;