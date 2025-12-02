import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <span className="footer__logo">Courtyard</span>
                        <span className="footer__sub">by Marriott</span>
                        <p className="footer__address">
                            1617 1st Street North<br />
                            Jacksonville Beach, Florida 32250 USA
                        </p>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>&copy; 2025 Marriott International, Inc. All rights reserved.</p>
                    <div className="footer__legal">
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy & Cookie Statement</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
