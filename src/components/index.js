import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import { Grommet } from 'grommet'
import store from '../store/store'

import { BrowserRouter as Router } from 'react-router-dom'

const theme = {
    global: {
        font: {
            family: 'Salsa',

        },
    },
}

const mountNode = document.getElementById('app')

ReactDOM.render(
    <Router>
        <Provider store={store}>
            {/* <Grommet theme={theme}> */}
                <App />
            {/* </Grommet> */}
        </Provider>
    </Router>,
    mountNode
)
