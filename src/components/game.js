import React, { Component} from 'react'
import Board from './board'
import './components.css'

class Game extends Component {

    render() {
        return (
            <div className="game">
                Tic Tac Toe
            <Board/>
            </div>
        );
    }

}
export default Game;