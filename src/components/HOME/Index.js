import React, { Component } from 'react';
import Featured from './Featured'
import Matches from './matches/index';
import MeetPlayers from './Meet_players'
import Promotion from '../HOME/promotion/';

class Home extends Component {
    constructor() {
        super()
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }
    
    render() {
        return (
            <div className="bck_blue">
                <Featured />
                <Matches />
                <MeetPlayers />
                <Promotion />
            </div>
        );
    }
}

export default Home;
