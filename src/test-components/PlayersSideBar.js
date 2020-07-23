import React from 'react'
import './PlayersSideBar.css'

const PlayersSideBar = () => {
    const players = ['Muin', 'MewMew', 'Pushan']

    return (
        <div className="room-players" >
            <h3> Here are the players: </h3>
            {players.map(player => (
                <li key={player}>{player}</li>
            ))}
        </div>
    )
}

export default PlayersSideBar
