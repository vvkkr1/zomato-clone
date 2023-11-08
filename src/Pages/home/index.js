import React, { useState } from 'react'
import Header from '../../components/common/header';
import TabOptions from '../../components/common/tabOptions';
import Footer from '../../components/common/footer';
import DiningOut from '../../components/diningOut';
import Delivery from '../../components/delivery';
import NightLife from '../../components/nightLife';

const HomePage = () => {

    //this state to check case in switch
    const[activeTab, setActiveTab] = useState("Delivery")

  return (
    <div>
        <Header/>

        {/*props pass name as activeTab and setActiveTab to TabOption*/}
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
        
        {/*Diff screens*/}

        {/* here we are passing default case value */}
        {/* {getCorrectScreen(activeTab)} */}

        {/* <Footer/> */}
    </div>
  )
}
const getCorrectScreen = (tab) => {

    //inside tab we are getting cases tab
    switch(tab){
        case "Delivery":
            return <Delivery/>
            // return <div>Delhivery</div>
        case "Dining Out":
            return <DiningOut/>
            // return <div>Dining Out</div>
        case "Night Life":
            return <NightLife/>
            // return <div>Night Life</div>
        default:
            return <Delivery/>
            // return <div>Delhivery</div>
    }
  
  }

export default HomePage;