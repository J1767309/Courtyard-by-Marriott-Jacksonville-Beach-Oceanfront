import React from 'react';
import './ThingsToDo.css';

const ThingsToDo = () => {
    const rentals = [
        { name: 'Surfboards', icon: '🏄' },
        { name: 'Kayaks', icon: '🚣' },
        { name: 'Bikes', icon: '🚴' },
        { name: 'Beach Chairs', icon: '🏖️' },
        { name: 'Umbrellas', icon: '⛱️' },
        { name: 'Skimboards', icon: '🌊' }
    ];

    const nearby = [
        { name: 'Jacksonville Beach Pier', distance: 'Walking distance' },
        { name: 'Beaches Town Center', distance: '1.8 miles' },
        { name: 'Kathryn Abbey Hanna Park', distance: '6.5 miles' },
        { name: 'EverBank Stadium', distance: '20 min drive' },
        { name: 'University of North Florida', distance: '15 min drive' }
    ];

    return (
        <section className="things-to-do">
            <div className="container">
                <div className="things-to-do__header">
                    <h2 className="things-to-do__title">Things to Do</h2>
                    <p className="things-to-do__subtitle">
                        From beach adventures to local attractions, there's something for everyone.
                    </p>
                </div>

                <div className="things-to-do__grid">
                    <div className="things-to-do__card">
                        <h3>Beach Rentals</h3>
                        <p className="things-to-do__partner">via East Coast Sports Rental</p>
                        <ul className="things-to-do__rentals">
                            {rentals.map((item, index) => (
                                <li key={index}>
                                    <span className="things-to-do__icon">{item.icon}</span>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="things-to-do__card">
                        <h3>Nearby Attractions</h3>
                        <ul className="things-to-do__nearby">
                            {nearby.map((place, index) => (
                                <li key={index}>
                                    <span className="things-to-do__place">{place.name}</span>
                                    <span className="things-to-do__distance">{place.distance}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="things-to-do__card things-to-do__card--eco">
                        <div className="eco-badge">
                            <span className="eco-badge__icon">🌿</span>
                            <h3>Green Lodging Certified</h3>
                            <p>Recognized by the State of Florida as a Green Lodging Property and Most Sea Turtle Eco-Friendly Hotel.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThingsToDo;
