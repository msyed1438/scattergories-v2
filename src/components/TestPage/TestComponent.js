import React from 'react';

const Players = () => {

    const players = ['Muin', 'Abed', 'Nadir']

    return (
        <div className="room-players">
            <h3 className="players-header"> PLAYERS </h3>
            <div className="players-container">
                {players.map(player => (
                    <li className="player" key={player}>
                        {player}
                    </li>
                ))}
            </div>
        </div>
    );
};

const TestComponent = () => {
    return (
        <div className="page-container">
            <Players />
        </div>
    );
};

export default TestComponent;
