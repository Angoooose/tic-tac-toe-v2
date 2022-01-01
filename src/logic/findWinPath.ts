import BoardValue from '../Types/BoardValue';
import { Teams } from '../Types/GameSettings';

export default function findWinPath(board: BoardValue[], playerTeam: Teams): number {
    let optimalWinPath: number[] = [-1];

    const r1: number[] = [0, 1, 2];
    const r2: number[] = [3, 4, 5];
    const r3: number[] = [6, 7, 8];
    const c1: number[] = [0, 3, 6];
    const c2: number[] = [1, 4, 7];
    const c3: number[] = [2, 5, 8];
    const diagDown: number[] = [0, 4, 8];
    const diagUp: number[] = [6, 4, 2];

    if (board[0] !== playerTeam && board[1] !== playerTeam && board[2] !== playerTeam) {
        optimalWinPath = r1;
    } else if (board[3] !== playerTeam && board[4] !== playerTeam && board[5] !== playerTeam) {
        optimalWinPath = r2;
    } else if (board[6] !== playerTeam && board[7] !== playerTeam && board[8] !== playerTeam) {
        optimalWinPath = r3;
    } else if (board[0] !== playerTeam && board[3] !== playerTeam && board[6] !== playerTeam) {
        optimalWinPath = c1;
    } else if (board[1] !== playerTeam && board[4] !== playerTeam && board[7] !== playerTeam) {
        optimalWinPath = c2;
    } else if (board[2] !== playerTeam && board[5] !== playerTeam && board[8] !== playerTeam) {
        optimalWinPath = c3;
    } else if (board[0] !== playerTeam && board[4] !== playerTeam && board[8] !== playerTeam) {
        optimalWinPath = diagDown;
    } else if (board[6] !== playerTeam && board[4] !== playerTeam && board[2] !==playerTeam) {
        optimalWinPath = diagUp;
    }

    return optimalWinPath !== [-1] ? board.findIndex((cell, i) => optimalWinPath.includes(i) && cell === '') : -1;
}