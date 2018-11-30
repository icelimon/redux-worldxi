import players from '../data/players.json';
import { ADD_PLAYER, REMOVE_PLAYER } from '../actions';
import { createPlayer } from './helper_reducer';
function playerReducer(state=players, action) {
    switch (action.type) {
        case ADD_PLAYER:
            let player = state.filter(one => one.id !== action.id);
            return player;
        case REMOVE_PLAYER:
            let pl = [...state, createPlayer(action.id)];
            return pl;
        default:
            return state;
    }
}

export default playerReducer;