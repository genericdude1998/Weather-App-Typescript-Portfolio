import React from "react";

interface ICityProps {
    name: string;
    coordinates: string;
}

class City extends React.Component<ICityProps> {
    public render() {
        return(
            <>
                <h1>{this.props.name}</h1>
                <p>{this.props.coordinates}</p>
            </>
        );
    }
}

export default City;