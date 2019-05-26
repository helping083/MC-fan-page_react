import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reverseArray }  from '../../UI/misc';
import MatchesBlock from '../../UI/matches_blog';

class Blocks extends Component {
    state = {
        matches: []
    }

    componentDidMount() {
        firebaseMatches.limitToLast(6).once('value')
         .then((snapshot)=>{
             const matches = firebaseLooper(snapshot)
             this.setState({matches: reverseArray(matches)})
         })
         
    }

    showMatches=(matches)=>(
        matches ?
            matches.map((item, index)=>(
                <div className="item" key={index}>
                    <div className="wrapper">
                        <MatchesBlock match={item} index={index}/>
                    </div>
                </div>
            ))
        :null
    )

    render() {
        console.log(this.state.matches)
        return (
            <div className="home_matches">  
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default Blocks;