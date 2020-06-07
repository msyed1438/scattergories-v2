import React from 'react'
import Anime, { anime } from 'react-anime'

const transition = {
    delay: anime.stagger(200),
    scale: [0.1, 1.0],
    opacity: [0, 1],
}

export default props => <Anime {...transition} {...props} />
