import React, { Component} from 'react'
import Board from './board'

class Square extends Component {
    render() {
        return (
            <div className="game">
                Tic Tac Toe
            <Board/>
            </div>
        );
    }

}
export default Square;