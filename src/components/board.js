import React, { Component, useState } from 'react'
import Square from './square'
import './components.css'

const Board = () => {
    const initialSquars = [
        null, null, null,
        null, null, null,
        null, null, null,
    ]
    // const initialSquars = Array(9).fill(null);
    const [squars, setSquars] = useState(initialSquars);
    const [X, setX] = useState(true);

    const handleClickEvent = (i) => {
        const newSquare = [...squars];
        const winnerDeclared = Boolean(calculateWinner(newSquare));
        const squareFilled = Boolean(newSquare[i]);
        if (winnerDeclared || squareFilled) {
            return;
        }
        newSquare[i] = X ? 'X' : 'O';
        setSquars(newSquare);
        setX(!X);
    }
    const winner = calculateWinner(squars);
    const status = winner ?
        `Winner : ${winner}` :
        `Next player : ${X ? 'X' : 'O'}`




    const renderSquare = (i,iswinner) => {
        return (
            <Square 
                value={squars[i]}
                onClickEvent={() => { handleClickEvent(i) }}
                isWinner={isWinner}
            />
        );
    }
    
    return (
        <div className="" >
            <div className="status" >{status}</div>
            <div className="board-row">
                {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
            </div>
        </div>
    );
};
function calculateWinner(squars) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let line of lines) {
        const [a, b, c] = line;
        if (squars[a] && squars[a] === squars[b] && squars[b] === squars[c]) {
            return squars[a];
        }
    }
    return null;
}
export default Board;