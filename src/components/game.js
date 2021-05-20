import React, { Component } from 'react'
import Board from './board'
import './components.css'
import Sort from './sort'

import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import GitHubIcon from '@material-ui/icons/GitHub';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


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
            sortDesc: false,
            showError: false
        };
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        const winnerDeclared = Boolean(calculateWinner(squares));
        const squareFilled = Boolean(squares[i]);
        if (winnerDeclared || squareFilled) {
            this.setState({
                showError: true
            });
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
    jumpTo(step) {
        const next = step % 2 === 0;
        this.setState({
            stepNumber: step,
            xIsNext: next
        });
    }
    handleClickOnSorting(pos) {
        this.setState({
            sortDesc: !pos
        });
    }

    hideShowError() {
        this.setState({
            showError: false
        });
    }
    DescriptionAlerts() {
        return (
            <Alert severity="error"
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            this.hideShowError()
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }>
                <AlertTitle>Error: you should pick the empty squares!</AlertTitle>
            </Alert>
        );
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
        if (this.state.sortDesc) {
            moves.reverse();
        }
        return (
            <div>
                <div className="game">
                    <Typography variant="headline" className="Header" align="center">
                        Tic Tac Toe
                        <SportsEsportsIcon fontSize="inherit" />
                    </Typography>
                    <Typography variant="headline" className="Help" align="center">
                        
                    </Typography>
                    <input id="sidebar-toggle" type="checkbox" />
                    <div className="game-control">
                        <div>
                            <span className="game-control-info">{status}</span>
                            <label htmlFor="sidebar-toggle" className="more-button">
                                <span>moves</span>
                                <span>close</span>
                            </label>
                        </div>
                    </div>
                    <div className="game-board-wrapper">
                        <Board
                            className={"game-board" + (Draw ? " draw" : "")}
                            squares={current.squares}
                            line={line}
                            onClick={i => this.handleClick(i)}
                        />
                    </div>
                    <div className="game-sidebar">
                        <div className="game-sidebar-status">
                            {status}
                            <Sort
                                position={this.state.sortDesc}
                                onClick={() => this.handleClickOnSorting(this.state.sortDesc)}
                            />
                        </div>
                        <ul>{moves}</ul>
                    </div>
                    {this.state.showError ? <div>{this.DescriptionAlerts()}</div> : null}

                </div>
                <footer className="footer">
                    <Container maxWidth="sm">
                        <Typography variant="body1">All Rights Reserved</Typography>
                        <Copyright />
                    </Container>
                </footer>
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
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            {' '}
            {new Date().getFullYear()}
            {'.'}
            <Link color="inherit" href="https://github.com/negin-shahani/Tic-Tac-Toe-React">
                You can find my code in github  <GitHubIcon fontSize="inherit" />
            </Link>
        </Typography>
    );
}
export default Game;