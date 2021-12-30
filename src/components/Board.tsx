import '../styles/Board.css';

import BoardProps from '../Types/BoardProps';

export default function Board(props: BoardProps) {
    const { board, setBoard, settings, gameStatus } = props;

    function handleSquareClick(index: number) {
        if (gameStatus === 'INCOMPLETE') {
            let updatedBoard = [...board];
            updatedBoard[index] = settings.team.toUpperCase() as ('X'|'O');
            setBoard(updatedBoard);
        }
    }

    return (
        <div className="board-container">
            <table className="board">
                <tbody>
                    <tr>
                        <td className={`board-square  r1 c1 ${board[0] === '' && gameStatus === 'INCOMPLETE' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(0)}>{ board[0] }</td>
                        <td className={`board-square r1 c2  ${board[1] === '' && gameStatus === 'INCOMPLETE' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(1)}>{ board[1] }</td>
                        <td className={`board-square r1 ${board[2] === '' && gameStatus === 'INCOMPLETE' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(2)}>{ board[2] }</td>
                    </tr>
                    <tr>
                        <td className={`board-square r2 c1 ${board[3] === '' && gameStatus === 'INCOMPLETE' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(3)}>{ board[3] }</td>
                        <td className={`board-square r2 c2 ${board[4] === '' && gameStatus === 'INCOMPLETE' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(4)}>{ board[4] }</td>
                        <td className={`board-square r2 ${board[5] === '' && gameStatus === 'INCOMPLETE' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(5)}>{ board[5] }</td>
                    </tr>
                    <tr>
                        <td className={`board-square c1 ${board[6] === '' && gameStatus === 'INCOMPLETE' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(6)}>{ board[6] }</td>
                        <td className={`board-square c2 ${board[7] === '' && gameStatus === 'INCOMPLETE' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(7)}>{ board[7] }</td>
                        <td className={`board-square ${board[8] === '' && gameStatus === 'INCOMPLETE' ? 'clickable-square' : ''}`} onClick={() => handleSquareClick(8)}>{ board[8] }</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}