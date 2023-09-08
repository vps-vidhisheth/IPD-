import React from 'react';
import electionImage from './../assets/image 3.png';
import modeImage from './../assets/Group 11.svg'
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex z-10 my-auto bg-black justify-between py-2 pl-2 pr-1'>
        <NavLink to='/' className='flex  h-[100%] my-auto '>
            <img src={electionImage} className='w-[42px] h-[42px] mx-2  inline'/>
            <div className='text-white font-normal text-[12px] tracking-[1.005px] '>
                <p>Election Portal</p>
                <p className='font-medium'>Election Commission of india</p>
            </div>
        </NavLink>
        <div className='text-white'>
            <NavLink to='/login' className='px-5 py-2 text-[20px] font-normal leading-normal inline border-r-2 border-r-gray'>Login</NavLink>
            <NavLink to='/sign-up' className='px-5 py-2 text-[20px] font-normal leading-normal inline border-r-2 border-r-gray'>Sign-up</NavLink>
            <img src={modeImage}  className='inline cursor-pointer px-1' />
        </div>
    </div>
  )
}

export default Navbar;