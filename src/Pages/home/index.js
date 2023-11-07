import React, { useState } from 'react'
import Header from '../../components/common/header';
import TabOptions from '../../components/common/tabOptions';
import Footer from '../../components/common/footer';

const HomePage = () => {

    const[activeTab, setActiveTab] = useState("Night Life")

  return (
    <div>
        <Header/>
        <TabOptions/>
        {/*Diff screens*/}
        {getCorrectScreen(activeTab)}
        <Footer/>
    </div>
  )
}
const getCorrectScreen = (tab) => {
    switch(tab){
        case "Delhivery":
            return <div>Delhivery</div>
        case "Dining Out":
            return <div>Dining Out</div>
        case "Night Life":
            return <div>Night Life</div>
        default:
            return <div>Delhivery</div>
    }
  
  }

export default HomePage;