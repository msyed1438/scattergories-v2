// Actions
const LOAD = 'my-app/rooms/CREATE'
const CREATE = 'my-app/rooms/JOIN'

// Reducer
export default function reducer(state = { meow: 'meowwwwwwww' }, action = {}) {
    switch (action.type) {
        // do reducer stuff
        default:
            return state
    }
}

// Action Creators
export function loadWidgets() {
    return { type: LOAD }
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
