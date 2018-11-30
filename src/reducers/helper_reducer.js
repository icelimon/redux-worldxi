import players from '../data/players.json';

export function createPlayer(id) {
    let player = players.find( p => p.id === id);
    return player;
}