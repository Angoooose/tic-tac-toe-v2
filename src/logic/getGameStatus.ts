import BoardValue from '../Types/BoardValue';
import GameStatus, { VictoryStatus } from '../Types/GameStatus';
import { Teams } from '../Types/GameSettings';

export default function getGameStatus(board: BoardValue[], team: Teams): GameStatus {
    if (victoryStatus() !== null) {
        return victoryStatus() as GameStatus;
    } else if (isDraw()) {
        return 'DRAW';
    } else {
        return 'INCOMPLETE';
    }

    function victoryStatus(): VictoryStatus {
        if (board[0] === board[1] && board[0] === board[2]) {
            if (board[0] !== '' && board[1] !== '' && board[2] !== '') return checkCell(0);
        } 

        if (board[3] === board[4] && board[3] === board[5]) {
            if (board[3] !== '' && board[4] !== '' && board[5] !== '') return checkCell(3);
        } 

        if (board[6] === board[7] && board[6] === board[8]) {
            if (board[6] !== '' && board[7] !== '' && board[8] !== '') return checkCell(6);
        }

        if (board[0] === board[3] && board[0] === board[6]) {
            if (board[0] !== '' && board[3] !== '' && board[6] !== '') return checkCell(0);
        }

        if (board[1] === board[4] && board[1] === board[7]) {
            if (board[1] !== '' && board[4] !== '' && board[7] !== '') return checkCell(1);
        }

        if (board[2] === board[5] && board[2] === board[8]) {
            if (board[2] !== '' && board[5] !== '' && board[8] !== '') return checkCell(2);
        }

        if (board[0] === board[4] && board[0] === board[8]) {
            if (board[0] !== '' && board[4] !== '' && board[8] !== '') return checkCell(0,);
        }

        if (board[2] === board[4] && board[2] === board[6]) {
            if (board[2] !== '' && board[4] !== '' && board[6] !== '') return checkCell(2);
        }

        return null;
      
        function checkCell(index: number): VictoryStatus {
            if (board[index] === team.toUpperCase()) {
                return 'WIN';
            } else {
                return 'LOSE';
            }
        }
    }
    
    function isDraw(): boolean {
        return board.every(cell => cell !== '');
    }
}