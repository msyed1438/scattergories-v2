import React, { useEffect } from 'react';
import socket from '../../socketInstance';
import { useHistory } from 'react-router-dom';

import Players from './Players';
import CategoriesSubmission from './Categories';
import RoundTable from './RoundTable';
import GameInProgressLogo from './GameInProgressLogo';
import IntermissionInProgressLogo from './IntermissionInProgress';

import { setGameActive } from '../../../reducks/ducks/index';
import { useDispatch, useSelector } from 'react-redux';

const GameRoom = () => {
    const history = useHistory();
    const roomName = useSelector(state => state.roomName);
    const gameActive = useSelector(state => state.gameActive);
    const dispatch = useDispatch();

    useEffect(() => {
        socket.on('disconnect', () => {
            history.push('/');
        });
    }, []);

    useEffect(() => {
        socket.emit('GET_GAME_STATUS', roomName);
        socket.on('UPDATE_GAME_STATUS', gameActive => {
            dispatch(setGameActive(gameActive));
        });
    }, []);

    return (
        <div className="page-container">
            <div className="game-room-container">
                <div className="grid-container">
                    {gameActive ? <GameInProgressLogo /> : <RoundTable />}
                    {gameActive ? (
                        <CategoriesSubmission />
                    ) : (
                        <IntermissionInProgressLogo />
                    )}
                    <Players />
                    <div className="room-name">Room Name: Mewmew Squad</div>
                    <div className="letter-active">Intermission . . .</div>
                </div>
            </div>
        </div>
    );
};

export default GameRoom;
