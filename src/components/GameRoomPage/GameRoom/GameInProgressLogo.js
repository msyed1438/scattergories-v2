import React from 'react'
import pencilAnimation from '../../../../assets/pencil.gif'

const GameInProgressLogo = () => {
    return (
        <div className="game-table">
            <img className="game-in-progress-logo" src={pencilAnimation}/>
        </div>
    )
}

export default GameInProgressLogo
