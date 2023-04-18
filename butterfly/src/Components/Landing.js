import React from 'react';
// Components
import Header from './Header';
import Torabiika from './Torabiika';
import Plot from './Plot';
import Bazinga from './Bazinga';
import Footer from './Footer';
// Style
import '../Styles/landing.css';

const Landing = () => {
    return (
        <div>
            <Header />
            <Torabiika />
            <Plot />
            <Bazinga />
            <Footer />
        </div>
    );
};

export default Landing;