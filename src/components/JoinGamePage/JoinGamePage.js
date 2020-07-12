import React from 'react'
import RouteTransitionWrapper from '../AnimationWrappers/RouteTransitionWrapper/RouteTransitionWrapper'

import JoinGame from './JoinGame/JoinGame'

const JoinGamePage = () => {
    return (
        <div className="join-game-page">
            <RouteTransitionWrapper>
                <JoinGame />
            </RouteTransitionWrapper>
        </div>
    )
}

export default JoinGamePage
