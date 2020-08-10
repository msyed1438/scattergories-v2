import React from 'react';

const Players = () => {
    const players = ['Muin', 'Abed', 'Nadir', 'Tahsin', 'MewMew', 'MewTwo'];

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

const Categories = () => {
    const categories = [
        'Food',
        'Cities',
        'Songs',
        'Cartoons',
        'Famous People',
        'Pokemon',
        'Movies',
        'TV Shows',
    ];

    return (
        <div className="room-categories">
            <h3 className="categories-header"> CATEGORIES </h3>
            <div className="categories-container">
                {categories.map(category => (
                    <div className="category-container">
                        <li className="category" key={category}>
                            <label className="category-label">{category}</label>
                            <input type="text" />
                        </li>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TestComponent = () => {
    return (
        <div className="page-container">
            <div className="game-room-container">
                <div className="room-info-container">
                    <Players />
                    <Categories />
                </div>
            </div>
        </div>
    );
};

export default TestComponent;
