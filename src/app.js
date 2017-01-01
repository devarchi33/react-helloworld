import React, {Component} from 'react';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.txt}</h1>
            </div>
        )
    }
}