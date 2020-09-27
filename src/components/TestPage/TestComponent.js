import React from 'react';

const Players = () => {
    const players = ['Muin', 'Abed', 'Nadir', 'Tahsin', 'MewMew', 'MewTwo'];

    return (
        <div className="room-players">
            <h3> PLAYERS </h3>
            <div>
                {players.map(player => (
                    <li key={player}>{player}</li>
                ))}
            </div>
        </div>
    );
};

const CategoriesSubmission = () => {
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
            <h3> CATEGORIES </h3>
            <div>
                {categories.map(category => (
                    <div>
                        <li key={category}>
                            <label>{category}</label>
                            <input type="text" />
                        </li>
                    </div>
                ))}
            </div>
            <button>Submit and Stop Round!</button>
        </div>
    );
};

const Layout = () => {
    return (
        <div className="grid-container">
            <div className="game-table">Foo</div>
            <Players />
            <div className="room-name">Room Name: Mewmew Squad</div>
            <div className="letter-active">Intermission . . .</div>
            <CategoriesSubmission />
        </div>
    );
};

const TestComponent = () => {
    return (
        <div className="page-container">
            <div className="game-room-container">
                {/* <div className="room-info-container">
                    <Players />
                    <Categories />
                </div> */}

                <Layout />
            </div>
        </div>
    );
};

export default TestComponent;
