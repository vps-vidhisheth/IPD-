import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/Logo.png';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Login = () => {
    const [aadhar, setAadhar] = useState('');
    const [otp, setOTP] = useState('');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/capture', {
                aadhar,
                otp,
                userId,
                password
            });
            console.log(response.data);
            // Handle successful login response (e.g., redirect user)
        } catch (error) {
            setError('Failed to log in');
            console.log('Error logging in:', error);
        }
    };

    return (
        <div className='text-white'>
            <Navbar />
            <p className='uppercase text-8xl px-7 mt-12 font-bold'> log in </p>
            <p className='px-10 text-xl font-medium'> & Start your Voting Journey </p>
            <div className='flex items-center pl-20 pr-60 justify-between mt-10 flex-wrap-reverse'>
                <form className='flex flex-col gap-2 w-80' onSubmit={handleLogin}>
                    <label htmlFor='aadhar'> Aadhar Card Number : </label>
                    <input type='text' id='aadhar' value={aadhar} onChange={(e) => setAadhar(e.target.value)} placeholder='Enter your Aadhar Number' className='outline-none w-80 border px-3 py-1 rounded-md bg-slate-900 text-white placeholder:text-white' />
                    <label htmlFor='otp'> One Time Password (OTP) </label>
                    <input type='text' id='otp' value={otp} onChange={(e) => setOTP(e.target.value)} placeholder='Enter the OTP' className='outline-none w-80 border px-3 py-1 rounded-md bg-slate-900 text-white placeholder:text-white' />
                    <label htmlFor='user-id'> User ID </label>
                    <input type='text' id='user-id' value={userId} onChange={(e) => setUserId(e.target.value)} placeholder='Enter the User ID' className='outline-none w-80 border px-3 py-1 rounded-md bg-slate-900 text-white placeholder:text-white' />
                    <label htmlFor='password'> Password: </label>
                    <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' className='outline-none w-80 border px-3 py-1 rounded-md bg-slate-900 text-white placeholder:text-white' />
                    <div className='text-center flex justify-center pt-5'>
                        <button type="submit" className='uppercase bg-gray-200 w-fit px-3 text-center py-2 text-black rounded-md text-xl font-bold'>Log in</button>
                    </div>
                    {error && <p>{error}</p>}
                    <div className='flex flex-col gap-3 pb-5 justify-center items-center'>
                        <p> ------- OR --------- </p>
                        <NavLink to={'/register'} className='uppercase bg-gray-200 w-fit px-3 text-center py-3 text-black rounded-md text-xl font-bold'> Sign Up</NavLink>
                    </div>
                </form>
                <div className='flex flex-col justify-center items-center -mt-10'>
                    <img src={logo} width={150} alt="Logo" />
                    <p className='text-2xl font-bold'>Votix.</p>
                    <p>Decentralized Voting</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
