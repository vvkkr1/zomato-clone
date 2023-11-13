import React from 'react'
import './deliveryItem.css';

const DeliveryItem = ({item}) => {
  return (
    <div className='delivery-item-container'>
       <div className='delivery-item-image-container'>
            <img src={item.img}
                 className='delivery-item-image'
                 alt={item.title}
                />
       </div>
       <div className='delivery-item-title'>{item.title}</div>
    </div>
  )
}

export default DeliveryItem