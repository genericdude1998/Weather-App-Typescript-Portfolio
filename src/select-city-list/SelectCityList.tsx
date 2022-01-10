import React from "react";
import styled from "styled-components";
import media from "styled-media-query";


interface ISelectCityListProps{
    cities: string[],
    setCity: (city:string) => void,
}
    const StyledList = styled.div`
        width: 80%;
        display: inline-flex;
        justify-content: space-around;
        list-style:none;
        overflow: hidden;
        flex-grow: 10;
        white-space: nowrap;
    `

const StyledElement = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 50px;
    color:white;
    background-color:darkblue;
    width: 20vw;
    min-width:100px;
    min-height: 100px;
    height: 20vh;
    text-align: center;
    box-shadow: 5px 5px #888888;
    margin: 10px;
    &:hover{
            transform: scale(1.1,1.1);
    }
    ${media.lessThan('large')`
        height: 100px;
        font-size: 30px;
    `}
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