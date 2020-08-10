import React from 'react'

import Players from './Players'
import Categories from './Categories';

const GameRoom = () => {
    return (
        <div className="page-container">
            <div className="game-room-container">
                <div className="room-info-container">
                    <Players />
                    <Categories />
                </div>
            </div>
        </div>
    )
}

export default GameRoom
