import React from 'react';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <h1>{this.props.results}</h1>
            </div>
        );
    }
}
 
export default Results;