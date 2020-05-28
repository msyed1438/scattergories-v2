import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import socketIOClient from 'socket.io-client'
const ENDPOINT = 'http://127.0.0.1:3000'

import HomePage from './HomePage/HomePage'
import CreateGamePage from './CreateGamePage/CreateGamePage'
import JoinGamePage from './JoinGamePage/JoinGamePage'

import './App.css'
const socket = socketIOClient(ENDPOINT)

const App = () => {
    useEffect(() => {
        socket.on('yoo', data => {
            console.log('YOOOOOOO!')
        })
        socket.emit('hello')
    }, [])

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
