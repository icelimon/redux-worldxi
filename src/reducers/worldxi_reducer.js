import { ADD_PLAYER, REMOVE_PLAYER } from '../actions';
import { createPlayer } from './helper_reducer';

function worldxi(state = [], action) {
    switch (action.type) {
        case ADD_PLAYER:
            let player = [...state, createPlayer(action.id)];
            return player;
        case REMOVE_PLAYER:
            let pl = state.filter(one => one.id !== action.id);
            return pl;
        default:
            return state;
    }
}

export default worldxi;