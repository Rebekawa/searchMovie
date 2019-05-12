import React from 'react';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <img src=''></img>
                <h1>{this.props.movie}</h1>
            </div>
        );
    }
}
 
export default Results;