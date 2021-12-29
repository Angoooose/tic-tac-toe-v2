import '../styles/Settings.css';

import ButtonGroup from './ButtonGroup';
import SettingsProps from '../Types/SettingsProps';

export default function Settings(props: SettingsProps) {
    const { settings, setSettings, isGameActive, setBoard } = props;

    function handleDifficultyChange(difficulty: ('easy'|'normal'|'hard')) {
        let newSettings = {...settings};
        newSettings.difficulty = difficulty;
        setSettings(newSettings);
    }

    function handleTeamChange(team: ('x'|'o')) {
        let newSettings = {...settings};
        newSettings.team = team;
        setSettings(newSettings);
    }

    function restartGame() {
        setBoard(Array(9).fill(''));
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
                        selected: settings.team === 'x',
                        onClick: () => handleTeamChange('x'),
                    },
                    {
                        label: 'O',
                        selected: settings.team === 'o',
                        onClick: () => handleTeamChange('o'),
                    },
                ]}/>
            </div>
            <button className="settings-button" onClick={() => restartGame()} disabled={!isGameActive}>
                Reset
            </button>
        </div>
    )
}