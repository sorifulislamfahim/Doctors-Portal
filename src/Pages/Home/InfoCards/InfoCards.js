import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            title: 'Opening Hours',
            description: 'Open 09.00 am to 05.00 pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary text-white font-bold'
        },
        {
            id: 2,
            title: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            title: 'Contact us now',
            description: '+000 123 456789',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary text-white font-bold'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4'>
            {
                cardData.map(card => <InfoCard
                    key={card._id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;