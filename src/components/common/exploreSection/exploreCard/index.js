import React from 'react'
import './exploreCard.css'



const ExploreCard = ({restaurant}) => {

  const name = restaurant?.info?.name ?? "";
  const icon = restaurant?.info?.image?.url ?? "";
  const rating = restaurant?.info?.rating?.rating_text ?? "";

  // console.log("valuee------",restaurant)
  return (
    <div className='explore-card'>
      <div className='explore-card-cover cur-po'>
          <img src={icon}
              className='explore-card-image'
              alt={name}
              />
      </div>
    {/* <div className='card-promo-offer'></div> */}
      <div className='card-container'>
            <div className='card-title'>{name}</div>
            <div className='card-rating-star-container'>
                <div className='card-rating absolute-center'>{rating}</div>
                <i class="fi fi-rr-star absolute-center rating-star"></i>
            </div> 
      </div>


    </div>
  )
}

export default ExploreCard