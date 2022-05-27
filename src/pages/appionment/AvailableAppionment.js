import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppionment = ({date, setDate}) => {
    const [services, setService] =useState([]);
    const [treatment, setTreatment]=useState(null);
    useEffect(()=>{
        fetch('service.json')
        .then(res=> res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className=''>
            <h2 className='text-center text-primary text-2xl pb-5'>Available appionment on : {format(date, 'pp')}</h2>
            <div className='w-75% grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=> <Service key={service.id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
           {treatment && <BookingModal setTreatment={setTreatment} date={date} treatment={treatment}></BookingModal>} 
        </div>
    );
};

export default AvailableAppionment;