import React from "react";
import styled from "styled-components";


interface ISelectCityProps{
    cities:string[],
}

class SelectCityList extends React.Component<ISelectCityProps>{
    
    public render(){
        const {cities} = this.props;
        return(
            <StyledList> {cities.map(city => {
                return <li key={city}>{city}</li>
                })}
            </StyledList>
        )
    }
}

const StyledList = styled.ul`
    background-color: red;
    width: 30vw;
    display: flex;
    justify-content: space-between;
`

export default SelectCityList;