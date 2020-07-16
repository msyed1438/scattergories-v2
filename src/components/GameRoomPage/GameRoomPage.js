import React from 'react'
import GameRoom from './GameRoom/GameRoom'

import RouteTransitionWrapper from '../AnimationWrappers/RouteTransitionWrapper/RouteTransitionWrapper'

const GameRoomPage = () => {
    return (
       <RouteTransitionWrapper>
           <GameRoom />
       </RouteTransitionWrapper>
    )
}

export default GameRoomPage
