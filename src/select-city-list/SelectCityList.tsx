import React from "react";
import styled from "styled-components";


interface ISelectCityListProps{
    cities: string[],
    setCity: (city:string) => void,
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
    color:white;
    background-color:royalblue;
    width: 100%;
    min-width:100px;
    height: 20vh;
    text-align: center;
    line-height: 600%;
    box-shadow: 5px 5px #888888;
    margin: 10px;
`

class SelectCityList extends React.Component<ISelectCityListProps>{
    
    public render(){
        const {cities, setCity} = this.props;
        return(
            <StyledList> {cities.map(city => {
                return <StyledElement 
                    key={city}
                    onClick={() => setCity(city)}
                    >
                        {city}
                    </StyledElement>
                })}
            </StyledList>
        )
    }
}


export default SelectCityList;