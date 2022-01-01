export type Teams = ('X'|'O');
export default interface GameSettings {
    difficulty: ('easy'|'normal'|'hard'),
    player: Teams,
    cpu: Teams,
}