import React from 'react'
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';

const Vote = () => {
  return (
    <div className='text-white'>
        <Navbar />
        <p className='text-center text-5xl py-5 pb-10'> Voter Confirmation Page </p>
        <div className='px-10 text-xl flex flex-col gap-3'>
            <p> Name : Jatin </p>
            <p> Votix id : Jqw5209 </p>
            <p> Registered Phone Number : +91-720835037 </p>
            <p> Aadhar Number : 6785 8758 9697 </p>
            <p> Age : 58 </p>
            <p> Aadhar Address : Mohak Nagar, Vidhi Road, Pandey Bunglow, Krishit - North, Priyansh - 400101 </p>
        </div>
        <div className='px-10 text-xl flex flex-col gap-3 mt-10'>
            <div>
                <input type='checkbox' id='checkbox1' className='' />
                <label htmlFor='checkbox1'> I have read all the information and I confirm the information to be correct </label>
            </div>
            <div>
                <input type='checkbox' id='checkbox1' className='' />
                <label htmlFor='checkbox1'> I have read all the instructions, terms and conditions and I agree them. </label>
            </div>
            <div className='flex justify-between mt-20'>
              <NavLink> Contact Us </NavLink>
              <NavLink className='bg-slate-800 px-5 py-1 rounded-3xl border' > Next </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Vote;