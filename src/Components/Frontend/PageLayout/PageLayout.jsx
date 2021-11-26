import React from 'react';
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const PageLayout = ({children}) => {
    return (
        <div className="mainContainer">
            <Navigation></Navigation>
            <div className="mainPageContainer">
                {children}
            </div>
            <div className="footerContainer">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default PageLayout;