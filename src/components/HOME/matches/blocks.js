import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../UI/misc';
import MatchesBlock from '../../UI/matches_blog';
import Slide from 'react-reveal/Slide';

class Blocks extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        matches: []
    }

    componentDidMount() {
        firebaseMatches.limitToLast(6).once('value')
            .then((snapshot) => {
                const matches = firebaseLooper(snapshot)
                this.setState({ matches: reverseArray(matches) })
                this.props.setMatchess({ matches: reverseArray(matches) })
            })
    }

    showMatches = (matches) => {
        return (
            matches ?
                matches.map((item, index) => (
                    <Slide bottom key={index} onReveal={() => console.log('hello')}>
                        <div className="item">
                            <div className="wrapper">
                                <MatchesBlock match={item} index={index} />
                            </div>
                        </div>
                    </Slide>
                ))
                : null
        )
    
    }


    render() {
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default Blocks;