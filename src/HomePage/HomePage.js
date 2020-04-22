import React from 'react'
import Title from './Title/Title'
import GameMenu from './GameMenu/GameMenu'
import Anime, { anime } from 'react-anime'

const HomePage = () => {
    return (
        <div className=".game-menu-container">
            <div className="home-page">
                <Anime
                    delay={anime.stagger(1600)}
                    scale={[0.1, 0.9]}
                    opacity={[0, 1]}
                >
                    <Title />
                    <GameMenu />
                </Anime>
            </div>
        </div>
    )
}

export default HomePage
