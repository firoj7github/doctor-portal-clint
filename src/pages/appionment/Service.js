import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots}=service;
    
    
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{slots.length}{slots.length >1 ? 'spaces' : 'space'}
             available</p>
          <div class="card-actions justify-center">
           
            <label for="booking-modal"
            disabled={slots.length ===0} 
            onClick={()=> setTreatment(service)} 
            class="btn btn-primary">Book Appionment</label>
          </div>
        </div>
        
      </div>
    );
};

export default Service;