import React, { Component } from 'react'
import './components.css'

class Sort extends Component {
    render() {
        return (
            <button
                className={"sort-button" + (this.props.position ? " desc" : "")}
                onClick={this.props.onClick}
            >
                <SortIcon />
            </button>
        );
    }

}
function SortIcon() {
  return (
    <svg viewBox="0 0 384 512">
      <g>
        <path
          fill="currentColor"
          d="M379.29 132.69l-80-96a16 16 0 00-22.62 0l-80 96C186.65 142.74 193.78 160 208 160h48v304a16 16 0 0016 16h32a16 16 0 0016-16V160h48c14.19 0 21.36-17.24 11.29-27.31z"
          className="secondary"
        ></path>
        <path
          fill="currentColor"
          d="M176 352h-48V48a16 16 0 00-16-16H80a16 16 0 00-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0022.62 0l80-96C197.35 369.26 190.22 352 176 352z"
          className="primary"
        ></path>
      </g>
    </svg>
  );
}
export default Sort;