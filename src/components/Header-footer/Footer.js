import React from 'react';
import { CityLogo } from '../UI/Icons';

const newD = new Date();
const newY = newD.getFullYear();

const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <CityLogo
                  width="70px"
                  height="70px"
                  link={true}
                  linkTo="/"
                />
            </div>
            <div className="footer_discl">
                Manchester City {newY}.All rights Reserved
            </div>
        </footer>
    );
};

export default Footer;