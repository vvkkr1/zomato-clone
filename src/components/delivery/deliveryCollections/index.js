import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import DeliveryItem from './deliveryItem';

const deliveryItems=[
  {
    id:1,
    title:"pizza",
    cover:
"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"  },
  {
    id:2,
    title:"Burger",
    cover:
    "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"  },
  {
    id:3,
    title:"Rolls",
    cover:
    "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
  },
  {
    id:4,
    title:"Cake",
    cover:
    "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"  },
  {
    id:5,
    title:"Biryani",
    cover:
"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"  },
  {
    id:6,
    title:"Chaat",
    cover:
"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"  },
  {
    id:7,
    title:"Momos",
    cover:
"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"  },
  {
    id:8,
    title:"Paneer",
    cover:
"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"  }
]

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>
};

const DeliveryCollections = () => {
  return (
    <div className='delivery-collections'>
        <div className='max-width'>
            <div className='collection-title'>Eat what you makes you happy</div>
            <Slider {...settings}>
                {deliveryItems.map((item)=>{
                  return<DeliveryItem DItem = {item} key={item.id}/>
                })}
            </Slider>
        </div> 
    </div>
  )
}

export default DeliveryCollections