import React from 'react'
import './filters.css';
import FilterItems from './filterItem';

const Filters = ({filterList}) => {
  return (
    <div className='filter cur-po'>
        {filterList && filterList.map((item)=>{
            return <FilterItems item={item} key={item.id}/>
        })}
    </div>
  )
}

export default Filters