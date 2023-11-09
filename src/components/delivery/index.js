import React from 'react'
import './delivery.css'
import Filters from '../common/filters'

const deliveryFilters=[
    {
      id:1,
      icon:<i className="fi fi-rr-settings-sliders"></i>,
      title:"Filters",
    },
    {
      id:2,
      title:"Rating: 4.0+",
    },
    {
      id:3,
      title:"Safe and Hygienic",
    },
    {
      id:4,
      title:"Pure Veg"
    },
    {
      id:5,
      title:"Delivery Time",
      icon:<i className='fi fi-rr-apps-sort absolute-center'></i>,
    },
    {
      id:6,
      title:"Great Offers"
    }
]


const Delivery = () => {
  return (
    <div>
       <div className='max-width'>
          <Filters filterList={deliveryFilters}/>
       </div>
    </div>
  )
}

export default Delivery