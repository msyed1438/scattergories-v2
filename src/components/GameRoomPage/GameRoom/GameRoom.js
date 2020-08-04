import React from 'react'

import Players from './Players'

const GameRoom = () => {
    return (
        <div className="page-container">
            <div className="game-room-container">
                <div className="room-info-container">
                    <Players />

                </div>
            </div>
        </div>
    )
}

export default GameRoom
