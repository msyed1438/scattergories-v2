import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import socketIOClient from 'socket.io-client'
const ENDPOINT = 'http://127.0.0.1:3000'

import HomePage from './HomePage/HomePage'
import CreateGamePage from './CreateGamePage/CreateGamePage'
import JoinGamePage from './JoinGamePage/JoinGamePage'

import './App.css'

const App = () => {
    useEffect(() => {
        const socket = socketIOClient(ENDPOINT)
        socket.on('yoo', data => {
            console.log('YOOOOOOO!')
        })
    }, [])

    return (
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
}

export default App
