import React from 'react';

import AboutpageHero from '../../components/aboutpageComponents/AboutpageHero';
import Services from '../../components/homepageComponnets/Services';
import Growth from '../../components/aboutpageComponents/Growth';

const About = () => {
    return (
        <div>
            <AboutpageHero />
            <Growth />
            <Services />
        </div>

    );
};

export default About;
