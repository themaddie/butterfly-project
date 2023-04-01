import React from 'react';
// Styles
import Style from '../Styles/Landing.module.css';
// Components
import Header from './Header';
import Torabiika from './Torabiika';
import Plot from './Plot';
import Bazinga from './Bazinga';

const Landing = () => {
    return (
        <div className={Style.container}>
            <Header />
            <Torabiika />
            <Plot />
            <Bazinga />
        </div>
    );
};

export default Landing;