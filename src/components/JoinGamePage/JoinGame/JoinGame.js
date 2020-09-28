import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import clientSocket from '../../socketInstance';

import { joinGameRoom } from '../../../reducks/ducks';

const JoinGame = () => {
    const dispatch = useDispatch();

    const [rooms, setRooms] = useState([]);
    const [username, setUsername] = useState('');
    const [roomName, setRoomName] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const handleUsernameChange = e => {
        const re = /^[a-zA-Z]+$/; //Only letters allowed as input

        // if value is not blank, then test the regex
        if (e.target.value === '' || re.test(e.target.value)) {
            setUsername(e.target.value);
        }
    };

    const handleChangeOfRoomName = e => {
        const selectedRoomName = e.target.value;
        console.log('Selected the room name. Room is : ', selectedRoomName);
        setRoomName(selectedRoomName);
    };

    const handleRoomSelectionButtonClick = () => {
        const payload = {
            username,
            roomName,
        };

        console.log('Joining the room. Here is the roomName: ', roomName);

        clientSocket.emit('SET_SOCKET_USERNAME', username);
        clientSocket.emit('JOIN_GAME_ROOM', roomName);
        dispatch(joinGameRoom(payload));
    };

    useEffect(() => {
        clientSocket.emit('GET_LIST_OF_ROOMS');

        clientSocket.on('LIST_OF_ROOMS', rooms => {
            setRooms(rooms);
        });

        clientSocket.on('UPDATE_ROOMS', rooms => {
            console.log('We got the rooms on JoinRoom component: ', rooms);
            setRooms(rooms);
        });

        clientSocket.on('ROOM_CATEGORIES', categories => {
            console.log('Got the categories: ', categories);
        });
    }, []);

    useEffect(() => {
        if (username.length >= 5 && roomName !== '') {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [username, roomName]);

    

    return (
        <div className="page-container">
            <div className="game-generator">
                <h1 className="join-game-title">Join a Game!</h1>
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
                            <option disabled value="">
                                Choose your room
                            </option>
                            {rooms.map(room => {
                                return (
                                    <option value={room} key={room}>
                                        {room}
                                    </option>
                                );
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
    );
};

export default JoinGame;
