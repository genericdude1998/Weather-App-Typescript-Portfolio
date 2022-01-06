import React from "react";
import styled from "styled-components";


interface ISelectCityProps{
    cities:string[],
}
    const StyledList = styled.div`
        background-color: white;
        width: 80%;
        display: inline-flex;
        justify-content: space-around;
        list-style:none;
        overflow: hidden;
        flex-grow: 10;
        white-space: nowrap;
    `

const StyledElement = styled.div`
    background-color:red;
    width: 100%;
    height: 20vh;
    text-align: center;
    line-height: 600%;
    box-shadow: 5px 5px #888888;
    margin: 10px;
`

class SelectCityList extends React.Component<ISelectCityProps>{
    
    public render(){
        const {cities} = this.props;
        return(
            <StyledList> {cities.map(city => {
                return <StyledElement key={city}>{city}</StyledElement>
                })}
            </StyledList>
        )
    }
}


export default SelectCityList;