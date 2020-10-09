import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setGameActive } from '../../../reducks/ducks/index';

import intermissionLogo from '../../../../assets/bell.svg';

import socket from '../../socketInstance';

const IntermissionInProgress = () => {
    const dispatch = useDispatch();
    const roomName = useSelector(state => state.roomName);
    const gameActive = useSelector(state => state.gameActive);

    const handleStartNextRoundClick = () => {
        socket.emit('TOGGLE_GAME_STATUS', roomName);
        dispatch(setGameActive(!gameActive));
    };

    return (
        <div className="room-categories">
            <img className="game-in-intermission-logo" src={intermissionLogo} />
            <p>The round has ended! Please score your submissions here →</p>
            <button onClick={handleStartNextRoundClick}>
                Click to start next round!
            </button>
        </div>
    );
};

export default IntermissionInProgress;
