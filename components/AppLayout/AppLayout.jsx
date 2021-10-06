import React from 'react';
import Navbar from '../NavBar/Navbar'
// import Footer from '../Footer/Footer'

const AppLayout = ({ children }) => {
    return (
        <>
            <div>
                <Navbar />
                {/* <div style={{ opacity: '0', height: '70px' }}></div> */}
            </div>
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    );
};

export default AppLayout;