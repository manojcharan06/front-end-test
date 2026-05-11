import React from 'react'
import HeroSection from '../home/HeroSection'
import TrendingSection from '../home/TrendingSection'

const Container = () => {
  return (
    <div className='px-20 text-white'>
        <HeroSection />
        <TrendingSection />
    </div>
  )
}

export default Container