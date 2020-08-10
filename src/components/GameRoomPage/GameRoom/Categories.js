import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux'
import socket from '../../socketInstance'


const Categories = () => {
    const [categories, setCategories] = useState([]);
    const roomName = useSelector(state => state.roomName)

    useEffect(() => {
        socket.emit('GET_CATEGORIES', roomName)
        socket.on('UPDATE_CATEGORIES', categories => {
            console.log('Here are the categories: ', categories)
            setCategories(categories)
        })
    }, [])

    // const categories = [
    //     'Food',
    //     'Cities',
    //     'Songs',
    //     'Cartoons',
    //     'Famous People',
    //     'Pokemon',
    //     'Movies',
    //     'TV Shows',
    // ];

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

export default Categories;
