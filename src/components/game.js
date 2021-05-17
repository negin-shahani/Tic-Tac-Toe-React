import React, { Component } from 'react'
import Board from './board'
import './components.css'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null),
                    lastMove: Array(2).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true,
            sortDesc: false
        };
    }
    
    render() {
        return (
            <div className="game">
                Tic Tac Toe
            <Board />
            </div>
        );
    }

}
export default Game;