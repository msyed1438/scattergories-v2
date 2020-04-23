import React from 'react'
import Anime from 'react-anime'

const transition = {
    opacity: [0, 1],
    translateY: ['100vh', 0]
};

export default (props) => (
    <Anime prop= {{...transition, ...props}}>   </Anime>
)

