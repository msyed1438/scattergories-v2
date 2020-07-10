// Actions
const CREATE_ROOM = 'CREATE_ROOM'
const CREATE_CATEGORIES = 'CREATE_CATEGORIES'

//Initial State
const initialState = {
    roomName: '',
    username: '',
    categories: [],
    numberOfCategories: 1,
    gameIsInSession: false,
    gameEntries: {},
    roundData: {},
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case CREATE_ROOM:
            const { username, roomName, numberOfCategories } = action.payload

            return {
                ...state,
                username,
                roomName,
                numberOfCategories,
            }

        case CREATE_CATEGORIES:
            const categories = action.payload

            return {
                ...state,
                categories,
            }
            
        default:
            return state
    }
}

// Action Creators
export function createRoom(roomConfig) {
    return { type: CREATE_ROOM, payload: roomConfig }
}

export function createCategories(categories) {
    return { type: CREATE_CATEGORIES, payload: categories }
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getWidget() {
    return dispatch =>
        get('/widget').then(widget => dispatch(updateWidget(widget)))
}
