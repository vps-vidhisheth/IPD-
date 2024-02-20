import React from 'react'
import Navbar from '../components/Navbar';

const VoteCandidate = () => {
    const candidates = [
        {
            id : 1,
            name : "Narendra Modi",
            party : "BJP",
            logo : "Lotus/Kamal",
            vote : "Vote"
        },
        {
            id : 2,
            name : "Arvind Kejriwal",
            party : "AAP",
            logo : "Broom/Jhhadu",
            vote : "Vote"
        },
        {
            id : 3,
            name : "Rahul Gandhi",
            party : "Congress",
            logo : "Hand/Hath",
            vote : "Vote"
        },
        {
            id : 4,
            name : "Raja Bhaiya",
            party : "Jansatta Dal",
            logo : "Don't know",
            vote : "Vote"
        },
        {
            id : 5,
            name : "Lalu Yadav",
            party : "RJD",
            logo : "Don't know",
            vote : "Vote"
        }
    ]
  return (
    <div className='text-white'>
        <Navbar/>
        <div className='px-8 pt-8'>
            <p className='text-4xl font-medium'> Hi! Jatin 👋 .. </p>
            <p className='text-center text-2xl py-5'> You are connected to Metamask </p>
            <div className='text-xl font-medium flex flex-col gap-2'>
                <p> Voter Name : Jatin </p>
                <p> Metamask Account Number : 0xe5d8da5bad429E2E71716Bb0Feb84 </p>
                <p> Voter's Votix id : Jqw5209 </p>
                <p> Voter's Aadhar Id : xxxx xxxx xx09 </p>
            </div>
            <p className='pt-12 text-2xl font-semibold'> Here is Online Voting Booth ( OVB ) </p>
            <div className='pt-10'>
                <div className='flex justify-around'>
                    <p> Index </p>
                    <p> Candidate name </p>
                    <p> Party Name </p>
                    <p> Party Logo </p>
                    <p> Push to Vote </p>
                </div>
                <div className='flex flex-col pb-20'>
                    {
                        candidates.map((c,i)=>{
                            return <div key={i} className='flex justify-around pt-5'>
                                <p> {c.id} </p>
                                <p> {c.name} </p>
                                <p> {c.party} </p>
                                <p> {c.logo} </p>
                                <div>
                                    <input type='radio' name='vote' id='vote' />
                                    <label htmlFor='vote' > Vote </label>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default VoteCandidate;