import React from 'react'
import './deliveryItem.css'

const DeliveryItem = ({DItem}) => {
  return (
    <div className = 'delivery-item-wrapper'>
        
        <div className = 'delivery-item-cover'>
            <img src = {DItem.cover} 
                 className = 'delivery-item-image' 
                 alt = {DItem.title}
                 />
        </div>
        <div className = 'delivery-item-title'>{DItem.title}</div>
        
    </div>
  )
}

export default DeliveryItem