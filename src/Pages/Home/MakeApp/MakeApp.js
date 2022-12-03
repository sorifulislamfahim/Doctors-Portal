import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import PrimaryBtn from '../../../Componants/PrimaryBtn/PrimaryBtn';

const MakeApp = () => {
    return (
        <section className='my-24'>
            <div className="hero bg-hero-pattern2">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className="-mt-32 -mb-4 hidden md:block lg:w-1/2 rounded-lg" />
                    <div>
                        <h5 className='text-primary text-xl font-bold my-3'>Appointment</h5>
                        <h1 className="text-4xl font-semibold my-4 text-white">Make an appointment Today</h1>
                        <p className="py-6 text-lg text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <PrimaryBtn>Make Appointment</PrimaryBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeApp;