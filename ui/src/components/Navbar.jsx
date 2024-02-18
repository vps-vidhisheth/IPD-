import React from 'react';
import logo from '../assets/Logo.png';
import strip from '../assets/Strip.png'
import { NavLink } from 'react-router-dom';

const Navbar = ({user}) => {
  return (
    <div className='text-white flex items-center justify-between px-5 py-5'>
        <div className='flex items-center cursor-pointer gap-5'>
            <img src={logo} className='w-[60px] h-[60px]' />
            <div>
                <p className='font-bold text-xl'>Votix.</p>
                <p>Decentralized Voting</p>
            </div>
        </div>

        <div className='flex border-2 rounded-3xl justify-around py-1 items-center'>
            <NavLink to={'/'} className='text-xl px-10 border-r-2 cursor-pointer'>Home</NavLink>
            <NavLink to={'/about'} className='text-xl px-10 border-r-2 cursor-pointer'>About Us</NavLink>
            <NavLink to={'/contact'} className='text-xl px-10 border-r-2 cursor-pointer'>Contact Us</NavLink>
            {
                !user ? <NavLink to={'login'} className='text-xl px-10 cursor-pointer'>Login</NavLink> :
                <NavLink to={'vote'} className='text-xl px-10 cursor-pointer'> Vote </NavLink>
            }
        </div>

        {
            !user ? <div className='flex items-center'>
                <NavLink to={'login'} className='bg-[#E4EBEC] text-black rounded py-2 px-6 mx-3 border-r-4'>LOGIN </NavLink>
                <img src={strip} className='h-[60px] w-[2px]' />
                <NavLink to={'register'} className='bg-[#E4EBEC] text-black rounded py-2 px-5 mx-2'>SIGNUP </NavLink>
            </div>:
            <button className='bg-[#E4EBEC] text-black rounded py-2 px-5 mx-2'> Logout </button>
        }
    </div>
  )
}

export default Navbar