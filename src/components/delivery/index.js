import React from 'react'
import './delivery.css';
import Filters from '../common/filters';
import DeliveryCollection from './deliveryCollection';

const deliveryFilter = [
  {
    id:1,
    icon:<i className="fi fi-rr-settings-sliders"></i>,
    title:"Filters"
  },
  {
    id:2,
    title:"Rating: 4.0+"
  },
  {
    id:3,
    title:"Pure Veg"
  },
  {
    id:4,
    title: "Cuisines",
    icon:<i class="fi fi-ts-caret-down"></i>
  }
]



const Delivery = () => {
  return (
    <div className='delivery-container'>
      <div className='max-width filter-wrap'>
         <Filters filterList={deliveryFilter}/>
      </div>
         <DeliveryCollection />
    </div>
  )
}

export default Delivery