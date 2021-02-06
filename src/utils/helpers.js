export function computeWinner(squares) {
    for (let index = 0; index < 3; index++) {
        const columnIndex = index;
        if (squares[columnIndex].value === squares[columnIndex + 3].value && squares[columnIndex].value === squares[columnIndex + 6].value) {
            return squares[columnIndex].value;
        }

        const rowIndex = index * 3;
        if (squares[rowIndex].value === squares[rowIndex + 1].value && squares[rowIndex].value === squares[rowIndex + 2].value) {
            return squares[rowIndex].value;
        }
    }

    if (squares[0].value === squares[4].value && squares[0].value === squares[8].value) {
        return squares[0].value;
    }

    if (squares[2].value === squares[4].value && squares[2].value === squares[6].value) {
        return squares[2].value;
    }

    return null
}

export function computeGameOver(squares) {
    let gameOver = true;
    squares.every(square => {
        if (square.value === null) {
            gameOver = false;
            return false;
        }
        return true;
    });

    return gameOver;
}