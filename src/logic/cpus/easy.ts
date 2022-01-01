import BoardValue from '../../Types/BoardValue';
import getRandomChoice from '../getRandomChoice';

export default function easyCpuChoice(board: BoardValue[]) {
    let randomChoice = getRandomChoice(board);
    return randomChoice;
}