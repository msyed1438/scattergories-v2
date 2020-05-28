import React from 'react'
import GameGenerator from './GameGenerator/GameGenerator'

import RouteTransitionWrapper from '../AnimationWrappers/RouteTransitionWrapper/RouteTransitionWrapper'

const CreateGamePage = () => {
    return (
        <div className="create-game-page">
            <RouteTransitionWrapper>
                <GameGenerator />
            </RouteTransitionWrapper>
        </div>
    )
}

export default CreateGamePage
