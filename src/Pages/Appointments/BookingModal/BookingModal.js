import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, setTreatment, selectedData }) => {
    const { name, slots } = treatment;
    const date = format(selectedData, 'PP')

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot, 
            email, 
            phone
        }
        console.log(booking)
        setTreatment(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 mt-10'>
                        <input type="text" name='date' value={date} readOnly className="input input-bordered bg-gray-300" />

                        <select name='slot' className="select select-bordered">

                            {
                                slots?.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered" />
                        <input type="submit" className='btn' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;