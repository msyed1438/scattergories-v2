import React, { useState } from 'react'

const GameGenerator = () => {
    return (
        <div className="page-container">
            {' '}
            <h1>Create a Game!</h1>
            <form>
                <label for="username">Username:</label> <br />
                <input type="text" name="username" />
                <br />
                <label for="room-name">Room Name:</label> <br />
                <input type="text" name="room-name" />
                <br />
                <label for="categories">
                    Choose number of categories:{' '}
                </label>{' '}
                <br />
                <select name="categories">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                </select>
                <br />
                <button className="" type="button">
                    Create Game
                </button>
            </form>
        </div>
    )
}

export default GameGenerator
