import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { createRoom } from '../../../reducks/ducks/index' //Action for Redux

const GameGenerator = () => {
    //Form state hooks:
    const [username, setUsername] = useState('')
    const [roomName, setRoomName] = useState('')
    const [numberOfCategories, setNumberOfCategories] = useState(1)
    const [buttonDisabled, setButtonDisabled] = useState(true)

    //Only allow submission if...
    const isAbleToSubmit = username.length >= 7 && roomName.length >= 7

    //Redux dispatch hook
    const dispatch = useDispatch()

    //Input handlers:
    //TODO: Use useReducer hook with ES6 Computer syntax to clear DRY code up here for inputs

    const handleUsernameChange = e => {
        const re = /^[a-zA-Z]+$/

        // if value is not blank, then test the regex
        if (e.target.value === '' || re.test(e.target.value)) {
            setUsername(e.target.value)
        }

        if (isAbleToSubmit) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }

    const handleRoomNameChange = e => {
        const re = /^[a-zA-Z]+$/

        // if value is not blank, then test the regex

        if (e.target.value === '' || re.test(e.target.value)) {
            setRoomName(e.target.value)
        }

        if (isAbleToSubmit) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }

    const handleChooseCategoriesButtonClick = () => {
        const payload = {
            username,
            roomName,
            numberOfCategories,
        }

        dispatch(createRoom(payload))
    }

    const handleChangeOfNumberOfCategories = e => {
        const numberOfCategories = parseInt(e.target.value)
        setNumberOfCategories(numberOfCategories)
    }

    return (
        <div className="page-container">
            <div className="game-generator">
                <h1 className="create-game-title">Create a Game!</h1>
                <form className="game-room-creation-room">

                    <div className="username-field">
                        <label htmlFor="username">Username:</label>
                        <input
                            value={username}
                            className="username-input"
                            type="text"
                            name="username"
                            onChange={handleUsernameChange}
                            maxLength={25}
                        />
                        <p className="character-limit-message">
                            Between 7 to 25 letters
                        </p>
                    </div>

                    <div className="room-name-field">
                        <label htmlFor="roomName">Room Name:</label>
                        <input
                            value={roomName}
                            className="room-name-input"
                            type="text"
                            name="roomName"
                            onChange={handleRoomNameChange}
                            maxLength={25}
                        />
                        <p className="character-limit-message">
                            Between 7 to 25 letters
                        </p>
                    </div>

                    <div className="number-of-categories-field">
                        <label htmlFor="categories">
                            Choose number of categories:{' '}
                        </label>{' '}
                        <select
                            name="categories"
                            className="categories-dropdown"
                            onChange={handleChangeOfNumberOfCategories}
                            value={numberOfCategories}
                        >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                        </select>
                    </div>

                    <div className="create-game-form-button-container">
                        <button
                            className="create-game-form-button"
                            type="button"
                            onClick={handleChooseCategoriesButtonClick}
                            disabled={buttonDisabled}
                        >
                            Choose Your Categories{' '}
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default GameGenerator
