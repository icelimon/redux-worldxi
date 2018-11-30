import { combineReducers } from 'redux';
import players from './player_reducer';
import worldxi from './worldxi_reducer';

const rootReducer = combineReducers({
    players,
    worldxi
});

export default rootReducer;