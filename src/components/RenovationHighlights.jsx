import React from 'react';
import './RenovationHighlights.css';

const RenovationHighlights = () => {
    const highlights = [
        {
            id: 1,
            title: 'Beach Views',
            description: 'Wake up to stunning views of Jacksonville Beach, just steps from the sand and surf.',
            image: '/images/BeachView.jpg'
        },
        {
            id: 2,
            title: 'Refreshed Guest Rooms',
            description: 'Retreat to our newly renovated rooms featuring plush bedding and modern amenities.',
            image: '/images/Roomview.png'
        },
        {
            id: 3,
            title: 'Meeting Spaces',
            description: 'Host your next event in our versatile meeting rooms, equipped with modern technology and flexible layouts.',
            image: '/images/Meeting Room.jpg'
        }
    ];

    return (
        <section className="highlights">
            <div className="container">
                <h2 className="highlights__title">Renovation Highlights</h2>
                <p className="highlights__intro">Discover the details of our comprehensive transformation.</p>
                <div className="highlights__grid">
                    {highlights.map((item) => (
                        <div key={item.id} className="highlight-card">
                            <div className="highlight-card__image-wrapper">
                                <img src={item.image} alt={item.title} className="highlight-card__image" />
                            </div>
                            <div className="highlight-card__content">
                                <h3 className="highlight-card__title">{item.title}</h3>
                                <p className="highlight-card__desc">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RenovationHighlights;
