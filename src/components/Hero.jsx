import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__overlay"></div>
            <div className="container hero__content">
                <h1 className="hero__title">A New Wave of Luxury</h1>
                <p className="hero__subtitle">Experience the newly renovated Courtyard Jacksonville Beach Oceanfront.</p>
                <div className="hero__actions">
                    <a href="https://www.marriott.com/reservation/rateListMenu.mi?defaultTab=standard&roomCount=1&numAdultsPerRoom=2&fromDate=&toDate=&flexibleDateSearch=false&t-Number=&lengthOfStay=1&marriottBrands=CY&destinationAddress.destination=&destinationAddress.city=Jacksonville+Beach&destinationAddress.stateProvince=FL&destinationAddress.postalCode=&destinationAddress.country=US&guestPreferences=&propertyCode=jaxjv" className="hero__btn hero__btn--primary" target="_blank" rel="noopener noreferrer">Book Now</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
