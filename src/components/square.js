import React,{ Component} from 'react'
import './components.css'

class Square extends Component {
    render() {
        
        return (
            <button className="square"
                onClick={this.props.onClickEvent}>
                {this.props.value} 
            </button>
        );
    }

}
export default Square;