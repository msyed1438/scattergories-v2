import React from 'react'
import CreateNewButton from './CreateNewGameButton';
import JoinGameButton from './JoinGameButton';


const GameMenu = () => {
    return (
        <div className="game-menu">
            <CreateNewButton />
            <JoinGameButton />
        </div>
    )
}

export default GameMenu
