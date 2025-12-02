import React from 'react';
import './BeachExperience.css';

const BeachExperience = () => {
    const amenities = [
        'Direct Beach Access',
        'Heated Outdoor Pool',
        'Poolside Tiki Bar',
        'Fire Pit Lounge',
        'Whirlpool',
        'Pet-Friendly',
        'Free Parking'
    ];

    return (
        <section className="beach-experience">
            <div className="container">
                <div className="beach-experience__header">
                    <h2 className="beach-experience__title">Steps From the Sand</h2>
                    <p className="beach-experience__subtitle">
                        Enjoy oceanfront living at its finest. Our beachside location puts you moments away from Jacksonville Beach, with stunning views and resort-style amenities.
                    </p>
                </div>

                <div className="beach-experience__gallery">
                    <div className="beach-experience__image beach-experience__image--large">
                        <img src="/images/Twilight_-_Pool-2.jpg" alt="Heated pool at twilight" />
                        <span className="beach-experience__label">Heated Pool & Deck</span>
                    </div>
                    <div className="beach-experience__image">
                        <img src="/images/Twilight_-_Fire_Pit.jpg" alt="Fire pit lounge area" />
                        <span className="beach-experience__label">Fire Pit Lounge</span>
                    </div>
                </div>

                <div className="beach-experience__amenities">
                    <h3>Resort Amenities</h3>
                    <ul className="beach-experience__list">
                        {amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default BeachExperience;
