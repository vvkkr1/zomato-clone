import React,{useState} from 'react'
import Header from '../../components/common/header'
import TabOptions from '../../components/common/tabOptions'
import Delivery from '../../components/delivery'
import DiningOut from '../../components/diningOut/diningOut'
import NightLife from '../../components/nightLife/nightLife'

const HomePage = () => {
  const [activeTab, setActiveTab]=useState('Delivery')
  return (
    <div>
       <Header/>
       <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
       {/* Diff screens */}
       {getSelectedScreen(activeTab)}
    </div>
  )
}

function getSelectedScreen(tab){
  switch(tab){
    case "Delivery":
      return <Delivery/>
    case "DiningOut":
      return <DiningOut/>
    case "NightOut":
      return <NightLife/>
    default:
      return <Delivery />

  }

}


export default HomePage