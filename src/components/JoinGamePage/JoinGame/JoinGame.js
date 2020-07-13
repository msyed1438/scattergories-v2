import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import clientSocket from '../../socketInstance'

import { joinGameRoom } from '../../../reducks/ducks'

const JoinGame = () => {
    const dispatch = useDispatch()

    const [rooms, setRooms] = useState([])
    const [username, setUsername] = useState('')
    const [roomName, setRoomName] = useState('<room name missing>')
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const handleUsernameChange = e => {
        const re = /^[a-zA-Z]+$/

        // if value is not blank, then test the regex
        if (e.target.value === '' || re.test(e.target.value)) {
            setUsername(e.target.value)
        }
    }

    const handleChangeOfRoomName = e => {
        const selectedRoomName = e.target.value
        setRoomName(selectedRoomName)
    }

    const handleRoomSelectionButtonClick = () => {
        const payload = {
            username,
            roomName,
        }

        clientSocket.emit('SET_SOCKET_USERNAME', username)
        clientSocket.emit('JOIN_GAME_ROOM', roomName)
        dispatch(joinGameRoom(payload))
    }

    useEffect(() => {
        clientSocket.emit('GET_LIST_OF_ROOMS')
    }, [])

    useEffect(() => {
        clientSocket.on('LIST_OF_ROOMS', rooms => {
            setRooms(rooms)
        })

        clientSocket.on('UPDATE_ROOMS', rooms => {
            setRooms(rooms)
        })
    }, [])

    //TODO: Add socket.on('UPDATE_ROOMS')

    useEffect(() => {
        if (username.length >= 7) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [username])

    return (
        <div className="page-container">
            <div className="game-generator">
                <h1 className="join-game-title">Join a Game!</h1>
                <form>
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
                    <div className="number-of-categories-field">
                        <label htmlFor="join-game">
                            Choose game room to join:{' '}
                        </label>{' '}
                        <select
                            name="join-game"
                            className="categories-dropdown"
                            onChange={handleChangeOfRoomName}
                            value={roomName}
                            size={4}
                        >
                            {rooms.map(room => {
                                return (
                                    <option value={room} key={room}>
                                        {room}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="create-game-form-button-container">
                        <Link
                            to="/game-room"
                            style={{
                                textDecoration: 'none',
                                pointerEvents: buttonDisabled ? 'none' : 'auto',
                            }}
                        >
                            <button
                                className="create-game-form-button"
                                type="submit"
                                onClick={handleRoomSelectionButtonClick}
                                disabled={buttonDisabled}
                            >
                                Join The Game!{' '}
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default JoinGame
