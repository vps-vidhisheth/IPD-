import React from 'react';
import electionImage from './../assets/image 3.png';
import modeImage from './../assets/Group 11.svg'
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({dark,setDark}) => {

  return (
    <div className={`${dark ? 'bg-black text-white' : 'bg-[#F6F8FF] text-black'} flex-wrap flex z-10 my-auto  justify-between py-2 pl-2 pr-1`}>
        <NavLink to='/' className='flex  h-[100%] my-auto '>
            <img src={electionImage} className='w-[42px] h-[42px] mx-2  inline'/>
            <div className=' font-normal text-[12px] tracking-[1.005px] '>
                <p>Election Portal</p>
                <p className='font-medium'>Election Commission of india</p>
            </div>
        </NavLink>
        <div className=''>
            <NavLink to='/login' className={`px-5 py-2 text-[20px] font-normal leading-normal inline border-r-2 ${dark ? 'border-r-gray' : 'border-r-gray-500'}`}>Login</NavLink>
            <NavLink to='/sign-up' className={`px-5 py-2 text-[20px] font-normal leading-normal inline border-r-2 ${dark ? 'border-r-gray' : 'border-r-gray-500'}`}>Sign-up</NavLink>
            <img src={modeImage} onClick={()=>{setDark(!dark)}} className='inline cursor-pointer px-1' />
        </div>
    </div>
  )
}

export default Navbar;