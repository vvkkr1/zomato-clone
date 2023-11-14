import React from 'react'
import './itemCard.css'



const ExploreCard = ({restaurant}) => {

  const name = restaurant?.info?.name ?? "";
  const icon = restaurant?.info?.image?.url ?? "";


  console.log("valuee------",restaurant)
  return (
    <div className='explore-card'>
      <div className='card-image-container'>
          <img src={icon}
              className='card-image'
              alt={name}
              />
          {/* <div className='card-promo-offer'></div> */}
      </div>
        This is item card
    </div>
  )
}

export default ExploreCard