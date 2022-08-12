import React, { Component } from "react";
import { ReactDOM } from "react-dom";


class MyComponent extends Component {
constructor(props) {
    super() 
        this.state = {
            color: 'red',
            name: 'Mark',
            isParagraphRendered: false
        }
    
}

    render() {
        return <>
        
        <div>{this.state.color}</div>
        <div>{this.props.name}</div></>
    }
}

export default MyComponent;