import React from 'react';
import Featured from './Featured'
import Matches from './matches/index';
import MeetPlayers from './Meet_players'
import Promotion from '../HOME/promotion/';
const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <Matches/>
            <MeetPlayers/>
            <Promotion/>
        </div>
    );
};

export default Home;