import React from 'react'
import GameGenerator from './GameGenerator/GameGenerator'

import RouteTransitionWrapper from '../RouteTransitionWrapper/RouteTransitionWrapper'

const CreateGamePage = () => {
    return (
            <RouteTransitionWrapper>
                    <GameGenerator />
               
            </RouteTransitionWrapper>
    )
}

export default CreateGamePage
