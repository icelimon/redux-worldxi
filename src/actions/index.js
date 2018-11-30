export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';

export function addPlayer(id) {
    const action = {
        type: ADD_PLAYER,
        id
    }
    return action;
}

export function removePlayer(id) {
    const action = {
        type: REMOVE_PLAYER,
        id
    }
    return action;
}
