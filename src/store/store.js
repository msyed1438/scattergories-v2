import { createStore } from 'redux';

const initialState = {
    userName: '',
    roomName: '',
};

function gameState(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text]);
        default:
            return state;
    }
}

const store = createStore(gameState, ['Use Redux']);

export default store;
