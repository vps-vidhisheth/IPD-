import React from 'react';
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';

const Signup = ({dark}) => {
  const navigate = useNavigate();

  const changeToLogin = ()=>{
    navigate('/login');
  }

  return (
    <div>
        <div className={`${dark ? ' bg-[rgb(37,34,35)] text-white' :'bg-[#DEE4E7] text-black'}  flex flex-col justify-center pb-28 items-center `}>
          <div className='pb-[50px]'>
            <h1 className='text-[80px]'>Sign-up</h1>
            <p className={`${dark ? 'sign-up' : 'sign-up-light'}  h-[6px]`}></p>
          </div>
          <div>
            <label htmlFor='name' className='block pb-2 text-[19px]'>Full Name : </label>
            <input id='name' type='text' placeholder='Enter full name' className={`${dark ? 'bg-white text-black' : 'bg-black text-white'}`}/>
            <label htmlFor='mobile' className='block pb-2 pt-4 text-[19px]'>Mobile Number : </label>
            <input id='mobile' type='text' placeholder='Enter mobile number' className={`${dark ? 'bg-white text-black' : 'bg-black text-white'}`}/>
            <label htmlFor='email' className='block pb-2 pt-4 text-[19px]' >Email :</label>
            <input id='email' type='email' placeholder='Enter email id' className={`${dark ? 'bg-white text-black' : 'bg-black text-white'}`}/>
            <label htmlFor='gender' className='block pb-2 pt-4 text-[19px]'>Gender : </label>
            <select id='gender' className={`${dark ? 'bg-[#DEE4E7] text-black' : 'bg-black text-white opacity-80'}  outline-none  text-[24px] px-[8px] py-[8px] opacity-80 min-w-[300px]`}>
              <option value='Choose your gender'>Choose your gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Do not want to disclose'>Do not want to disclose</option>
            </select>
            <label htmlFor='address' className='block pb-2 pt-4 text-[19px]'>Address : </label>
            <textarea cols='40' rows='5' className={`${dark ? 'bg-white text-black' :'bg-black text-white' } opacity-80 px-2 py-2 outline-none text-xl text-black`} placeholder='Write your address'></textarea>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <label htmlFor='voterId' className='block pb-2 pt-4 text-[30px]'>Voter-ID Card : </label>
            <input type='file' className='w-[250px]'/>
            <label htmlFor='voterId' className='block pb-2 pt-4 text-[30px]'>Aadhar Card : </label>
            <input type='file' className='w-[250px]'/>
            <label htmlFor='voterId' className='block pb-2 pt-4 text-[30px]'>Pan Card : </label>
            <input type='file' className='w-[250px]'/>
          </div>

          <div className='flex mt-3 justify-center'>
            <button className='bg-[#6BF2A1] rounded font-normal text-[17px] py-2 mt-5 text-center px-4 text-black'>SIGN UP</button>
          </div>
          <div className='mt-5 flex items-center gap-3'>
            <p className='w-[45px] h-[2px] bg-white'></p>
            <p className='text-[25px]'> OR </p>
            <p className='w-[45px] h-[2px] bg-white'></p>
          </div>
          <div className='flex justify-center'>
            <button onClick={changeToLogin} className='bg-[#6BF2A1] rounded font-normal text-[17px] py-2 mt-5 text-center px-4 text-black'>LOGIN</button>
          </div>
          <div className='w-[240px] py-4 text-[9px] font-normal'>
            <p>&#42; People who are using our service may need to uploaded the contact information to Election Commission Of India.</p>
            <p>Learn more</p>
            <p>&#42; By signing up, you are agree to our Terms, Privacy Policy</p>
          </div>
        </div>

        <Footer dark={dark}/>
    </div>
  )
}

export default Signup;