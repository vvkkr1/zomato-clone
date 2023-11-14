import React from 'react'
import './exploreSection.css';
import ExploreCard from './exploreCard';

const ExploreSection = ({list,collectionName}) => {
  return (
    <div className='explore-section'>
        <div className='max-width explore-section-container'>
            <div className='title'>{collectionName}</div>
            {list && list.map((restaurant)=>{
              return <ExploreCard restaurant = {restaurant}/>
            })}
        </div>
    </div>
  )
}

export default ExploreSection