import React from 'react'
import './tabOptions.css'
import BreadCrumb from './breadCrumb'

const tabs = [
  {
    id:1,
    title:"Delivery",
    active_Img:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
    backdrop:"rgb(252, 238, 192)",
    inactive_Img:"https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
  },
  {
    id:2,
    title:"Dining Out",
    active_Img:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    backdrop:"E5F3F3",
    inactive_Img:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
  },
  {
    id:3,
    title:"Night Out",
    active_Img:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    backdrop:"EDF4FF",
    inactive_Img:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
  }
]

const TabOptions = ({activeTab,setActiveTab}) => {
  return (
    <div className='tab-options'>
      <BreadCrumb/>
      <div className='max-width tab-wrapper'>
          {tabs.map((item)=>{
            return(
              <div 
                  onClick={()=>setActiveTab(item.title)} 
                  style={{display:"flex",alignItems:"center"}}
                  className={`tab-image-title-container absolute-center cur-po ${activeTab===item.name && "active-tab"}`}
                  
                  >
                <div className='tab-image-container absolute-center'
                    style={{backgroundColor:`${activeTab===item.name ? item.backdrop : ""}`}}

                 >
                  <img 
                    src={activeTab===item.title ? item.active_Img : item.inactive_Img}
                    className='tab-image'
                    alt={item.title}
                    />
                </div>

                <div className='tab-title absolute-center '>{item.title}</div>
              </div>
            )
          })}
      </div>
    </div>
      
  )
}

export default TabOptions