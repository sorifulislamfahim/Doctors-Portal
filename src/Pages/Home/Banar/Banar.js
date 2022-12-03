import React from 'react';
import chire from '../../../assets/images/chair.png'
import PrimaryBtn from '../../../Componants/PrimaryBtn/PrimaryBtn';

const Banar = () => {
    return (
        <div className={`hero py-28 bg-hero-pattern`}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chire} className="lg:w-1/2 rounded-lg shadow-2xl mx-0" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banar;