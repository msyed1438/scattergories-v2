import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import socket from '../../socketInstance';

const Players = () => {
    const [players, setPlayers] = useState([]);
    const roomName = useSelector(state => state.roomName);

    useEffect(() => {
        socket.emit('GET_PLAYERS', roomName);
        socket.on('UPDATE_PLAYERS', players => {
            console.log('Here are the players: ', players);
            setPlayers(players);
        });
    }, []);

    return (
        // <div className="room-players">
        //     <h3 className="players-header"> PLAYERS </h3>
        //     <div className="players-container">
        //         {players.map(player => (
        //             <li className="player" key={player}>
        //                 {player}
        //             </li>
        //         ))}
        //     </div>
        // </div>
        <div className="room-players">
            <h3> PLAYERS </h3>
            <div>
                {players.map(player => (
                    <li key={player}>{player}</li>
                ))}
            </div>
        </div>
    );
};

export default Players;
