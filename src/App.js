import React from 'react'
import Anime, { anime } from 'react-anime'

import Title from './Title/Title'
import GameMenu from './GameMenu/GameMenu'

import './App.css'

const App = props => (
    <Anime delay={anime.stagger(500)} scale={[0.1, 0.9]} opacity={[0, 1]}>
        <Title />
        <GameMenu />
    </Anime>
)

export default App
