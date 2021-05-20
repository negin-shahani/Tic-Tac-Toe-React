import React,{ Component} from 'react'
import './components.css'
import Button from '@material-ui/core/Button';

class Square extends Component {
    render() { 
        return (
            <Button className={"square" + (this.props.isWinner ? " winner" : "")}
                onClick={this.props.onClick}>
                {this.props.value} 
            </Button>
        );
    }

}
export default Square;