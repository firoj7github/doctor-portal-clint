import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppionmentBanner = ({date, setDate}) => {
    
    return (
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} class="max-w-lg rounded-lg shadow-2xl" alt='Dental pic'/>
          <div className='pr-72'>
          <DayPicker 
           mode="single"
           selected={date}
           onSelect={setDate}
          />
         
          </div>
        </div>
      </div>
    );
};

export default AppionmentBanner;