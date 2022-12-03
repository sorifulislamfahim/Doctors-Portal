import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({ selectedData, setSelectedDate }) => {
    const [appointmentsOption, setAppointmentsOption] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentService.json')
            .then(res => res.json())
            .then(data => setAppointmentsOption(data))
    }, [])
    return (
        <section className='my-20'>
            <p className='text-center text-secondary font-bold text-lg'>Available Appointments on {format(selectedData, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    appointmentsOption?.map(appointment => <AppointmentOption
                        key={appointment._id}
                        appointment={appointment}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
           { treatment &&
           <BookingModal
                treatment={treatment}
                selectedData={selectedData}
                setTreatment={setTreatment}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;