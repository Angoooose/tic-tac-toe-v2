import BoardValue from '../Types/BoardValue';
import { Teams } from '../Types/GameSettings';

export default function findWinPath(board: BoardValue[], playerTeam: Teams): number {
    let optimalWinPaths: number[][] = [];

    const r1: number[] = [0, 1, 2];
    const r2: number[] = [3, 4, 5];
    const r3: number[] = [6, 7, 8];
    const c1: number[] = [0, 3, 6];
    const c2: number[] = [1, 4, 7];
    const c3: number[] = [2, 5, 8];
    const diagDown: number[] = [0, 4, 8];
    const diagUp: number[] = [6, 4, 2];

    if (board[0] !== playerTeam && board[1] !== playerTeam && board[2] !== playerTeam) optimalWinPaths.push(r1);
    if (board[3] !== playerTeam && board[4] !== playerTeam && board[5] !== playerTeam) optimalWinPaths.push(r2);
    if (board[6] !== playerTeam && board[7] !== playerTeam && board[8] !== playerTeam) optimalWinPaths.push(r3);
    if (board[0] !== playerTeam && board[3] !== playerTeam && board[6] !== playerTeam) optimalWinPaths.push(c1);
    if (board[1] !== playerTeam && board[4] !== playerTeam && board[7] !== playerTeam) optimalWinPaths.push(c2);
    if (board[2] !== playerTeam && board[5] !== playerTeam && board[8] !== playerTeam) optimalWinPaths.push(c3);
    if (board[0] !== playerTeam && board[4] !== playerTeam && board[8] !== playerTeam) optimalWinPaths.push(diagDown);
    if (board[6] !== playerTeam && board[4] !== playerTeam && board[2] !== playerTeam) optimalWinPaths.push(diagUp);

    if (optimalWinPaths.length > 0) {
        let chosenPath = optimalWinPaths[Math.floor(Math.random() * optimalWinPaths.length)];
        return board.findIndex((cell, i) => chosenPath.includes(i) && cell === '');
    } else {
        return -1;
    }
}