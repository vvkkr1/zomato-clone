import React from 'react'
import './diningOut.css'
import Collections from '../common/collections'

const collectionList=[
  {
    id:1,
    title:"14 Dizzling Diwali Places",
    cover:
      "https://b.zmtcdn.com/data/collections/02b358427dba7b0b94fa5d079bf5bbe4_1699510591.png",
    places:"14 Places"
  },
  {
    id:2,
    title:"22 Live Cricket Screenings",
    cover: "https://b.zmtcdn.com/data/collections/45a211c821e9c527d258a05aebfaf62d_1696920963.png",
    places:"27 Places"
  },
  {
    id:3,
    title:"9 Newly Opened Restaurants",
    cover: "https://b.zmtcdn.com/data/collections/8868e7345d624a79d5900711eb5f8d00_1696923143.png",
    places:"8 Places"
  },
  {
    id:4,
    title:"25 Serene Rooftop Places",
    cover: "https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg",
    places:"27 Places"
  },
  {
    id:5,
    title:"10 Trending Restaurants",
    cover:"https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg",
    places:"10 Places"
  },
  {
    id:6,
    title:"11 Must-visit Legendary Places",
    cover:"https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1692120193.jpg",
    places:"11 Places"
  },
  {
    id:7,
    title:"10 Picturesque Cafes",
    cover:"https://b.zmtcdn.com/data/collections/6487ebe8fbb28294be84b70041d24601_1691347530.jpg",
    places:"10 Places"
  },
  {
    id:8,
    title:"15 Romantic Dining Places",
    cover:"https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674825932.jpg",
    places:"16 Places"
  }
  
  
]

const DiningOut = () => {
  return (
    <div>
      <Collections list={collectionList}/>
    </div>
  )
}

export default DiningOut