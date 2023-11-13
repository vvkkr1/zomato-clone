import React from 'react'
import './filterItem.css'

const FilterItems = ({item}) => {
  return (
    <div className='filterItem-wrapper'>
           {item.icon && item.icon}
            <div className='filter-title'>{item.title}</div>            
    </div>
  )
}

export default FilterItems