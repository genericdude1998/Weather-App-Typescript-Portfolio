import React from "react";
import { StyledSelectCityButton } from "../select-city-button/SelectCityButton";
import StyledList from "../select-city-list/SelectCityList";

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
                <StyledSelectCityButton onClick={this.openCityList}>Select City</StyledSelectCityButton>
                {open ? <StyledList cities={cities}/>
                :null}
            </>
        );
    }
}

export default SelectCity;