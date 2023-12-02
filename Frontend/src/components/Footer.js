import React from 'react';
import electionImage from './../assets/image 3.png';
import socialMedia from './../assets/image-removebg-preview (23) 1.png'
const Footer = ({dark}) => {
  return (
    <div className={`${dark ? 'text-white bg-[#343434]' : 'text-black bg-white'}`}>
        <div className='mx-7 py-8 pb-[60px] flex h-[100%] my-auto '>
            <img src={electionImage} className='w-[42px] h-[42px] mx-2  inline'/>
            <div className='font-normal text-[12px] tracking-[1.005px] '>
                <p>Election Portal</p>
                <p className='font-medium'>Election Commission of india</p>
            </div>
        </div>

        <div className='flex flex-wrap text-[21.5px] pb-[100px] tracking-[1.825px]'>
            <div>
                <ul className='list-disc font-thin pl-[100px] md:pl-[330px]'>
                    <li className='font-medium'>
                        About us
                    </li>
                    <li>
                        Solutions
                    </li>
                    <li>
                        Join Hand With Us
                    </li>
                </ul>
            </div>
            
            <div className='hidden sm:flex'>
                <ul className='list-disc font-thin pl-[150px]'>
                    <li className='font-medium'>
                        About us
                    </li>
                    <li>
                        Solutions
                    </li>
                    <li>
                        Join Hand With Us
                    </li>
                </ul>
            </div>

            <div className='hidden md:flex'>
                <ul className='list-disc font-thin pl-[150px]'>
                    <li className='font-medium'>
                        About us
                    </li>
                    <li>
                        Solutions
                    </li>
                    <li>
                        Join Hand With Us
                    </li>
                </ul>
            </div>
        </div>
        
        <div className='px-10'>
            <img className='px-11 pb-5' src={socialMedia}/>
            <div className='border-bottom-[#6D6D6D] border-[1px]'></div>
        </div>

        <div className='mx-7 py-8 flex flex-wrap justify-between my-auto'>
            <div className='flex h-[100%] my-auto '>
                <img src={electionImage} className='w-[42px] h-[42px] mx-2  inline'/>
                <div className='font-normal text-[12px] tracking-[1.005px] '>
                    <p>Election Portal</p>
                    <p className='font-medium'>Election Commission of india</p>
                </div>
            </div>
            <div className='text-[16px] pt-2 font-light tracking-[1.36px]'>
                Made with ❤
            </div>
            <div className='text-[16px] pt-2 font-extralight tracking-[1.36px]'>Election Commission of India 2023</div>
        </div>

        
    </div>
  )
}

export default Footer;