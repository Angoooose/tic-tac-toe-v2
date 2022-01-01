import BoardValue from '../Types/BoardValue';
import { Teams } from '../Types/GameSettings';

export default function checkDefensiveMove(board: BoardValue[], playerTeam: Teams): number {
    let defensiveMove: number = -1;

    if ((board[1] === playerTeam && board[2] === playerTeam && board[0] === '') || (board[6] === playerTeam && board[3] === playerTeam && board[0] === '') || (board[8] === playerTeam && board[4] === playerTeam && board[0] === '')) {
        defensiveMove = 0;
    } else if ((board[0] === playerTeam && board[2] === playerTeam && board[1] === '') || (board[7] === playerTeam && board[4] === playerTeam && board[1] === '')) {
        defensiveMove = 1;
    } else if ((board[0] === playerTeam && board[1] === playerTeam && board[2] === '') || (board[8] === playerTeam && board[5] === playerTeam && board[2] === '') || (board[6] === playerTeam && board[4] === playerTeam && board[2] === '')) {
        defensiveMove = 2;
    } else if ((board[4] === playerTeam && board[5] === playerTeam && board[3] === '') || (board[6] === playerTeam && board[0] === playerTeam && board[3] === '')) {
        defensiveMove = 3;
    } else if ((board[3] === playerTeam && board[5] === playerTeam && board[4] === '') || (board[7] === playerTeam && board[1] === playerTeam && board[4] === '') || (board[0] === playerTeam && board[8] === playerTeam && board[4] === '') || (board[6] === playerTeam && board[2] === playerTeam && board[4] === '')) {
        defensiveMove = 4;
    } else if ((board[3] === playerTeam && board[4] === playerTeam && board[5] === '') || (board[8] === playerTeam && board[2] === playerTeam && board[5] === '')) {
        defensiveMove = 5;
    } else if ((board[7] === playerTeam && board[8] === playerTeam && board[6] === '') || (board[0] === playerTeam && board[3] === playerTeam && board[6] === '') || (board[2] === playerTeam && board[4] === playerTeam && board[6] === '')) {
        defensiveMove = 6;
    } else if ((board[6] === playerTeam && board[8] === playerTeam && board[7] === '') || (board[1] === playerTeam && board[4] === playerTeam && board[7] === '')) {
        defensiveMove = 7;
    } else if ((board[6] === playerTeam && board[7] === playerTeam && board[8] === '') || (board[2] === playerTeam && board[5] === playerTeam && board[8] === '') || (board[0] === playerTeam && board[4] === playerTeam && board[8] === '')) {
        defensiveMove = 8;
    }

    return defensiveMove;
}