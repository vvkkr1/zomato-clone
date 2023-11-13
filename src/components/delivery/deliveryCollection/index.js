import React from 'react';
import './deliveryCollection.css';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from "react-slick"
import DeliveryItem from './deliveryItems';

const deliveryItems = [
  {
   id:1,
   img:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
   title:"Biryani" 
  },
  {
    id:2,
    img:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    title:"Pizza" 
   },
   {
    id:3,
    img:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    title:"Burger" 
   },
   {
    id:4,
    img:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    title:"Chicken" 
   },
   {
    id:5,
    img:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    title:"Rolls" 
   },
   {
    id:6,
    img:"https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
    title:"Idli" 
   },
   {
    id:7,
    img:"https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
    title:"Fried Rice" 
   },
   {
    id:8,
    img:"https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
    title:"North Indian" 
   },
   {
    id:9,
    img:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
    title:"Thali" 
   },
   {
    id:10,
    img:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
    title:"Ice Cream" 
   },
   {
    id:11,
    img:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
    title:"Cake" 
   }
]

const settings = {
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>
};

const DeliveryCollection = () => {
  return (
    <div className='delivery-collection-wrapper'>
        <div className='max-width'>
            <div className='title'>Inspiration for your first order</div>
            <Slider {...settings}>
              {deliveryItems && deliveryItems.map((item)=>{
                return <DeliveryItem item = {item}/>
              })}
            </Slider>
        </div>
    </div>
  )
}

export default DeliveryCollection