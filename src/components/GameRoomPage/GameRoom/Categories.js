import React, { useState, useEffect, useReducer } from 'react';

import initUserGameState from '../../../../helpers/initUserGameState';

import { setCategories as setReduxStoreCategories } from '../../../reducks/ducks/index';
import { useSelector, useDispatch } from 'react-redux';
import socket from '../../socketInstance';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const roomName = useSelector(state => state.roomName);

    const dispatch = useDispatch();

    useEffect(() => {
        socket.emit('GET_CATEGORIES', roomName);
        socket.on('UPDATE_CATEGORIES', categories => {
            console.log('Here are the categories: ', categories);
            setCategories(categories);
            dispatch(setReduxStoreCategories(categories));
        });
    }, []);

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }), // <--- Reducer
        initUserGameState(categories) // <---Initial State: e.g. initUserGameState(['Cities', 'Food']) -> Output:  {Cities: '', Food: ''}
    );

    const handleChange = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({ [name]: newValue });
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
                    <div>
                        <li key={category}>
                            <label>{category}</label>
                            <input type="text" onChange={handleChange} />
                        </li>
                    </div>
                ))}
            </div>
            <button>Submit and Stop Round!</button>
        </div>
    );
};

export default Categories;
