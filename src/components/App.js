import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import CreateGamePage from './CreateGamePage/CreateGamePage'
import JoinGamePage from './JoinGamePage/JoinGamePage'

import './App.css'


const App = () => {

    return (
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
    )
}

export default App
