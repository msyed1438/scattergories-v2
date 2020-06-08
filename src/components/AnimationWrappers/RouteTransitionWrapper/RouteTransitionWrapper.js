import React from 'react'
import Anime from 'react-anime'

const transition = {
    duration: 1500,
    scale: [1.5, 1.0],
    opacity: [0, 1],
    translateX: ['45vh', 0],
}

export default props => <Anime {...transition} {...props} />