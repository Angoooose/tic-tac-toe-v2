import '../styles/App.css';

import { useEffect, useState } from 'react';

import Header from './Header';
import Board from './Board';
import Settings from './Settings';

import BoardValue from '../Types/BoardValue';
import GameSettings from '../Types/GameSettings';
import GameStatus from '../Types/GameStatus';

import getGameStatus from '../logic/getGameStatus';

export default function App() {
  const [board, setBoard] = useState<BoardValue[]>(Array(9).fill(''));
  const [isGameActive, setIsGameActive] = useState<boolean>(false);
  const [gameStatus, setGameStatus] = useState<GameStatus>('INCOMPLETE');
  const [settings, setSettings] = useState<GameSettings>({
    difficulty: 'normal',
    team: 'x',
  });

  useEffect(() => {
    if (board.every(cell => cell === '')) {
      setIsGameActive(false);
    } else if (!isGameActive) {
      setIsGameActive(true);
    }

    let newGameStatus = getGameStatus(board, settings.team);
    if (newGameStatus !== 'INCOMPLETE') {
      setGameStatus(newGameStatus);
    }
  }, [board]);

  return (
    <div className="app">
      <Header/>
      <div className="main-contents">
        <Settings settings={settings} setSettings={setSettings} isGameActive={isGameActive} setBoard={setBoard} gameStatus={gameStatus} setGameStatus={setGameStatus}/>
        <Board board={board} setBoard={setBoard} settings={settings}/>
      </div>
    </div>
  );
}
