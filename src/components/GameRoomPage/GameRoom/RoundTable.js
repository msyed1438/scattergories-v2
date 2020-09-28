import React from 'react';
import { useSelector } from 'react-redux';

const RoundTable = () => {
    const categories = useSelector(state => state.categories);

    return (
        <table id="customers" className="game-table">
            <thead>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </thead>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Berglunds snabbköp</td>
                <td>Christina Berglund</td>
                <td>Sweden</td>
            </tr>
        </table>
    );
};

export default RoundTable;
