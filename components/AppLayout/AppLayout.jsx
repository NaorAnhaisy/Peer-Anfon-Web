import React from 'react';
import Navbar from '../NavBar/Navbar';
import Footer from '../FooterBar/Footer';

const AppLayout = ({ children }) => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default AppLayout;