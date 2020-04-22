import React from 'react'

const GameGenerator = () => {
    var nums = [2, 3, 4, 5, 6, 7, 8]

    return (
        <div>
            <label for="number-of-categories-selector">Choose a car:</label>
            <select className="number-of-categories-selector">
                
                {nums.map(num => (
                    <option className="category-number-option" value={num}>
                        {num}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default GameGenerator
