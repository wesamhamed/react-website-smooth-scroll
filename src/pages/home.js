import React, { useState } from 'react';
import { Footer, HeroSection, InfoSection, Navbar, Services, Sidebar } from '../components';
import {homeObjOne,homeObjTwo,homeObjThree} from "../components/InfoSection/Data";

const HomePage = () => {
    const [isOpen, setIsopen] = useState(false);
    const toggle = () => {
        setIsopen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services/>
            <InfoSection {...homeObjThree} />
            <Footer/>
        </>
    )
}

export default HomePage;
