import React from 'react';
import Header from '../components/Header-footer/Header';
import Footer from '../components/Header-footer/Footer';

const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default Layout;