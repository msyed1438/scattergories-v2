import React from 'react'
import RouteTransitionWrapper from '../AnimationWrappers/RouteTransitionWrapper/RouteTransitionWrapper'

const JoinGamePage = () => {
    return (
        <div className="join-game-page">
            <RouteTransitionWrapper>
                <div className="page-container">
                    <h1>Join Game</h1>
                </div>
            </RouteTransitionWrapper>
        </div>
    )
}

export default JoinGamePage
