export type Teams = ('x'|'o');
export default interface GameSettings {
    difficulty: ('easy'|'normal'|'hard'),
    team: Teams,
}