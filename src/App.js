import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import CreateGamePage from './CreateGamePage/CreateGamePage'
import JoinGamePage from './JoinGamePage/JoinGamePage'

import './App.css'

const App = props => (
    <Router>
        <Switch>
            <Route path="/create-game">
                <CreateGamePage />
            </Route>
            <Route path="/join-game">
                <JoinGamePage />
            </Route>
            <Route exact path="/">
                <HomePage />
            </Route>
        </Switch>
    </Router>
)

export default App
