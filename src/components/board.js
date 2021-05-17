import React, { Component, useState } from 'react'
import Square from './square'
import './components.css'

class Board extends Component {
    
    renderSquare(i, iswinner) {
        return (
            <Square
                value={this.props.squares[i]}
                key={"square-" + i}
                onClick={() => this.props.onClick(i)}
                isWinner={iswinner}
            />
        );
    }

    createBoard() {
        let rows = [];

        for (let i = 1; i < 4; i++) {
            let col = [];

            for (let j = 1; j < 4; j++) {
                const index = i * 3 + j - 4;
                let isWinner = false;

                if (Array.isArray(this.props.line) && this.props.line.includes(index)) {
                    isWinner = true;
                }
                col.push(this.renderSquare(index, isWinner));
            }
            rows.push(
                <div key={"row-" + i} className="board-row">
                    {col}
                </div>
            );
        }

        return rows;
    }
    render() {
        return (
            <div className="" >
                {/* <div className="status" >{status}</div> */}
                <div className={this.props.className}>{this.createBoard()}</div>
            </div>
        );
    }

};

export default Board;