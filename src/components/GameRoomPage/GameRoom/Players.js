import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'

import socket from '../../socketInstance'

const Players = () => {
    const [players, setPlayers] = useState([])
    const roomName = useSelector(state => state.roomName)

    useEffect(() => {
        socket.emit('GET_PLAYERS', roomName)
        socket.on('UPDATE_PLAYERS', players => {
            console.log('Here are the players: ', players)
            setPlayers(players)
        })
    }, [])

    return (
        <div className="room-players">
            <h3> Here are the players: </h3>
            {players.map((player, index) => (
                <li key={index}>{player}</li>
            ))}
        </div>
    )
}

export default Players
