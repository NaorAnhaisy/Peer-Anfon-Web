import React from 'react';
import Navbar from '../NavBar/Navbar';
import Footer from '../FooterBar/Footer';
import PhoneWidget from '../PhoneWidget/PhoneWidget';

const AppLayout = ({ children }) => {
    return (
        <>
            <div>
                <Navbar />
                <PhoneWidget />
            </div>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default AppLayout;