import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { createRoom } from '../../../reducks/ducks/index' //Action for Redux

import { Link } from 'react-router-dom'

import clientSocket from '../../socketInstance'

const GameGenerator = () => {
    //Form state hooks:
    const [username, setUsername] = useState('')
    const [roomName, setRoomName] = useState('')
    const [numberOfCategories, setNumberOfCategories] = useState(1)
    const [buttonDisabled, setButtonDisabled] = useState(true)

    //Validation
    useEffect(() => {
        if (roomName.length >= 5 && username.length >= 5) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [username, roomName])

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
    }

    const handleRoomNameChange = e => {
        const re = /^[a-zA-Z]+$/

        // if value is not blank, then test the regex

        if (e.target.value === '' || re.test(e.target.value)) {
            setRoomName(e.target.value)
        }
    }

    const handleChooseCategoriesButtonClick = () => {
        const payload = {
            username,
            roomName,
            numberOfCategories,
        }

        clientSocket.emit('SET_SOCKET_USERNAME', username)

        dispatch(createRoom(payload))
    }

    const handleChangeOfNumberOfCategories = e => {
        const numberOfCategories = parseInt(e.target.value)
        setNumberOfCategories(numberOfCategories)
    }

    //TODO: Add validation in useEffect to emit for every keystroke and check to see if username (in that room)
    //      and roomName already exists, and if they do, prompt user to type a different name

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
                            maxLength={10}
                        />
                        <p className="character-limit-message">
                            Between 5 to 10 letters
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
                            maxLength={10}
                        />
                        <p className="character-limit-message">
                            Between 5 to 10 letters
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
                        <Link
                            to="/category-form"
                            style={{
                                textDecoration: 'none',
                                pointerEvents: buttonDisabled ? 'none' : 'auto',
                            }}
                        >
                            <button
                                className="create-game-form-button"
                                type="submit"
                                onClick={handleChooseCategoriesButtonClick}
                                disabled={buttonDisabled}
                            >
                                Choose Your Categories{' '}
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GameGenerator
