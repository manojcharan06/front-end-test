import React from 'react'
import user1 from "../../assets/users/user1.png"
import RatingStars from './RatingStars'

const HeroSectionCard = () => {
  return (
    <div className='w-md mt-24 bg-white/10 backdrop-blur-md flex flex-col gap-5 rounded-[35px] border border-zinc-400 py-8 px-10'>
        <div className='flex items-center gap-6'>
            <div className='size-12 rounded-full overflow-hidden bg-amber-200'>
                <img src={user1} alt="" />
            </div>
            <div>
                <h1 className='text-xl'>Ronnie Hamill</h1>
                <RatingStars />
            </div>
        </div>
        <p className='text-sm pr-5'>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
    </div>
  )
}

export default HeroSectionCard