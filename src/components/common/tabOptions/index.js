import React from 'react'
import './tabOptions.css';

//array of an objectfor tabs
const tab = [
    {
      id: 1,
      name: "Delivery",
      active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      backdrop:"FCEEC0",
      inactive_img:"https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
    },
    {
      id: 2,
      name: "Dining Out",
      active_img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      backdrop:"E5F3F3",
      inactive_img:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
    },
    {
      id: 3,
      name: "NightLife",
      active_img: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      backdrop:"EDF4FF",
      inactive_img:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
    }
]


const TabOptions = ({activeTab,setActiveTab}) => {
  return (
    <div className='tab-options'>
        <div className='max-width options-wrapper'>
          {tab.map((item)=>{
            return(
              <div 
                onClick={()=>setActiveTab(item.name)} 
                className={`tab-item absolute center cur-po ${
                  activeTab===item.name && "active-tab"
                }`}
              >
                    <div className='tab-image-container absolute-center'
                          style={{
                            backgroundColor:`${
                            activeTab===item.name ? item.backdrop  : ""
                          }`}}
                          >
                        <img 
                          className= 'tab-image' 
                          alt = {item.name} 
                          src = {
                                 activeTab===item.name ? item.active_img : item.inactive_img} 
                          />
                            
                    </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default TabOptions