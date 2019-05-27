import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import Otamedi from '../../../resources/images/players/Otamendi.png';
import PlayerCard from '../../UI/playerCard';


class Cards extends Component {
    state = {
        show: this.props.show,
        cards: [
            {
                bottom: 90,
                left: 300
            },
            {
                bottom: 60,
                left: 200
            },
            {
                bottom: 30,
                left: 100
            },
            {
                bottom: 0,
                left: 0
            }
        ]
    }

    showCards = () => (
         this.state.cards.map((item,index)=>(
            <Animate
                key={index}
                show={this.props.show}
                start={{
                    left: 0,
                    bottom: 0
                }}
                enter={{
                    left: [item.left],
                    bottom: [item.bottom],
                    timing: {duration: 500, ease: easePolyOut}
                }}
            >
                {({left, bottom})=>{
                    return (
                        <div
                            style={{
                                position: 'absolute',
                                left,
                                bottom
                            }}
                        >
                                <PlayerCard
                                    number="30"
                                    name="Nicloas"
                                    lastname="Otamendi"
                                    bck={Otamedi}
                                />
                        </div>
                    )
                }}
            </Animate>
         ))
    )

    render() {
        return (
            <div>
                {this.showCards()}
            </div>
        );
    }
}

export default Cards;