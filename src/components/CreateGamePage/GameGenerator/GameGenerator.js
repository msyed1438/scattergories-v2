import React from 'react'

const GameGenerator = () => {
    var nums = [2, 3, 4, 5, 6, 7, 8]

    return (
        <div className="page-container">
            <h2 className="game-generator-heading">Create your game</h2>
            <label for="number-of-categories-selector">
                Number of Categories:
            </label>
            <select className="number-of-categories-selector">
                <option className="category-number-option" selected value={1}>
                    {1}
                </option>
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
