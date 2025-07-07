import React from 'react';

import AboutpageHero from '../../components/aboutpageComponents/AboutpageHero';
import Services from '../../components/homepageComponnets/Services';
import Growth from '../../components/aboutpageComponents/Growth';
import Employee from '../../components/aboutpageComponents/Employee';

const About = () => {
    return (
        <div>
            <AboutpageHero />
            <Growth />
            <Employee />
            <Services />
        </div>

    );
};

export default About;
