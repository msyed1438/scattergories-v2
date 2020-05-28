import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
 


const CreateNewGameButton = () => {
    return <div className="create-new-game-button"> <FontAwesomeIcon icon={faPlusCircle} /> Create Game</div>
}

export default CreateNewGameButton
