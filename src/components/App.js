import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import CreateGamePage from './CreateGamePage/CreateGamePage'
import JoinGamePage from './JoinGamePage/JoinGamePage'

import './App.css'

import { useSelector } from 'react-redux'

const App = () => {
    const counter = useSelector(state => state.meow)
    console.log(counter)
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
