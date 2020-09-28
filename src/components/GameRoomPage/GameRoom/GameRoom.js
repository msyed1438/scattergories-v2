import React, { useEffect } from 'react';
import socket from '../../socketInstance';
import { useHistory } from 'react-router-dom';

import Players from './Players';
import CategoriesSubmission from './Categories';
import RoundTable from './RoundTable';

const GameRoom = () => {
    const history = useHistory();

    useEffect(() => {
        socket.on('disconnect', () => {
            history.push('/');
        });
    }, []);

    return (
        <div className="page-container">
            <div className="game-room-container">
                <div className="grid-container">
                    <RoundTable />
                    <Players />
                    <div className="room-name">Room Name: Mewmew Squad</div>
                    <div className="letter-active">Intermission . . .</div>
                    <CategoriesSubmission />
                </div>
            </div>
        </div>
    );
};

export default GameRoom;
