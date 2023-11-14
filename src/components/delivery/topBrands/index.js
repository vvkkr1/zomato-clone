import React from 'react'
import './topBrand.css'
// import Slider from 'react-slick/lib/slider'
import Slider from 'react-slick'
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import ItemList from './ItemList';

const itemList=[
    {
        id:1,
        icon:"https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp",
        title:"Meghana Foods",
        time:"30 min"
    },
    {
        id:2,
        icon:"https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp",
        title:"Empire Restaurant",
        time:"33 min"
    },
    {
        id:3,
        icon:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png",
        title:"Burger King",
        time:"34 min"
    },
    {
        id:4,
        icon:"https://b.zmtcdn.com/data/brand_creatives/logos/239f872f52291fe253a37cc8dd16188f_1663838300.png?output-format=webp",
        title:"Truffles",
        time:"25 min"
    },
    {
        id:5,
        icon:"https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png",
        title:"McDonald's",
        time:"43 min"
    },
    {
        id:6,
        icon:"https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png",
        title:"KFC",
        time:"35 min"
    },
    
    {
        id:7,
        icon:"https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png?output-format=webp",
        title:"FreshMenu",
        time:"36 min"
    },
    {
        id:8,
        icon:"https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png?output-format=webp",
        title:"A2B - Adyar Ananda Bhavan",
        time:"30 min"
    },
    {
        id:9,
        icon:"https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210633.png?output-format=webp",
        title:"Pizza Hut",
        time:"37 min"
    },
    {
        id:10,
        icon:"https://b.zmtcdn.com/data/brand_creatives/logos/7e91871a40c877332641a411e7dea18b_1668319552.png?output-format=webp",
        title:"Leon's Burgers & Wings",
        time:"37 min"
    },
    



]

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };
  

const TopBrand = () => {
  return (
    <div className='topBrands'>
        <div className='max-width topBrands-container'>
            <div className='title'>Top brands for you</div>
            <Slider {...settings}>
                {itemList && itemList.map((List)=>{
                    return <ItemList List={List}/>
                })}
            </Slider>
        </div>
    </div>
  )
}

export default TopBrand