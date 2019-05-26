import React from 'react';
import Featured from './Featured'
import Matches from './matches/index';
import MeetPlayers from './Meet_players'

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <Matches/>
            <MeetPlayers/>
        </div>
    );
};

export default Home;