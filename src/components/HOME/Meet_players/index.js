import React, { Component } from 'react';
import Stripes from '../../../resources/images/stripes.png';
import { Tag } from '../../UI/misc'; 


class MeetPlayers extends Component {

    state = {

    }

    render() {
        return (
            <div className="home_meetplayers" style={{background: `#fff url(${Stripes})`}}>
                <div className="container">
                    <div className="home_meetplayers_wrapper">
                        <div className="home_card_wrapper">
                            card
                        </div>
                        <div className="home_text_wrapper">
                            <div>
                                <Tag
                                    bck="#0e1731"
                                    size="100px"
                                    color="white"
                                    add={{
                                        display:'inline-block',
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
                                        display:'inline-block',
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
                                        display:'inline-block',
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
                                        display:'inline-block',
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
        );
    }
}

export default MeetPlayers;