import React from 'react'

const UserHome = () => {
  return (
    <div className='text-white flex justify-center min-h-[80vh] items-center my-auto'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-6xl font-bold'> Welcome to Votix ! </p>
            <p className='text-5xl'> Jatin. </p>
            <p className='pt-5 text-xl'> Login to Metamask to vote with Votix </p>
            <button className='text-black bg-slate-200 font-bold px-5 py-1 rounded-2xl'> Login </button>
        </div>
    </div>
  )
}

export default UserHome;