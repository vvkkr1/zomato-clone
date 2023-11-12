import React,{useState} from 'react'
import Header from '../../components/common/header'
import TabOptions from '../../components/common/tabOptions'

const HomePage = () => {
  const [activeTab, setActiveTab]=useState('Delivery')
  return (
    <div>
       <Header/>
       {/* <TabOptions/> */}
       {/* Diff screens */}
       {/* {getSelectedScreen(activeTab)} */}
    </div>
  )
}

function getSelectedScreen(tab){
  switch(tab){
    case "delivery":
      return <h1>Hello delivery</h1>
    case "diningOut":
      return <h1>Hello dining Out</h1>
    case "nightOut":
      return <h1>Hello nightOut</h1>
    default:
      return <h1>Delivery</h1>

  }

}


export default HomePage