import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import FeaturedPlayer from '../../../resources/images/featured_player.png';

//todo trim an image down
class text extends Component {
    state = {

    }

    animateNumber=()=>(
        <Animate
            show={true}
            start={{
                opacity:0,
                rotate:0
            }}
            enter={{
                opacity:[1],
                rotate:[360],
                timing:{duration: 1000, ease: easePolyOut}
            }}
        >
            {({opacity, rotate})=>{
                return (
                    <div className="featured_number"
                         style={{
                             opacity,
                             transform: `translate(260px, 170px) rotateY(${rotate}deg)`
                         }}
                    >
                        3
                    </div>
                )
            }}
        </Animate>
    )

    animateTextFirst=()=>(
        <Animate
            show={true}
            start={{
                opacity:0,
                x:703,
                y:450
            }}
            enter={{
                opacity:[1],
                x:[273],
                y:[450],
                timing:{delay: 200,duration: 500, ease: easePolyOut}
            }}
        >
            {({opacity,x, y})=>{
                return (
                    <div className="featured_first"
                     style={{
                         opacity,
                         transform: `translate(${x}px, ${y}px)`
                     }}
                    >
                        League
                    </div>
                )
            }}
        </Animate>
    )
    
    animateTextSecond=()=>(
        <Animate
            show={true}
            start={{
             opacity:0,
             x:-273,
             y:586
            }}
            enter={{
                opacity:[1],
                x:[273],
                y:[586],
                timing:{delay: 300,duration: 500, ease: easePolyOut}
            }}
        >
            {({opacity,x, y})=>{
                return (
                    <div className="featured_second"
                        style={{
                            opacity,
                            transform: `translate(${x}px, ${y}px)`
                        }}
                    >
                        Championships
                    </div>
                )
            }}
        </Animate>
    )
    animatePlayer=()=>(
        <Animate
            show={true}
            start={{
             opacity:0
            }}
            enter={{
                opacity:[1],
                timing:{delay: 1000,duration: 500, ease: easePolyOut}
            }}
        >
            {({opacity})=>{
                return (
                    <div className="featured_player"
                        style={{
                            opacity,
                            background: `url(${FeaturedPlayer})`,
                            transform: `translate(550px, 201px)`
                        }}
                    >
                        Championships
                    </div>
                )
            }}
        </Animate>
    )
    render() {
        return (
            <div className="featured_text">
              {this.animatePlayer()}
              {this.animateNumber()}  
              {this.animateTextFirst()}
              {this.animateTextSecond()}
            </div>
        );
    }
}

export default text;