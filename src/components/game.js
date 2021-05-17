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
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        const winnerDeclared = Boolean(calculateWinner(squares));
        const squareFilled = Boolean(squares[i]);
        if (winnerDeclared || squareFilled) {
            return;
        }

        squares[i] = this.state.xIsNext ? "X" : "O";

        this.setState({
            history: history.concat([
                {
                    squares,
                    lastMove: calculateMovePosition(i)
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        let Draw = isDraw(current.squares);

        let status;
        let line;
        if (winner) {
            status = "Winner: " + winner.winner;
            line = winner.line;
            Draw = false;
        } else if (Draw) {
            status = "Draw!";
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        const moves = history.map((moveArray, moveindex) => {
            const lable = moveindex ? `Go to move #${moveindex}` : "Go to game start";
            const colRowInfo = moveArray.lastMove[0]
                ? `col:${moveArray.lastMove[0]}, row:${moveArray.lastMove[1]}`
                : null;

            return (
                <li
                    key={moveindex}
                    className={moveindex === this.state.stepNumber ? "active" : null}
                >
                    <button onClick={() => this.jumpTo(moveindex)}>
                        {lable}
                        {colRowInfo ? <span>{colRowInfo}</span> : null}
                    </button>
                </li>
            );
        });
        
        return (
            <div className="game">
                <div className="game-board-wrapper">
                    <Board
                        className={"game-board" + (Draw ? " draw" : "")}
                        squares={current.squares}
                        line={line}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
            </div>
        );
    }
}
function isDraw(squares) {
    const nullFinder = squares.filter(x => x === null);
    return nullFinder.length === 0;
}
function calculateMovePosition(i) {
    const row = Math.floor(i / 3) + 1;
    const col = (i % 3) + 1;
    return [row, col];
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return {
                winner: squares[a],
                line: lines[i]
            };
        }
    }
    return null;
}
export default Game;