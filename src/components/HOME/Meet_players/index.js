import React, { Component } from 'react';
import Stripes from '../../../resources/images/stripes.png';
import { Tag } from '../../UI/misc';
import Reveal from 'react-reveal/Reveal';
import Cards from './cards';


class MeetPlayers extends Component {

    state = {
        show: false
    }

    render() {
        return (
            <Reveal
                fraction={0.7}
                onReveal={ ()=>{ this.setState({show: true}) } }
            >
                <div className="home_meetplayers" style={{ background: `#fff url(${Stripes})` }}>
                    <div className="container">
                        <div className="home_meetplayers_wrapper">
                            <div className="home_card_wrapper">
                                <Cards
                                    show={this.state.show}
                                />
                            </div>
                            <div className="home_text_wrapper">
                                <div>
                                    <Tag
                                        bck="#0e1731"
                                        size="100px"
                                        color="white"
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        Meet
                                </Tag>
                                </div>
                                <div>
                                    <Tag
                                        bck="#0e1731"
                                        size="100px"
                                        color="white"
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        the
                                </Tag>
                                </div>
                                <div>
                                    <Tag
                                        bck="#0e1731"
                                        size="100px"
                                        color="white"
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        players
                                </Tag>
                                </div>
                                <div>
                                    <Tag
                                        bck="white"
                                        size="27px"
                                        color="#0e1731"
                                        link={true}
                                        linkto="/the_team"
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '27px',
                                            border: '1px solid #0e1731',
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        meet here
                                </Tag>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        );
    }
}

export default MeetPlayers;