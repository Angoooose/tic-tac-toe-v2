import BoardValue from '../../Types/BoardValue';
import { Teams } from '../../Types/GameSettings';

import checkWinningMove from '../checkWinningMove';
import findWinPath from '../findWinPath';
import getRandomChoice from '../getRandomChoice';

export default function normalCpuChoice(board: BoardValue[], playerTeam: Teams, cpuTeam: Teams) {
    let winningMove = checkWinningMove(board, cpuTeam);
    if (winningMove > -1) return winningMove;

    let optimalWinPath = findWinPath(board, playerTeam);
    if (optimalWinPath > 0) return optimalWinPath;

    let randomChoice = getRandomChoice(board);
    return randomChoice;
}