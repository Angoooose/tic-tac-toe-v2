import BoardValue from '../../Types/BoardValue';
import { Teams } from '../../Types/GameSettings';

import checkWinningMove from '../checkWinningMove';
import checkDefensiveMove from '../checkDefensiveMove';
import findWinPath from '../findWinPath';
import getRandomChoice from '../getRandomChoice';

export default function hardCpuChoice(board: BoardValue[], playerTeam: Teams, cpuTeam: Teams): number {
    let winningMove = checkWinningMove(board, cpuTeam);
    if (winningMove > -1) return winningMove;

    let defensiveMove = checkDefensiveMove(board, playerTeam);
    if (defensiveMove > -1) return defensiveMove;

    let optimalWinPath = findWinPath(board, playerTeam);
    if (optimalWinPath > -1) return optimalWinPath;

    let randomChoice = getRandomChoice(board);
    return randomChoice;
}