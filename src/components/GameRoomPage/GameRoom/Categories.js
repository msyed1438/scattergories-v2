import React, { useEffect, useReducer } from 'react';

import initUserGameState from '../../../../helpers/initUserGameState';

import { setGameActive } from '../../../reducks/ducks/index';
import { useSelector, useDispatch } from 'react-redux';
import socket from '../../socketInstance';

const Categories = () => {
    // const [categories, setCategories] = useState([]);
    const categories = useSelector(state => state.categories);
    const roomName = useSelector(state => state.roomName);
    const gameActive = useSelector(state => state.gameActive);
    const username = useSelector(state => state.username);
    const dispatch = useDispatch();

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }), // <--- Reducer
        initUserGameState(categories) // <---Initial State: e.g. initUserGameState(['Cities', 'Food']) -> Output:  {Cities: '', Food: ''}
    );

    const handleChange = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;

        // console.log('........')
        // console.log('Name of the input being changed: ', name)
        // console.log('Value being typed into the field: ', newValue)
        // console.log('Handle change is firing in Categories component')
        // console.log('userInput before change: ', userInput)

        setUserInput({ [name]: newValue });
        // console.log('User input after change: ', userInput)
        // console.log('........')
    };

    useEffect(() => {
        socket.on('SUBMIT_ROUND_DATA', () => {
            // console.log('Here is what the userInput looks like: ', userInput);
            socket.emit('ROUND_DATA', roundData());
        });
    }, [userInput]);

    const getPlayerEntries = () => Object.values(userInput);
    const roundData = () => {
        // console.log('Here are the categories: ', categories)
        // console.log('Was our initial state generated properly? -> ', initUserGameState(categories))
        // console.log(
        //     'Here is what the player entries look like: ',
        //     getPlayerEntries()
        // );
        return { username, entries: getPlayerEntries(), roomName };
    };

    const handleStopRoundClick = () => {
        const gameConfig = {
            roomName,
            username,
        };

        // socket.on('SUBMIT_ROUND_DATA', () => {
        //     console.log('Here is what the roundData looks like: ', roundData());
        //     socket.emit('ROUND_DATA', roundData());
        // });

        socket.emit('END_ROUND', gameConfig);
        socket.emit('TOGGLE_GAME_STATUS', roomName);
        dispatch(setGameActive(!gameActive));
    };

    return (
        // <div className="room-categories">
        //     <h3 className="categories-header"> CATEGORIES </h3>
        //     <div className="categories-container">
        //         {categories.map(category => (
        //             <div className="category-container" key={category}>
        //                 <li className="category" key={category}>
        //                     <label className="category-label">{category}</label>
        //                     <input type="text" name={category} onChange={handleChange}/>
        //                 </li>
        //             </div>
        //         ))}
        //     </div>
        // </div>

        <div className="room-categories">
            <h3> CATEGORIES </h3>
            <div>
                {categories.map(category => (
                    <div key={category}>
                        <li>
                            <label>{category}</label>
                            <input
                                name={category}
                                type="text"
                                onChange={handleChange}
                                value={userInput[category]}
                            />
                        </li>
                    </div>
                ))}
            </div>
            <button onClick={handleStopRoundClick}>
                Submit and Stop Round!
            </button>
        </div>
    );
};

export default Categories;
