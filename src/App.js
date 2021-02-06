import React, { Component } from 'react';
import './index.css'
import Square from './components/Square'
import { computeWinner, computeGameOver } from './utils/helpers'

class App extends Component {
    state = {
        turn: 'X',
        title: 'Player X',
        gameOver: false,
        squares: [
            { id: 0, value: null, display: '' },
            { id: 1, value: null, display: '' },
            { id: 2, value: null, display: '' },
            { id: 3, value: null, display: '' },
            { id: 4, value: null, display: '' },
            { id: 5, value: null, display: '' },
            { id: 6, value: null, display: '' },
            { id: 7, value: null, display: '' },
            { id: 8, value: null, display: '' },
        ]
    };

    checkAndDisplayWinner = () => {
        const winner = computeWinner(this.state.squares);
        let gameOver = computeGameOver(this.state.squares);
        let title = this.state.title;

        if (winner != null) {
            // Winner available
            const winnerPlayer = (winner === 1) ? 'X' : 'O';
            title = 'Player ' + winnerPlayer + ' wins';
            gameOver = true
        } else if (gameOver) {
            title = 'Game Over';
        }

        this.setState({ gameOver: gameOver, title: title });
    };

    squareChangeHandler = (id) => {
        if (!this.state.gameOver) {
            const squareIndex = this.state.squares.findIndex(s => {
                return s.id === id;
            });

            const square = { ...this.state.squares[squareIndex] };
            if (square.value === null) {

                let newTurn = null;

                if (this.state.turn === 'X') {
                    square.display = 'X';
                    square.value = 1;
                    newTurn = 'O';
                } else {
                    square.display = 'O';
                    square.value = 0;
                    newTurn = 'X';
                }

                const squares = [...this.state.squares];
                squares[squareIndex] = square;

                this.setState({ turn: newTurn, title: 'Player ' + newTurn, squares: squares }, () => {
                    this.checkAndDisplayWinner()
                });
            }
        }
    };

    render() {
        return (
            <div className="main">
                <h1 className="title">{this.state.title}</h1>
                <div className="board-card">
                    <div className="board">
                        {this.state.squares.map(square => {
                            return <Square
                                display={square.display}
                                key={square.id}
                                disabled={this.state.gameOver}
                                clicked={() => this.squareChangeHandler(square.id)} />
                        })}
                    </div>
                </div>
                <p className="footer"><small>👨🏽‍💻 by <a href="https://rishabh.blog" target="_blank" rel="noreferrer">Rishabh Tatiraju</a>. A React.js learning project.</small></p>
            </div>
        );
    };
}

export default App;