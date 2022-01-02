import BoardValue from '../Types/BoardValue';

export default function getRandomChoice(board: BoardValue[]): number {
    let randomSquare: number = -1;
    while (board[randomSquare] !== '') {
        randomSquare = Math.floor(Math.random() * 9);
        if (board[randomSquare] === '') {
            return randomSquare;
        }
    }

    return randomSquare;
}