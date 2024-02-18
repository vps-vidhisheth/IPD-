import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import data from '../assets/Group 40.png'
import { NavLink } from 'react-router-dom';
import UserHome from '../components/UserHome';
// import Check from '../components/Check';

const Home = () => {
  const [user,setUser] = useState(true);
  return (
    <div className='text-white'>
        <Navbar user={user} />
        <div>
          {
            !user ? 
            <div>
              <div className=' flex gap-[71px] mt-24 px-5'>
          <p className='text-4xl ml-[90px] tracking-widest'> "Secure Your Vote: Join Votix for a Future of Trusted Democracy!" </p>
          <img src={data} className='w-[280px]' />
        </div>
        <div className='mx-5'>
          <h1 className='text-5xl font-medium mb-16'> Know your Voting System </h1>
          <div>
            <p className='text-2xl'> Votix: Revolutionizing Voting with Cutting-Edge Technology </p>
            <div className='py-3'> 
              <p className='text-xl font-normal'> 1. Decentralized System: </p>
              <p className='ml-3 text-lg font-light'> Votix utilizes blockchain for a tamper-resistant and secure voting system, eliminating central points of failure. </p>
            </div>
            <div className='py-3'> 
              <p className='text-xl font-normal'> 2. Facial Recognition: </p>
              <p className='ml-3 text-lg font-light'> Secure voter authentication through advanced facial recognition technology ensures only authorized individuals can cast their votes. </p>
            </div>
            <div className='py-3'> 
              <p className='text-xl font-normal'> 3. Aadhar Card Validation: </p>
              <p className='ml-3 text-lg font-light'> Two Step authentication, including Aadhar card validation, enhances identity verification and safeguards against fraud. </p>
            </div>
            <div className='py-3' >
              <p className='text-xl font-normal'> 4. End-to-End Encryption: </p>
              <p className='ml-3 text-lg font-light' > Robust encryption guarantees the privacy of voter information, ensuring confidential and secure transmission of votes. </p>
            </div>
            <div>
              <p className='text-xl font-normal'> 5. User-Friendly Interface: </p>
              <p className='ml-3 text-lg font-light'> Votix offers an intuitive interface for voters, prioritizing accessibility and inclusivity,making the voting experience seamless for all. </p>
            </div>
          </div>
        </div>
        <div className='mx-5 mt-10'>
          <p className='text-2xl font-bold'> Feature of Votix : </p>
          <ol className='ml-5 font-medium'>
            <li> 1. Decentralized </li>
            <li> 2. Facial Recognition </li>
            <li> 3. User-Friendly Interface </li>
          </ol>
        </div>
        <div className='flex mx-5 justify-between mt-5 pb-5'>
          <NavLink to={'/contact'} className='border px-5 rounded-2xl  bg-slate-700'> Contact Us. </NavLink>
          <NavLink to={'/login'} className=' border px-5 rounded-2xl  bg-slate-700'> Next </NavLink>
        </div>
            </div> :
            <UserHome />
          }
        </div>
    </div>
  )
}

export default Home;