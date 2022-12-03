import React from 'react';
import PrimaryBtn from '../../../Componants/PrimaryBtn/PrimaryBtn';

const Contact = () => {
    return (
        <div className='text-center bg-contact-bg py-10 mt-10'>
            <div>
                <h5 className='text-primary font-bold text-lg'>Contact Us</h5>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div className='w-3/4 mx-auto'>
                <input type="text" placeholder="Email Address" className="input input-bordered my-2 md:w-3/4 lg:w-1/2 mx-auto sm:w-full" />
                <br />
                <input type="text" placeholder="Subject" className="input input-bordered my-2 md:w-3/4 lg:w-1/2 mx-auto sm:w-full" />
                <br />
                <input type="text" placeholder="Your Message" className="h-28 input input-bordered my-3 md:w-3/4 lg:w-1/2 mx-auto sm:w-full" />
                <br />
                <PrimaryBtn>Submit</PrimaryBtn>
            </div>
        </div>
    );
};

export default Contact;