import React from 'react'
import './Players.css'

const PlayersSideBar = () => {
    const players = ['Muin', 'MewMew', 'Pushan', 'Abed', 'Nadir']

    return (
        <div className="room-players">
            <h3 className="players-header"> PLAYERS </h3>
            <div className="players-container">
                {players.map(player => (
                    <li className="player" key={player}>
                        {player}
                    </li>
                ))}
            </div>
        </div>
    )
}

export default PlayersSideBar
