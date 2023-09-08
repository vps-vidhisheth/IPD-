import React from 'react';
import Footer from "./Footer";
import womanImage from './../assets/Ellipse 13.png';
import ellipseImage from './../assets/Ellipse 11.png';
import women_icon from './../assets/home_women_icon_prev_ui.png';

import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const loginHandler = ()=>{
    navigate('/login');
  }
  return (
    <div className='color'>
        <div className='flex mb-[400px] pt-[80px] px-2 justify-around flex-wrap'>
          <div className='w-[634px] flex flex-col justify-center'>
            <p className='text-white text-[55.69px] font-normal'>
              'Empower communities. Create change.'
            </p>
            <p className='text-[#CBCBCB] pb-8'>Voting can create big changes. Vote for spreading positivity in the community.</p>
          </div>
          <div className='relative '>
            <img src={ellipseImage} className='bottom-[-90px] bg-transparent left-[0px] top-[315px] relative' />
            <img src={womanImage} className=' rounded-[50%] top-0 shrink-0 borderAdd absolute'/> 
          </div>
        </div>

        <div className='text-white tracking-[4.16px] lg:text-[49px] flex flex-col justify-center items-center'>
          <p>Your passion for creating changes,</p>
          <p>to make a difference begins with a logging in.</p>
        </div>

        <div className='relative mb-20 flex justify-center pt-14'>
          <div className='relative'>
          <button onClick={loginHandler} className='bg-white absolute px-10 top-[-15px] right-[6px] py-2 text-[27.5px] font-semibold'>Login</button>
          <p className='w-[153px] h-[47.4px] border-white border-2'></p>
          </div>
        </div>

        <div className='flex justify-center'>
          <img src={women_icon} />
        </div>

        <div className='relative flex justify-center cursor-pointer'>
          <div className='relative'>
            
            <div className='absolute top-[25px] left-[30px]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
                <circle cx="37.3883" cy="37.6647" r="36.7882" fill="white"/>
              </svg>
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="129" height="130" viewBox="0 0 129 130" fill="none">
              <circle cx="64.5" cy="65" r="64.1959" stroke="url(#paint0_linear_3_656)" stroke-width="0.608247"/>
              <defs>
                <linearGradient id="paint0_linear_3_656" x1="61.2203" y1="-2.59323" x2="63.8351" y2="129.5" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"/>
                  <stop offset="0.627158" stop-color="white" stop-opacity="0"/>
                </linearGradient>
              </defs>
            </svg>
            
            <div className='absolute top-10 left-14'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="42" viewBox="0 0 22 42" fill="none">
                <path d="M10.0978 40.6138C10.6415 41.1575 11.523 41.1575 12.0667 40.6138L20.927 31.7535C21.4707 31.2098 21.4707 30.3283 20.927 29.7846C20.3833 29.2409 19.5018 29.2409 18.9581 29.7846L11.0823 37.6604L3.20647 29.7846C2.66276 29.2409 1.78123 29.2409 1.23752 29.7846C0.69381 30.3283 0.69381 31.2098 1.23752 31.7535L10.0978 40.6138ZM9.69002 0.758789L9.69002 39.6293L12.4745 39.6293L12.4745 0.758789L9.69002 0.758789Z" fill="black"/>
              </svg>
            </div>

            <div className='text-white my-3'>
              <p className='rotate-[-57.806deg] absolute top-[28px] left-[16px]'>S</p>
              <p className='rotate-[-43.027deg] absolute top-[20px] left-[24px]'>c</p>
              <p className='rotate-[-28.917deg] absolute top-[14px] left-[32px]'>r</p>
              <p className='rotate-[-12.426deg] absolute top-[10px] left-[40px]'>o</p>
              <p className='rotate-[-18deg] absolute top-[6px] left-[50.2px]'>l</p>
              <p className='rotate-[-12deg] absolute top-[4px] left-[56px]'>l</p>
              <p className='rotate-[12deg] absolute top-[4px] right-[45px]'>D</p>
              <p className='absolute top-[8px] right-[36px]'>o</p>
              <p className='rotate-[40deg] absolute top-[15px] right-[24px]'>w</p>
              <p className='rotate-[60deg] absolute top-[25px] right-[17px]'>n</p>
            </div>
          </div>
        </div>

        <div className='text-white'>

          <div>
            <h1 className='text-[40px] text-center'>How to Vote ?</h1>
            <div className='px-8 flex gap-2 text-[32px] opacity-80 mt-3'>
              <p>&rarr;</p>
              <p>You can vote only if your name appears in the Voter List (also known as Electoral Roll). 
                Voters can also find information on Polling Booths, Contesting candidates, Election Dates & Timings, 
                Identity cards and EVM.</p>
            </div>
            <p className='text-[32px] text-center mb-12 opacity-80'>-x-</p>
          </div>

          <div>
            <h1 className='text-[40px] text-center'>Name in Voter List / Electoral Roll</h1>
            <div className='px-8 flex gap-2 text-[32px] opacity-80 mt-3'>
              <p>&rarr;</p>
              <p>You can only vote if your name appears in the Voter List (also known as electoral roll). 
                Verify your name on the list by either: Logging on to electoralsearch.in Calling the Voter 
                Helpline 1950 (please add your STD code before dialling )</p>
            </div>
            <p className='text-[32px] opacity-80 px-4 flex gap-2'>
              <span>• </span>
              <p>SMS space to 1950 (EPIC stands for Electors Photo Identity Card also commonly known as Voter ID card). 
              Example - If your EPIC is 12345678 then sms ECI 12345678 to 1950</p>
            </p>
            <p className='text-[32px] opacity-80 px-4 flex justify-center gap-2'>
              <span>• </span>
              <p>Download Voter Helpline App</p>
            </p>
            <p className='text-center text-[32px] mb-12 opacity-80'>-x-</p>
          </div>

          <div>
            <h1 className='text-[40px] text-center'>Candidate Names</h1>
            <div className='px-8 flex gap-2 text-[32px] opacity-80 mt-3'>
              <p>&rarr;</p>
              <p>Voters can visit Candidate Affidavit Portal (click here) or download the Voter Helpline App 
                (click here) to see the list of candidates. Please note this data is updated as 
                affidavits are filed by candidates. 
              </p>
            </div>
            <p className='text-center text-[32px] mb-12 opacity-80'>-x-</p>
          </div>

          <div>
            <h1 className='text-[40px] text-center'>Voting Process at Polling Booth</h1>
            <div className='px-8 flex gap-2 text-[32px] opacity-80 mt-3'>
              <p>&rarr;</p>
              <p> First polling official will check your name on the voter list and check your ID proof.
              </p>
            </div>
            <p className='text-[32px] opacity-80 px-4 flex gap-2'>
              <span>• </span>
              <p> Second polling official will ink your finger, give you a slip and take your signature on a register (Form 17A)</p>
            </p>
            <p className='text-[32px] opacity-80 px-4 flex gap-2'>
              <span>• </span>
              <p> You will have to deposit the slip at the third polling official and show your inked finger 
                and then proceed to the polling booth</p>
            </p>
            <p className='text-[32px] opacity-80 px-4 flex gap-2'>
              <span>• </span>
              <p> Record your vote by pressing the ballot button opposite the symbol of the candidate of your 
                choice on the Electronic Voting Machine (EVM). You will hear a beep sound Check the slip that 
                appears in the transparent window of the VVPAT machine. The slip with the Candidate serial No.
                Name and Symbol shall be visible for 7 seconds before it drops in the sealed VVPAT box.
              </p>
            </p>
            <p className='text-[32px] opacity-80 px-4 flex gap-2'>
              <span>• </span>
              <p> You can press NOTA, None of the Above, if you don't like any candidate; it's the last button on the EVM.
              </p>
            </p>
            <p className='text-[32px] opacity-80 px-4 flex gap-2'>
              <span>• </span>
              <p> For more information, please see the Voter Guide on <a href='http://ecisveep.nic.in/' target='_blank'>http://ecisveep.nic.in/</a> 
                Mobile phones, cameras or any other gadget is not allowed inside a polling booth.
              </p>
            </p>
            <p className='text-center text-[32px] mb-12 opacity-80'>-x-</p>
          </div>

          <div>
            <h1 className='text-[40px] text-center'>How to use EVM (VVPAT) ?</h1>
            <div className='px-8 flex gap-2 text-[32px] opacity-80 mt-3'>
              <p>&rarr;</p>
              <p>EVM stands for Electronic Voting Machine and VVPAT stands for Voter Verifiable Paper Audit Trail 
                (VVPAT). Click to see video for how to vote using EVM VVPAT
              </p>
            </div>

            <p className='text-[32px] opacity-80 px-4 flex gap-2'>
              <span>• </span>
              <p> EVM-VVPAT: see this video for more details Identity Card Voters can carry any of the below mentioned 
                  recognized ID cards for polling, Photo Voter Slip shall not be accepted as a stand-alone identification 
                  document for voting.
              </p>
            </p>

            <p className='text-[32px] opacity-80 px-4 flex gap-2'>
              <span>• </span>
              <p> EPIC (Voter ID card)
              </p>
            </p>

            <p className='text-[32px] opacity-80 px-4 flex gap-2'>
              <span>• </span>
              <p> Passport
              </p>
            </p>

            <p className='text-[32px] opacity-80 px-4 flex gap-2'>
              <span>• </span>
              <p> Driving License
              </p>
            </p>

            <p className='text-[32px] opacity-80 px-4 flex gap-2'>
              <span>• </span>
              <p> Service Identity Cards with photograph issued to employees by Central/State Govt./PSUs/Public Limited Companies
              </p>
            </p>
            
            <p className='text-[32px] opacity-80 px-4 flex gap-2'>
              <span>• </span>
              <p> Passbooks with photograph issued by Bank/Post Office.
              </p>
            </p>
            
            <p className='text-[32px] opacity-80 px-4 flex gap-2'>
              <span>• </span>
              <p> Pan Card
              </p>
            </p>

            <p className='text-[32px] opacity-80 px-4 flex gap-2'>
              <span>• </span>
              <p> Aadhaar Card
              </p>
            </p>

            <p className='text-center text-[32px] mb-12 lg:mb-[100px] opacity-80'>-x-x-</p>
          </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Home;