import React from 'react'
import './delivery.css';
import Filters from '../common/filters';
import DeliveryCollection from './deliveryCollection';
import TopBrand from './topBrands';
import ExploreSection from '../common/exploreSection';
import { restaurants } from '../../data/restaurants';

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

const restaurantList = restaurants;


const Delivery = () => {
  return (
    <div className='delivery-container'>
      <div className='max-width filter-wrap'>
         <Filters filterList={deliveryFilter}/>
      </div>
         <DeliveryCollection />
         <TopBrand/>
         <ExploreSection list={restaurantList} collectionName="Delivery Restaurants in Bengaluru"/>
    </div>
  )
}

export default Delivery