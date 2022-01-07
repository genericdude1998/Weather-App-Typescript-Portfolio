import React from "react";

interface ICityProps {
    name: string;
}

class City extends React.Component<ICityProps> {

    public static defaultProps = {
        name:'Rome',
    }

    public render() {
        return(
            <>
                <h1>{this.props.name}</h1>
            </>
        );
    }
}

export default City;