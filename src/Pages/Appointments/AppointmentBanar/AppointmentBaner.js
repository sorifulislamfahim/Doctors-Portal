import React from 'react';
import chire from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBaner = ({selectedData, setSelectedDate}) => {    
    return (
        <header className='py-10 bg-hero-pattern'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chire} alt='dentist chire' className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='lg:w-1/2'>
                        <DayPicker
                            mode='single'
                            selected={selectedData}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBaner;