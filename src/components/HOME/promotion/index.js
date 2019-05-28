import React from 'react';
import Enroll from './enroll';
import Animation from './animation';

const Promotion = () => {
    return (
        <div className="promotion_wrapper" style={{background: 'white'}}>
            <div className="container">
                <Animation/>
                <Enroll/>
            </div>
        </div>
    );
};

export default Promotion;