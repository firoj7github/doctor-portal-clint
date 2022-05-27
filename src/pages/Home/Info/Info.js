import React from 'react';
import icon from '../../../assets/icons/clock.svg'
import icon1 from '../../../assets/icons/marker.svg'
import icon2 from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 text-white'>
            <div class="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
  <figure><img className='pl-5' src={icon} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">Opening Ours</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    
  </div>
</div>
            <div class="card lg:card-side bg-base-100 shadow-xl bg-accent text-white">
  <figure><img className='pl-5' src={icon1} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">Our Location</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    
  </div>
</div>
            <div class="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary text-white">
  <figure><img className='pl-5' src={icon2} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">Contact Us</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    
  </div>
</div>
        </div>
        
    );
};

export default Info;