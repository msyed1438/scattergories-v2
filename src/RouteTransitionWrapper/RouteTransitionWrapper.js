import React from 'react'
import Anime from 'react-anime'

const transition = {
    opacity: [0, 1],
    translateY: ['100vh', 0],
}

export default props => <Anime prop={{ ...transition, ...props }}> </Anime>

const PageTransitionWrapper = ({children}) => {
    return (
        <Anime
            // delay={anime.stagger(1600)}
            translateY={['100vh', 0]}
            scale={[0.1, 0.9]}
            opacity={[0, 1]}
            {...props}
        >
            {children}
        </Anime>
    )
}
