import '../styles/Settings.css';

import ButtonGroup from './ButtonGroup';
import SettingsProps from '../Types/SettingsProps';
import { Teams } from '../Types/GameSettings';

export default function Settings(props: SettingsProps) {
    const { settings, setSettings, isGameActive, setBoard, gameStatus, setGameStatus } = props;

    function handleDifficultyChange(difficulty: ('easy'|'normal'|'hard')) {
        let newSettings = {...settings};
        newSettings.difficulty = difficulty;
        setSettings(newSettings);
    }

    function handleTeamChange(team: Teams) {
        let newSettings = {...settings};
        newSettings.team = team;
        setSettings(newSettings);
    }

    function restartGame() {
        setBoard(Array(9).fill(''));
        setGameStatus('INCOMPLETE');
    }

    return (
        <div className="settings">
            <h1 className="settings-header">Settings</h1>
            <div>
                <h2>CPU Difficulty</h2>
                <ButtonGroup buttons={[
                    {
                        label: 'Easy',
                        selected: settings.difficulty === 'easy',
                        onClick: () => handleDifficultyChange('easy'),
                    },
                    {
                        label: 'Normal',
                        selected: settings.difficulty === 'normal',
                        onClick: () => handleDifficultyChange('normal'),
                    },
                    {
                        label: 'Hard',
                        selected: settings.difficulty === 'hard',
                        onClick: () => handleDifficultyChange('hard'),
                    }
                ]}/>
            </div>
            <div>
                <h2>Team</h2>
                <ButtonGroup disabled={isGameActive} buttons={[
                    {
                        label: 'X',
                        selected: settings.team === 'X',
                        onClick: () => handleTeamChange('X'),
                    },
                    {
                        label: 'O',
                        selected: settings.team === 'O',
                        onClick: () => handleTeamChange('O'),
                    },
                ]}/>
            </div>
            <div className="settings-bottom-container">
                <div className={`status-notification win-status ${gameStatus !== 'WIN' ? 'hidden' : ''}`}>You won!</div>
                <div className={`status-notification lose-status ${gameStatus !== 'LOSE' ? 'hidden' : ''}`}>You lost!</div>
                <div className={`status-notification draw-status ${gameStatus !== 'DRAW' ? 'hidden' : ''}`}>It's a draw!</div>
                <button className="settings-button" onClick={() => restartGame()} disabled={!isGameActive}>
                    Reset
                </button>
            </div>
        </div>
    )
}