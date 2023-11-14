import React from 'react'
import './exploreCard.css'



const ExploreCard = ({restaurant}) => {

  const name = restaurant?.info?.name ?? "";
  const icon = restaurant?.info?.image?.url ?? "";


  console.log("valuee------",restaurant)
  return (
    <div className='explore-card'>
      <div className='explore-card-cover cur-po'>
          <img src={icon}
              className='explore-card-image'
              alt={name}
              />
      </div>
    {/* <div className='card-promo-offer'></div> */}

    </div>
  )
}

export default ExploreCard