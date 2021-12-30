import GameSettings from './GameSettings';
import BoardValue from './BoardValue';
import { Dispatch } from 'react';
import GameStatus from './GameStatus';

export default interface BoardProps {
    board: BoardValue[],
    setBoard: Dispatch<BoardValue[]>,
    settings: GameSettings,
    gameStatus: GameStatus,
}