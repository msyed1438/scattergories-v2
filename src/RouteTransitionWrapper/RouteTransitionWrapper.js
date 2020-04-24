import React from 'react'
import Anime from 'react-anime'

const transition = {
    duration: 1500,
    scale: [0.1, 0.9],
    opacity: [0, 1],
    translateY: ['50vh', 0],
}

export default props => <Anime {...transition} {...props} />