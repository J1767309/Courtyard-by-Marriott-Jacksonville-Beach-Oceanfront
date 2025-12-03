import React from 'react';
import './Tours3D.css';

const Tours3D = () => {
    const baseUrl = import.meta.env.BASE_URL;

    const tours = [
        {
            id: 'two-queen',
            title: '2 Queen Guest Room',
            description: 'Spacious guest room featuring two queen beds, perfect for families or groups traveling together.',
            matterportUrl: 'https://my.matterport.com/show/?m=JCCYKtwuR1H',
            image: `${baseUrl}images/TwoQueenRoom1.jpg`
        },
        {
            id: 'king-sofa',
            title: '1 King, Sofa Bed',
            description: 'Comfortable king room with a sofa bed, ideal for business travelers or couples needing extra flexibility.',
            matterportUrl: 'https://my.matterport.com/show/?m=LAU5qm1CZCb',
            image: `${baseUrl}images/KingSuite1.jpg`
        },
        {
            id: 'executive-suite',
            title: '1 Bedroom Executive Suite',
            description: 'Luxurious suite featuring 1 king bed, 2 sofa beds, and a private balcony with stunning views.',
            matterportUrl: 'https://my.matterport.com/show/?m=jQQd7a99cpv',
            image: `${baseUrl}images/KingSuite2.jpg`
        },
        {
            id: 'meetings',
            title: 'Meeting Rooms',
            description: 'Versatile meeting spaces equipped for your business events and social gatherings.',
            matterportUrl: 'https://my.matterport.com/show/?m=HTN4NeG5Du1',
            image: `${baseUrl}images/MeetingRoom1.jpg`
        }
    ];

    return (
        <div className="tours-3d-wrapper">
            {tours.map((tour) => (
                <section key={tour.id} className={`tours-3d-section tours-3d-section--${tour.id}`}>
                    <div className="container">
                        <div className="tours-3d__header">
                            <h2 className="tours-3d__title">{tour.title}</h2>
                            <p className="tours-3d__subtitle">{tour.description}</p>
                        </div>

                        <div className="tours-3d__content">
                            <div className="tours-3d__viewer">
                                <iframe
                                    src={tour.matterportUrl}
                                    allowFullScreen
                                    allow="autoplay; fullscreen; web-share; xr-spatial-tracking"
                                    title={`3D Tour - ${tour.title}`}
                                    className="tours-3d__iframe"
                                />
                            </div>
                            <div className="tours-3d__info">
                                <h3>About this Space</h3>
                                <p>{tour.description}</p>
                                <div className="tours-3d__photo-preview">
                                    <img src={tour.image} alt={tour.title} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Tours3D;
