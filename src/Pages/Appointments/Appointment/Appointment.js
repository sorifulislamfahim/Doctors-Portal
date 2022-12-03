import React, { useState } from 'react';
import AppointmentBaner from '../AppointmentBanar/AppointmentBaner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedData, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBaner
                selectedData={selectedData}
                setSelectedDate={setSelectedDate}
            ></AppointmentBaner>
            <AvailableAppointments
                selectedData={selectedData}
                setSelectedDate={setSelectedDate}
            ></AvailableAppointments>
        </div>
    );
};

export default Appointment;