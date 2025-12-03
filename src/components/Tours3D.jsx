import React, { useState } from 'react';
import './Tours3D.css';

const Tours3D = () => {
    const baseUrl = import.meta.env.BASE_URL;
    const [currentImageIndex, setCurrentImageIndex] = useState({});
    const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });

    const tours = [
        {
            id: 'two-queen',
            title: '2 Queen Guest Room',
            description: 'Spacious guest room featuring two queen beds, perfect for families or groups traveling together.',
            matterportUrl: 'https://my.matterport.com/show/?m=JCCYKtwuR1H',
            images: [
                `${baseUrl}images/TwoQueenRoom1.jpg`,
                `${baseUrl}images/TwoQueenRoom2.jpg`
            ]
        },
        {
            id: 'king-sofa',
            title: '1 King, Sofa Bed',
            description: 'Comfortable king room with a sofa bed, ideal for business travelers or couples needing extra flexibility.',
            matterportUrl: 'https://my.matterport.com/show/?m=LAU5qm1CZCb',
            images: [
                `${baseUrl}images/KingSuite2.jpg`,
                `${baseUrl}images/KingSuite1.jpg`
            ]
        },
        {
            id: 'executive-suite',
            title: '1 Bedroom Executive Suite',
            description: 'Luxurious suite featuring 1 king bed, 2 sofa beds, and a private balcony with stunning views.',
            matterportUrl: 'https://my.matterport.com/show/?m=jQQd7a99cpv',
            images: [
                `${baseUrl}images/ExecutiveSuite1.jpg`,
                `${baseUrl}images/ExecutiveSuite2.jpg`
            ]
        },
        {
            id: 'meetings',
            title: 'Meeting Rooms',
            description: 'Versatile meeting spaces equipped for your business events and social gatherings.',
            matterportUrl: 'https://my.matterport.com/show/?m=HTN4NeG5Du1',
            images: [
                `${baseUrl}images/MeetingRoom1.jpg`,
                `${baseUrl}images/MeetingRoom2.jpg`
            ]
        }
    ];

    const getCurrentIndex = (tourId) => currentImageIndex[tourId] || 0;

    const nextImage = (tourId, totalImages) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [tourId]: (getCurrentIndex(tourId) + 1) % totalImages
        }));
    };

    const prevImage = (tourId, totalImages) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [tourId]: (getCurrentIndex(tourId) - 1 + totalImages) % totalImages
        }));
    };

    const openLightbox = (images, index) => {
        setLightbox({ isOpen: true, images, currentIndex: index });
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightbox({ isOpen: false, images: [], currentIndex: 0 });
        document.body.style.overflow = '';
    };

    const lightboxNext = () => {
        setLightbox(prev => ({
            ...prev,
            currentIndex: (prev.currentIndex + 1) % prev.images.length
        }));
    };

    const lightboxPrev = () => {
        setLightbox(prev => ({
            ...prev,
            currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
        }));
    };

    return (
        <>
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
                                <div className="tours-3d__photos">
                                    <div className="tours-3d__carousel">
                                        <button
                                            className="tours-3d__carousel-btn tours-3d__carousel-btn--prev"
                                            onClick={() => prevImage(tour.id, tour.images.length)}
                                            aria-label="Previous image"
                                        >
                                            ‹
                                        </button>
                                        <div className="tours-3d__carousel-image">
                                            <img
                                                src={tour.images[getCurrentIndex(tour.id)]}
                                                alt={`${tour.title} - Photo ${getCurrentIndex(tour.id) + 1}`}
                                            />
                                            <button
                                                className="tours-3d__expand-btn"
                                                onClick={() => openLightbox(tour.images, getCurrentIndex(tour.id))}
                                                aria-label="View full size"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                                                </svg>
                                                Expand
                                            </button>
                                        </div>
                                        <button
                                            className="tours-3d__carousel-btn tours-3d__carousel-btn--next"
                                            onClick={() => nextImage(tour.id, tour.images.length)}
                                            aria-label="Next image"
                                        >
                                            ›
                                        </button>
                                    </div>
                                    <div className="tours-3d__carousel-dots">
                                        {tour.images.map((_, index) => (
                                            <span
                                                key={index}
                                                className={`tours-3d__dot ${index === getCurrentIndex(tour.id) ? 'tours-3d__dot--active' : ''}`}
                                                onClick={() => setCurrentImageIndex(prev => ({ ...prev, [tour.id]: index }))}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Lightbox Modal */}
            {lightbox.isOpen && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox__close" onClick={closeLightbox}>×</button>
                    <button
                        className="lightbox__nav lightbox__nav--prev"
                        onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
                    >
                        ‹
                    </button>
                    <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={lightbox.images[lightbox.currentIndex]}
                            alt={`Photo ${lightbox.currentIndex + 1}`}
                        />
                    </div>
                    <button
                        className="lightbox__nav lightbox__nav--next"
                        onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
                    >
                        ›
                    </button>
                    <div className="lightbox__counter">
                        {lightbox.currentIndex + 1} / {lightbox.images.length}
                    </div>
                </div>
            )}
        </>
    );
};

export default Tours3D;
