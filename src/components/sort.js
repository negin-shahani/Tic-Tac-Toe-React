import React, { Component } from 'react'
import './components.css'

class Sort extends Component {
    render() {
        return (
            <button
                className={"sort-button" + (this.props.position ? " desc" : "")}
                onClick={this.props.onClick}
            >
                <SortingIcon />
            </button>
        );
    }

}

export default Sort;