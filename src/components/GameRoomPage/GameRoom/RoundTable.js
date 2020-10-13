import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import socket from '../../socketInstance';

const RoundRow = ({ name, wordsPlayed }) => {
    return (
        <tr>
            <td>{name}</td>
            {wordsPlayed.map(word => (
                <td key={word}>{word}</td>
            ))}
        </tr>
    );
};

const RoundTable = () => {
    const categories = useSelector(state => state.categories);
    const [roundData, setRoundData] = useState([]);

    useEffect(() => {
        socket.on('TOTAL_ROUND_DATA', roundData => {
            // console.log(
            //     'Here is the round data received from the server: ',
            //     roundData
            // );

            setRoundData(roundData);
        });
    }, []);

    return (
        <div className="game-table">
            <table id="game-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        {categories.map(category => (
                            <th key={category}>{category}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {roundData.map(({ name, wordsPlayed }) => (
                        <RoundRow
                            key={name}
                            name={name}
                            wordsPlayed={wordsPlayed ? wordsPlayed : ['']}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RoundTable;
