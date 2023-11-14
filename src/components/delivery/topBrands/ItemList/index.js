import React from 'react'
import './itemList.css';




const ItemList = ({List}) => {
  return (
    <div className='list-container'>
        
        <div className='list-image-container'>
          <div className='list-image-wrapper'></div>
            <img src={List.icon} 
               className='list-image'
               alt={List.title} 
               />
          </div>
       
        

        <div className='list-title'>{List.title}</div>
        <div className='list-time'>{List.time}</div>
        
    </div>
  )
}

export default ItemList