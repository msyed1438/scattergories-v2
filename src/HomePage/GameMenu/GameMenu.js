import React from 'react'
import CreateNewButton from './CreateNewGameButton'
import JoinGameButton from './JoinGameButton'

import { Link } from 'react-router-dom'

const GameMenu = () => {
    return (
        <div className="game-menu">
            <Link to="/create-game" style={{ textDecoration: 'none' }}>
                <CreateNewButton />
            </Link>
            <Link to="/join-game" style={{ textDecoration: 'none' }}>
                <JoinGameButton /> 
            </Link>
        </div>
    )
}

export default GameMenu
