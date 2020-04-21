import React from 'react'
import Anime, { anime } from 'react-anime'

const Title = () => {
    return (
        <div className="title">
            <Anime
                delay={anime.stagger(100)}
                scale={[0.1, 0.9]}
                opacity={[0, 1]}
            >
                <span> S</span>
                <span> c </span>
                <span> a </span>
                <span> t </span>
                <span> t </span>
                <span> e </span>
                <span> r </span>
                <span> g </span>
                <span> o </span>
                <span> r </span>
                <span> i </span>
                <span> e </span>
                <span> s </span>
                <span> ! </span>
            </Anime>
        </div>
    )
}

export default Title
