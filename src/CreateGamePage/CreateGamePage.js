import React from 'react'
import GameGenerator from './GameGenerator/GameGenerator'

import RouteTransitionWrapper from '../RouteTransitionWrapper/RouteTransitionWrapper'

const CreateGamePage = () => {
    return (
        <div>
            <RouteTransitionWrapper>
                <GameGenerator />
            </RouteTransitionWrapper>
        </div>
    )
}

export default CreateGamePage
