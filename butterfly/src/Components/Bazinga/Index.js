import React from 'react';
// Styles
import Style from '../../Styles/Bazinga/Index.module.css';
// Component
import Sitcom from './Sitcom';
// Images
import friendsPoster from '../../Images/Bazinga/friendsPoster.png';
import tbbtPoster from '../../Images/Bazinga/tbbtPoster.jpeg';
import Footer from './Footer';

const Index = () => {
    return (
        <div className={Style.container}>
            <div className={Style.header}>
                <h1>Welcome!</h1>
                <h2>What do you wanna watch today?</h2>
            </div>
            <div className={Style.main}>
                <Sitcom poster={friendsPoster} title='F.R.I.E.N.D.S' showId='/431' />
                <Sitcom poster={tbbtPoster} title='T Big Bang T' showId='/66' />
            </div>
            <div className={Style.footer}>
                <Footer />
            </div>
        </div>
    );
};

export default Index;