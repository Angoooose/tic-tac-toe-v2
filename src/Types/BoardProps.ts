import GameSettings from './GameSettings';
import BoardValue from './BoardValue';
import { Dispatch } from 'react';

export default interface BoardProps {
    board: BoardValue[],
    setBoard: Dispatch<BoardValue[]>,
    settings: GameSettings,
}