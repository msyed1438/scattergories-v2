import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import store from '../reducks/store'

import { BrowserRouter as Router } from 'react-router-dom'

const mountNode = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    mountNode
)
