import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'

import socket from '../../socketInstance'


const Players = () => {

    const [players, setPlayers] = useState([])
    const roomName = useSelector(state => state.roomName)

    useEffect(() => {
        socket.emit('GET_PLAYERS', roomName)
        socket.on('UPDATE_PLAYERS', (players) => {
            console.log('Here are the players: ', players)
            // setPlayers(players)
        })
    }, [])

    return (
        <div>
            <h3> Here are the players: </h3>
            <li>Muin</li>
            <li>MewMew</li>
            <li>Abed</li>
        </div>
    )
}

export default Players
