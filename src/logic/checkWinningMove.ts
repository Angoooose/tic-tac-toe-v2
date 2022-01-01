import BoardValue from '../Types/BoardValue';
import { Teams } from '../Types/GameSettings';

export default function checkWinningMove(board: BoardValue[], cpuTeam: Teams): number {
    let winningMove: number = -1;

    if ((board[1] === cpuTeam && board[2] === cpuTeam && board[0] === '') || (board[6] === cpuTeam && board[3] === cpuTeam && board[0] === '') || (board[8] === cpuTeam && board[4] === cpuTeam && board[0] === '')) {
        winningMove = 0;
    } else if ((board[0] === cpuTeam && board[2] === cpuTeam && board[1] === '') || (board[7] === cpuTeam && board[4] === cpuTeam && board[1] === '')) {
        winningMove = 1;
    } else if ((board[0] === cpuTeam && board[1] === cpuTeam && board[2] === '') || (board[8] === cpuTeam && board[5] === cpuTeam && board[2] === '') || (board[6] === cpuTeam && board[4] === cpuTeam && board[2] === '')) {
        winningMove = 2;
    } else if ((board[4] === cpuTeam && board[5] === cpuTeam && board[3] === '') || (board[6] === cpuTeam && board[0] === cpuTeam && board[3] === '')) {
        winningMove = 3;
    } else if ((board[3] === cpuTeam && board[5] === cpuTeam && board[4] === '') || (board[7] === cpuTeam && board[1] === cpuTeam && board[4] === '') || (board[0] === cpuTeam && board[8] === cpuTeam && board[4] === '') || (board[6] === cpuTeam && board[2] === cpuTeam && board[4] === '')) {
        winningMove = 4;
    } else if ((board[3] === cpuTeam && board[4] === cpuTeam && board[5] === '') || (board[8] === cpuTeam && board[2] === cpuTeam && board[5] === '')) {
        winningMove = 5;
    } else if ((board[7] === cpuTeam && board[8] === cpuTeam && board[6] === '') || (board[0] === cpuTeam && board[3] === cpuTeam && board[6] === '') || (board[2] === cpuTeam && board[4] === cpuTeam && board[6] === '')) {
        winningMove = 6;
    } else if ((board[6] === cpuTeam && board[8] === cpuTeam && board[7] === '') || (board[1] === cpuTeam && board[4] === cpuTeam && board[7] === '')) {
        winningMove = 7;
    } else if ((board[6] === cpuTeam && board[7] === cpuTeam && board[8] === '') || (board[2] === cpuTeam && board[5] === cpuTeam && board[8] === '') || (board[0] === cpuTeam && board[4] === cpuTeam && board[8] === '')) {
        winningMove = 8;
    }

    return winningMove;
}