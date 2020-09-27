import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

import HomePage from './HomePage/HomePage';
import CreateGamePage from './CreateGamePage/CreateGamePage';
import JoinGamePage from './JoinGamePage/JoinGamePage';
import GameRoomPage from './GameRoomPage/GameRoomPage';
import CategoryFormPage from './CreateGamePage/GameGenerator/CategoryFormPage';
import TestComponent from './TestPage/TestComponent';

import './App.css';

const App = () => {
    const username = useSelector(state => state.username);
    const userWasSet = username !== '';

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
            <Route path="/game-room">
                {userWasSet ? <GameRoomPage /> : <Redirect to="/join-game" />}
            </Route>
            <Route path="/category-form">
                {userWasSet ? (
                    <CategoryFormPage />
                ) : (
                    <Redirect to="/create-game" />
                )}
            </Route>
            <Route path="/test-component">
                <TestComponent />
            </Route>
        </Switch>
    );
};

export default App;
