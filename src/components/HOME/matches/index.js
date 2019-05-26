import React from 'react';
import { Tag } from '../../UI/misc';
import Matches from './blocks';
import Slide from 'react-reveal/Slide';
//todo - make more matches tag apear after matches appear
const MatchesHome = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag
                    bck="#0e1731"
                    size="50px"
                    color="#fff"
                >
                    matches
                </Tag>

                <Matches />

                <Slide bottom>
                    <Tag
                        bck="#fff"
                        size="50px"
                        color="#0e1731"
                        link={true}
                        linkto="/the_team"
                    >
                        more matches
                    </Tag>
                </Slide>

            </div>
        </div>
    );
};

export default MatchesHome;