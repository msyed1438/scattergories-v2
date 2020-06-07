import React, { Component } from 'react'
import Anime from 'react-anime'

class AnimeMountDismountExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mounted: false,
        }
    }

    dismount = () => {
        this.setState(({ mounted }) => ({ mounted: !mounted }))
    }

    componentWillUnmount() {
        
    }

    render() {
        let { mounted } = this.state


        let animePropsMount = {
            opacity: [0, 1],
            translateX: [-64, 0],
            easing: 'easeOutBounce',
            duration: 2000
        }

        let animePropsDismount = {
            opacity: [1, 0],
            translateX: [0, 100],
            // easing: 'easeOutBounce',
            duration: 5000
        }

        let animeProps;
        animeProps = mounted ? animePropsMount : animePropsDismount 
        

        return (
            <div>
                <Anime {...animeProps}>
                    {mounted ? <h1 onClick={this.dismount}>Heyyyy</h1> : <div>Yo</div>}
                </Anime>
                <button onClick={this.dismount}>Toggle mount</button>
            </div>
        )
    }
}

export default AnimeMountDismountExample
