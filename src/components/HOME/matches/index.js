import React, { useState } from 'react';
import { Tag } from '../../UI/misc';
import Matches from './blocks';
import Fade from 'react-reveal/Fade';
//todo - make more matches tag apear after matches appear


const MatchesHome = () => {
    const [matches, setMatches] = useState([]); 
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

                <Matches setMatchess={(matches) => setMatches(matches)} />
                {
                    matches ? 
                    <Fade big delay={1500} fraction={1}>
                        <Tag
                            bck="#fff"
                            size="50px"
                            color="#0e1731"
                            link={true}
                            linkto="/the_team"
                        >
                            more matches
                        </Tag>
                    </Fade> : null
                }


            </div>
        </div>
    );
};

export default MatchesHome;