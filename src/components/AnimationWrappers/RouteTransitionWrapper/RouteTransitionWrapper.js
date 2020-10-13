import React from 'react'
import Anime from 'react-anime'

const transition = {
    duration: 1500,
    scale: [0.25, 1.0],
    opacity: [0, 1],
}

export default props => <Anime {...transition} {...props} />
