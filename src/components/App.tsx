import '../styles/App.css';

import { useEffect, useState } from 'react';

import Header from './Header';
import Board from './Board';
import Settings from './Settings';

import BoardValue from '../Types/BoardValue';
import GameSettings from '../Types/GameSettings';
import GameStatus from '../Types/GameStatus';

import getGameStatus from '../logic/getGameStatus';
import hardCpuChoice from '../logic/cpus/hard';
import normalCpuChoice from '../logic/cpus/normal';
import easyCpuChoice from '../logic/cpus/easy';

export default function App() {
  const [board, setBoard] = useState<BoardValue[]>(Array(9).fill(''));
  const [isGameActive, setIsGameActive] = useState<boolean>(false);
  const [isCpuTurn, setIsCpuTurn] = useState<boolean>(false);
  const [gameStatus, setGameStatus] = useState<GameStatus>('INCOMPLETE');
  const [settings, setSettings] = useState<GameSettings>({
    difficulty: 'normal',
    player: 'X',
    cpu: 'O',
  });

  useEffect(() => {
    if (board.every(cell => cell === '')) {
      setIsGameActive(false);
    } else if (!isGameActive) {
      setIsGameActive(true);
    }

    let newGameStatus = getGameStatus(board, settings.player);
    if (newGameStatus !== 'INCOMPLETE') setGameStatus(newGameStatus);
  }, [board]);

  useEffect(() => {
    if (isCpuTurn && board.some(cell => cell === '') && gameStatus === 'INCOMPLETE') {
      let cpuChoice: number = -1;
      if (settings.difficulty === 'hard') cpuChoice = hardCpuChoice(board, settings.player, settings.cpu);
      if (settings.difficulty === 'normal') cpuChoice = normalCpuChoice(board, settings.player, settings.cpu);
      if (settings.difficulty === 'easy') cpuChoice = easyCpuChoice(board);
      let newBoard = [...board];
      newBoard[cpuChoice] = settings.cpu;
      setBoard(newBoard);
      setIsCpuTurn(false);
    }
  }, [isCpuTurn]);

  return (
    <div className="app">
      <Header/>
      <div className="main-contents">
        <Settings settings={settings} setSettings={setSettings} isGameActive={isGameActive} setBoard={setBoard} gameStatus={gameStatus} setGameStatus={setGameStatus} setIsCpuTurn={setIsCpuTurn}/>
        <Board board={board} setBoard={setBoard} settings={settings} gameStatus={gameStatus} isCpuTurn={isCpuTurn} setIsCpuTurn={setIsCpuTurn}/>
      </div>
    </div>
  );
}
