import React from "react";
import styled from "styled-components";

interface ITempProps {
    temp: string,
}


const StyledTemp = styled.h1`
    font-size: 10vh;
    margin:-20px;
`

class Temperature extends React.Component<ITempProps> {
    public render() {
        return(
            <StyledTemp>{this.props.temp}</StyledTemp>
        );
    }
}

export default Temperature;