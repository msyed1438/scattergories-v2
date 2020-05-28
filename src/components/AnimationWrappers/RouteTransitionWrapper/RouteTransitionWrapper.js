import React from 'react'
import Anime from 'react-anime'

const transition = {
    duration: 1000,
    scale: [0.7, 1.0],
    opacity: [0, 1],
    translateY: ['25vh', 0],
}

export default props => <Anime {...transition} {...props} />