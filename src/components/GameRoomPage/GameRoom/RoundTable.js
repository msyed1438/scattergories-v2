import React from 'react';
import { useSelector } from 'react-redux';

const RoundTable = () => {
    const categories = useSelector(state => state.categories);

    return (
        <div className="game-table">
            <table id="game-table">
                <thead>
                    <tr>
                        {categories.map(category => (
                            <th key={category}>{category}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Alfreds Futterkiste</td>
                    </tr>
                    <tr>
                        <td>Berglunds snabbköp</td>
                        <td>Christina Berglund</td>
                        <td>Sweden</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Alfreds Futterkiste</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RoundTable;
