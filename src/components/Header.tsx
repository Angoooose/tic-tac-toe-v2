import '../styles/Header.css';
import githubLight from '../assets/GitHub-Mark-Light-120px-plus.png';

export default function Header() {
    return (
        <header>
            <div className="header-text">
                tic-tac-toe
                <span className="header-muted"> v2</span>
            </div>
            <a href="https://github.com/Angoooose/tic-tac-toe-v2">
                <img
                    src={githubLight}
                    className="header-img"
                    alt="GitHub"
                />
            </a>
        </header>
    );
}