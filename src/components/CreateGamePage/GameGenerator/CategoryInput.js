import React from 'react'

const CategoryInput = ({ num, handleChange, index, userInput }) => {
    return (
        <div className="room-name-field" key={index}>
            <label htmlFor="roomName">Category Name:</label>
            <input
                className="room-name-input"
                type="text"
                name={`category${num}`}
                maxLength={15}
                onChange={handleChange}
                value={userInput[`category${index + 1}`]}
                placeholder="Write category name here"
            />
            <p className="character-limit-message">Between 3 to 15 letters</p>
        </div>
    )
}

export default CategoryInput
