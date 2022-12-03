import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceCart from './ServiceCart';


const Services = () => {
    const cardData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            title: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            title: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            title: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,
        },
    ]
    return (
        <div className='mt-20'>
            <div className='text-center my-10'>
                <h2 className='font-bold text-lg text-primary uppercase'>Services</h2>
                <h1 className='text-3xl font-semibold'>Services We Provied</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    cardData.map(service => <ServiceCart
                        key={service.id}
                        service={service}
                    ></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Services;