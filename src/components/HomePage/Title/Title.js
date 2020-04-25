import React from 'react'
import Anime, { anime } from 'react-anime'

const NameInSpanLetters = ({ name }) => {
    return name.split('').map(letter => <span>{letter}</span>)
}

const Title = ({ name }) => {
    return (
        <div className="title">
            <Anime
                delay={anime.stagger(100)}
                scale={[0.1, 1.0]}
                opacity={[0, 1]}
            >
                <span className="title-letter">S</span>
                <span className="title-letter">c</span>
                <span className="title-letter">a</span>
                <span className="title-letter">t</span>
                <span className="title-letter">t</span>
                <span className="title-letter">e</span>
                <span className="title-letter">r</span>
                <span className="title-letter">g</span>
                <span className="title-letter">o</span>
                <span className="title-letter">r</span>
                <span className="title-letter">i</span>
                <span className="title-letter">e</span>
                <span className="title-letter">s</span>
                <span className="title-letter">!</span>
            </Anime>
        </div>
    )
}

export default Title
