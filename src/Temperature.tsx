import React from "react";
import styled from "styled-components";
import {WiCelsius} from 'react-icons/wi';

interface ITempProps {
    temp: string,
}

const Container = styled.div`
    display:flex;
    align-items:center;
`

const StyledTemp = styled.h1`
    font-size: 10vh;
    margin-right:-10px;
`

const StyledIconTemp = styled(WiCelsius)`
    margin-left:-0px;
`

class Temperature extends React.Component<ITempProps> {
    public render() {
        return(
            <Container>
                <StyledTemp>{this.props.temp}</StyledTemp>
                <StyledIconTemp size={50}/>
            </Container>
        );
    }
}

export default Temperature;