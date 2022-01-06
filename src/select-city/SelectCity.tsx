import React from "react";
import StyledList from "../select-city-list/SelectCityList";
import styled from "styled-components";
import {BsArrowLeftCircleFill} from 'react-icons/bs';
import {BsArrowRightCircleFill} from 'react-icons/bs';


interface ISelectCityProps {
    cities: string[],
}

interface ISelectCityState{
    index: number,
}

const Container = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    overflow: hidden;
`

class SelectCity extends React.Component<ISelectCityProps, ISelectCityState> {
    
    constructor(props: ISelectCityProps) {
        super(props);
        this.state = {
            index: 0,
        }
        this.scrollRight = this.scrollRight.bind(this);
        this.scrollLeft = this.scrollLeft.bind(this);
    }

    private scrollRight(){
        this.setState((prevState) => {
            if(prevState.index !== 1){
                return {index: prevState.index + 1};
            }
        })
    }

    private scrollLeft(){
        this.setState((prevState) => {
            if(prevState.index === 1){
                return {index: prevState.index - 1};
            }
        })
    }

    public render() {
        const cities = this.state.index === 0 ? this.props.cities.slice(0,3)
        :
        this.props.cities.slice(3,6);
        return(
            <Container>
                <BsArrowLeftCircleFill size={20} onClick={this.scrollLeft}/>
                <StyledList cities={cities}/>
                <BsArrowRightCircleFill size={20} onClick={this.scrollRight}/> 
            </Container>
        );
    }
}

export default SelectCity;