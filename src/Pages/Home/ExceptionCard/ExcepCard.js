import React from 'react';
import img from '../../../assets/images/treatment.png'
import PrimaryBtn from '../../../Componants/PrimaryBtn/PrimaryBtn';

const ExcepCard = () => {
    return (
        <div className="card lg:card-side p-20">
            <div className='p-10'>
                <img className='rounded-md' src={img} alt="Movie" />
            </div>
            <div className="card-body lg:py-56 lg:w-1/2">
                <h2 className="card-title text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h2>
                <p className='my-3 text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div>
                    <PrimaryBtn>See More</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default ExcepCard;