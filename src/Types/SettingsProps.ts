import GameSettings from './GameSettings';
import BoardValue from './BoardValue';
import GameStatus from './GameStatus';
import { Dispatch } from 'react';

export default interface SettingsProps {
    settings: GameSettings,
    setSettings: Dispatch<GameSettings>,
    isGameActive: boolean,
    setBoard: Dispatch<BoardValue[]>,
    gameStatus: GameStatus,
    setGameStatus: Dispatch<GameStatus>,
}