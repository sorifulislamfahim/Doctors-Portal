import React from 'react';

const AppointmentOption = ({ appointment, setTreatment }) => {
    const { name, slots } = appointment;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="font-bold text-2xl text-primary">{name}</h2>
                    <p className='my-2'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p className='my-2'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                    <div>
                        <label disabled={slots.length === 0} onClick={() => setTreatment(appointment)} htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;