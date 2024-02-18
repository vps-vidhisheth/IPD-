import React from 'react'
import logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <div className='text-white'>
        <Navbar />
        <p className='uppercase text-8xl px-7 mt-12 font-bold'> log in </p>
        <p className='px-10 text-xl font-medium'> & Start your Voting Journey </p>
        <div className=' flex items-center pl-20 pr-60 justify-between mt-10 flex-wrap-reverse'>
            <form className='flex flex-col gap-2 w-80'>
                <label htmlFor='aadhar' > Aadhar Card Number : </label>
                <input type='text' id='aadhar' placeholder='Enter your Aadhar Number' className='outline-none w-80 border px-3 py-1 rounded-md bg-slate-900 text-white placeholder:text-white' />
                <label htmlFor='otp'> One Time Password (OTP) </label>
                <input type='text' id='otp' placeholder='Enter the OTP' className='outline-none w-80 border px-3 py-1 rounded-md bg-slate-900 text-white placeholder:text-white' />
                <label htmlFor='user-id'> User ID </label>
                <input type='text' id='user-id' placeholder='Enter the User ID' className='outline-none w-80 border px-3 py-1 rounded-md bg-slate-900 text-white placeholder:text-white' />
                <label htmlFor='password'> Password: </label>
                <input id='password' type='password' placeholder='Enter your password' className='outline-none w-80 border px-3 py-1 rounded-md bg-slate-900 text-white placeholder:text-white' />
                <div className='text-center flex justify-center pt-5'>
                    <button className='uppercase bg-gray-200 w-fit px-3 text-center py-2 text-black rounded-md text-xl font-bold'>Log in</button>
                </div>
                <div className='flex flex-col gap-3 pb-5 justify-center items-center'>
                    <p> ------- OR --------- </p>
                    <NavLink to={'/register'} className='uppercase bg-gray-200 w-fit px-3 text-center py-3 text-black rounded-md text-xl font-bold' > Sign Up</NavLink>
                </div>
            </form>
            <div className='flex flex-col justify-center items-center -mt-10'>
                <img src={logo} width={150} /> 
                <p className='text-2xl font-bold'>Votix.</p>
                <p>Decentralized Voting</p>
            </div>
        </div>
    </div>
  )
}

export default Login;