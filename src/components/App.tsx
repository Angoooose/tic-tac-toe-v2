import '../styles/App.css';

import { useEffect, useState } from 'react';

import Header from './Header';
import Board from './Board';
import Settings from './Settings';

import BoardValue from '../Types/BoardValue';
import GameSettings from '../Types/GameSettings';

function App() {
  const [board, setBoard] = useState<BoardValue[]>(Array(9).fill(''));
  const [isGameActive, setIsGameActive] = useState<boolean>(false);
  const [settings, setSettings] = useState<GameSettings>({
    difficulty: 'normal',
    team: 'x',
  });

  useEffect(() => {
    if (board.every(square => square === '')) {
      setIsGameActive(false);
    } else if (!isGameActive) {
      setIsGameActive(true);
    }
  }, [board]);

  return (
    <div className="app">
      <Header/>
      <div className="main-contents">
        <Settings settings={settings} setSettings={setSettings} isGameActive={isGameActive} setBoard={setBoard}/>
        <Board board={board} setBoard={setBoard} settings={settings}/>
      </div>
    </div>
  );
}

export default App;
