import React, { useState } from 'react';
import Footer from "./Footer";
import loginIcon from './../assets/login_icon_prev_ui.png';
import loginWoman from './../assets/login_women_prev_ui.png';
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Login = ({dark}) => {
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
  // 
  return (
    <div>
        <div className={`${dark ? 'bg-[rgb(37,34,35)] text-white' : 'bg-[#DEE4E7] text-black'} flex flex-wrap-reverse py-8 justify-around  w-[100%]`}>
          <div className=''>
            <div className='relative py-4'>
              <p className='  text-[80px] tracking-[-1.984px] font-medium'>LOG IN</p>
              <p className='text-center pb-10 text-[16px] font-medium absolute bottom-[-24px] left-7'> & Start your Voting journey</p>
            </div>
            <label htmlFor='name' className={`block pb-2 text-[19px]`}>Mobile Number or Email</label>
            <input id='name' type='text' placeholder='Enter email or mobile number' className={`${dark ? 'bg-white text-black' : 'bg-black text-white'}`}/>
            <label htmlFor='otp' className='block pt-4 pb-2 text-[19px]' >One Time Password(OTP)</label>
            <input type='text' placeholder='Enter OTP' className={`${dark ? 'bg-white text-black' : 'bg-black text-white'} inputTag`}/>
            <label htmlFor='userId' className='block pt-4 pb-2 text-[19px]'>User ID</label>
            <input type='text' placeholder='Enter User ID' className={`${dark ? 'bg-white text-black' : 'bg-black text-white'} inputTag`}/>
            <label htmlFor='password' className='block pt-4 pb-2 text-[19px]'>Password</label>
            {
              eyeChecker ? <div className='relative'>
                <input type="text" className={`${dark ? 'bg-white text-black' : 'bg-black text-white'} inputTag`}  placeholder='Enter password' id='password' onChange={storePassword}/>
                <AiFillEye className={`text-[30px] absolute top-3 cursor-pointer ${dark ? 'text-black' : 'text-white'} right-3`} onClick={changeEye}/>
              </div> : <div className='relative'>
                <input type="password" className={`${dark ? 'bg-white text-black' : 'bg-black text-white'} inputTag`} placeholder='Enter password' id='password' onChange={storePassword}/>
                <AiFillEyeInvisible className={`text-[30px] absolute top-3 cursor-pointer ${dark ? 'text-black' : 'text-white'} right-3`} onClick={changeEye} />
              </div>
            }
            <div className='flex justify-center'>
              <button className='bg-[#6BF2A1] rounded font-normal text-[17px] py-2 mt-5 text-center px-4 text-black'>LOG IN</button>
            </div>
            <div className='mt-5 flex items-center gap-3'>
              <p className={`${dark ? 'bg-white' :'bg-black'} w-[45%] h-[2px]`}></p>
              <p className='text-[25px]'> OR </p>
              <p className={`${dark ? 'bg-white' :'bg-black'} w-[45%] h-[2px]`}></p>
            </div>
            <div className='flex justify-center'>
              <button onClick={changeToSignUp} className='bg-[#6BF2A1] rounded font-normal text-[17px] py-2 mt-5 text-center px-4 text-black'>SIGN UP</button>
            </div>
            <div className='w-[240px] py-4 text-[9px] font-normal'>
            <p>&#42; People who are using our service may need to uploaded the contact information to Election Commission Of India.</p>
            <p>Learn more</p>
            <p>&#42; By signing up, you are agree to our Terms, Privacy Policy</p>
          </div>  
          </div>

          <div>
            <img src={loginIcon} />
            <img src={loginWoman}  />
          </div>
        </div>
        
        <Footer dark={dark}/>
    </div>
  )
}

export default Login;