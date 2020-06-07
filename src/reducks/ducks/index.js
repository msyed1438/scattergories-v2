// Actions
const CREATE_ROOM = 'CREATE_ROOM'

//Initial State
const initialState = {
    roomName: '',
    username: '',
    categories: [],
    numberOfCategories: 1,
    gameIsInSession: false,
    gameEntries: {},
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case CREATE_ROOM:

            console.log('We got here!')
            const { username, roomName, numberOfCategories } = action.payload
            console.log('Here is our payload in Redux store: ', action.payload)
            
            return {
                ...state,
                username,
                roomName,
                numberOfCategories,
            }

        default:

            return state

    }
}

// Action Creators
export function createRoom(roomConfig) {
    return { type: CREATE_ROOM, payload: roomConfig }
}

export function createWidget(widget) {
    return { type: CREATE, widget }
}

export function updateWidget(widget) {
    return { type: UPDATE, widget }
}

export function removeWidget(widget) {
    return { type: REMOVE, widget }
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getWidget() {
    return dispatch =>
        get('/widget').then(widget => dispatch(updateWidget(widget)))
}
