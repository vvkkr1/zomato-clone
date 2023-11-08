import React from 'react'

const TabOptions = ({activeTab,setActiveTab}) => {
  return (
    <div>
        This is tabOptions
        <button onClick={()=>setActiveTab("Delivery")}>Delivery</button>
        <button onClick={()=>setActiveTab("Dining Out")}>Dining Out</button>
        <button onClick={()=>setActiveTab("Night Life")}>Delivery</button>

    </div>
  )
}

export default TabOptions