import React from 'react';
import img1 from '../../../assets/images/people1.png'
import img2 from '../../../assets/images/people2.png'
import img3 from '../../../assets/images/people3.png'
import PataintCard from './PataintCard';
import quote from '../../../assets/icons/quote.svg'

const Pataints = () => {
    const pataintData = [
        {
            id: 1,
            name: 'Winson Herry',
            add: 'California',
            img: img1
        },
        {
            id: 2,
            name: 'Bill Chames',
            add: 'Washignton',
            img: img2
        },
        {
            id: 1,
            name: 'Miccra Tems',
            add: 'Belgiam',
            img: img3
        },
    ]
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-primary text-xl font-bold'>Testimonial</h3>
                    <h2 className='text-4xl font-medium'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5'>
                {
                    pataintData.map(pataint => <PataintCard
                        key={pataint.id}
                        pataint={pataint}
                    ></PataintCard>)
                }
            </div>
        </div>
    );
};

export default Pataints;