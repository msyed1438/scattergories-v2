import React, { useState } from 'react'
import './SlideOutOnButtonPress.css'
import Anime from 'react-anime'

const SlideOutOnButtonPress = () => {
    const [showDiv2, setShowDiv2] = useState(false)

    let animePropsMount = {
        opacity: [0, 1],
        translateX: [-64, 0],
        easing: 'easeOutBounce',
        duration: 2000,
    }


    return (
        <div className="container">
            <div className="child one">
                <p>Div 1</p>
            </div>
            {showDiv2 && (
                <Anime {...animePropsMount}>
                    <div className="child two">
                        <p>Div 2</p>
                    </div>
                </Anime>
            )}
            <button
                onClick={() => {
                    setShowDiv2(!showDiv2)
                }}
            >
                Click me to slide out this guy
            </button>
        </div>
    )
}

export default SlideOutOnButtonPress
