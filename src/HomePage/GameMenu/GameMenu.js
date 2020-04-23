import React from 'react'
import CreateNewButton from './CreateNewGameButton'
import JoinGameButton from './JoinGameButton'
import Anime, { anime } from 'react-anime'

import { Link } from 'react-router-dom'

const GameMenu = () => {
    return (
        <div className="game-menu">
            <Anime
                delay={anime.stagger(2000)}
                scale={[0.1, 0.9]}
                opacity={[0, 1]}
            >
                <Link to="/create-game" style={{ textDecoration: 'none' }}>
                    <CreateNewButton />
                </Link>
                <Link to="/join-game" style={{ textDecoration: 'none' }}>
                    <JoinGameButton />
                </Link>
            </Anime>
        </div>
    )
}

export default GameMenu
