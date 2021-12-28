import '../styles/Board.css';

import { useState } from 'react';

export default function Board() {
    const [board, setBoard] = useState<(''|'X'|'O')[]>(Array(9).fill(''));

    function handleSquareClick(index: number) {
        let updatedBoard = [...board];
        updatedBoard[index] = 'X';
        setBoard(updatedBoard);
    }

    return (
        <div className="board-container">
            <table className="board">
                <tbody>
                    <tr>
                        <td className={`board-square  r1 c1 ${board[0] === '' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(0)}>{ board[0] }</td>
                        <td className={`board-square r1 c2  ${board[1] === '' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(1)}>{ board[1] }</td>
                        <td className={`board-square r1 ${board[2] === '' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(2)}>{ board[2] }</td>
                    </tr>
                    <tr>
                        <td className={`board-square r2 c1 ${board[3] === '' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(3)}>{ board[3] }</td>
                        <td className={`board-square r2 c2 ${board[4] === '' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(4)}>{ board[4] }</td>
                        <td className={`board-square r2 ${board[5] === '' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(5)}>{ board[5] }</td>
                    </tr>
                    <tr>
                        <td className={`board-square c1 ${board[6] === '' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(6)}>{ board[6] }</td>
                        <td className={`board-square c2 ${board[7] === '' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(7)}>{ board[7] }</td>
                        <td className={`board-square ${board[8] === '' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(8)}>{ board[8] }</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}