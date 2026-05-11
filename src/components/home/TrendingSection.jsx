import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import TrendingCards from '../ui/TrendingCards'
import Data from '../../data/TrendingPlantsData'

const TrendingSection = () => {
  return (
    <div className='mt-20 flex flex-col items-center'>
        <SectionTitle title="Our Trendy Plants"/>
        {Data.map((item, index) => (
            <TrendingCards key={index} Data={item} isReverse={index % 2 !== 0}/>
        ))}
    </div>
  )
}

export default TrendingSection