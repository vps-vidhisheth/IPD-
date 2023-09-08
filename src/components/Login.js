import React, { useState } from 'react';
import Footer from "./Footer";
import loginIcon from './../assets/login_icon_prev_ui.png';
import loginWoman from './../assets/login_women_prev_ui.png';
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [eyeChecker,setEyeChecker] = useState(false);
  const [password,setPassword] = useState('');
  const inputType = 'password';
  const changeEye = ()=>{
    console.log(eyeChecker);
    setEyeChecker(!eyeChecker);
  }

  const storePassword = (e)=>{
    e.preventDefault();
    setPassword(e.value);
  }

  const changeToSignUp = ()=>{
    navigate('/sign-up')
  }

  return (
    <div>
        <div className='flex flex-wrap-reverse py-8 justify-around bg-[rgb(37,34,35)] w-[100%]'>
          <div className='text-white '>
            <div className='relative py-4'>
              <p className=' text-white text-[80px] tracking-[-1.984px] font-medium'>LOG IN</p>
              <p className='text-center pb-10 text-[16px] font-medium absolute bottom-[-24px] left-7'> & Start your Voting journey</p>
            </div>
            <label htmlFor='name' className='block pb-2 text-[19px]'>Mobile Number or Email</label>
            <input id='name' type='text' placeholder='Enter email or mobile number' className='input'/>
            <label htmlFor='otp' className='block pt-4 pb-2 text-[19px]' >One Time Password(OTP)</label>
            <input type='text' placeholder='Enter OTP' />
            <label htmlFor='userId' className='block pt-4 pb-2 text-[19px]'>User ID</label>
            <input type='text' placeholder='Enter User ID'/>
            <label htmlFor='password' className='block pt-4 pb-2 text-[19px]'>Password</label>
            {
              eyeChecker ? <div className='relative'>
                <input type="text"  placeholder='Enter password' id='password' onChange={storePassword}/>
                <AiFillEye className='text-[30px] absolute top-3 cursor-pointer text-black right-3' onClick={changeEye}/>
              </div> : <div className='relative'>
                <input type="password" placeholder='Enter password' id='password' onChange={storePassword}/>
                <AiFillEyeInvisible className='text-[30px] absolute top-3 cursor-pointer text-black right-3' onClick={changeEye} />
              </div>
            }
            <div className='flex justify-center'>
              <button className='bg-[#6BF2A1] rounded font-normal text-[17px] py-2 mt-5 text-center px-4 text-black'>LOG IN</button>
            </div>
            <div className='mt-5 flex items-center gap-3'>
              <p className='w-[45%] h-[2px] bg-white'></p>
              <p className='text-[25px]'> OR </p>
              <p className='w-[45%] h-[2px] bg-white'></p>
            </div>
            <div className='flex justify-center'>
              <button onClick={changeToSignUp} className='bg-[#6BF2A1] rounded font-normal text-[17px] py-2 mt-5 text-center px-4 text-black'>SIGN UP</button>
            </div>
          </div>

          <div>
            <img src={loginIcon} />
            <img src={loginWoman}  />
          </div>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Login;