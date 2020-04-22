import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const JoinGameButton = () => {
    return (
        <div className="join-game-button">
            <FontAwesomeIcon icon={faUsers} />
            {'                                  '}
            Join Game
        </div>
    )
}

export default JoinGameButton
