import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, date, setTreatment}) => {
  const {name,slots}=treatment;
  const handleBooking=event=>{
    event.preventDefault();
    const slot= event.target.slot.value;
    console.log(slot);
    setTreatment(null);
  }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">{name}</h3>
    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-center'>
    <input type="text" disabled value={format(date, 'pp')} class="input w-full max-w-xs" />
    <select name='slot' class="select select-bordered w-full max-w-xs">
    {
      slots.map(slot=><option value={slot}>{slot}</option>)
     
    }
     
   </select>
    <input type="text" name='name' placeholder="name" class="input w-full max-w-xs" />
    <input type="email" name='email' placeholder="email" class="input w-full max-w-xs" />
    <input type="text" name='phone' placeholder="phone number" class="input w-full max-w-xs" />
    <input type="submit" value='submit' class="btn btn-primary w-full max-w-xs" />
    </form>
    
  </div>
</div>
        </div>
    );
};

export default BookingModal;