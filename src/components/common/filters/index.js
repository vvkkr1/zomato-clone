import React from 'react'
import './filters.css';
import FilterItem from './filterItem';

const Filters = ({filterList}) => {

  return (
    <div className = "filters">
        {/* This is filters!!! */}
        {
          filterList && filterList.map((item)=>{
            // console.log(item)
            return <FilterItem filter={item} key={item.id}/>
          })
        }
    </div>
  )
}

export default Filters