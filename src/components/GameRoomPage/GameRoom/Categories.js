import React from 'react';

const Categories = () => {
    const players = ['Muin', 'Abed', 'Nadir', 'Tahsin', 'MewMew', 'MewTwo'];

    return (
        <div className="room-players">
            <h3 className="rooms-header"> PLAYERS </h3>
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

export default Categories;
