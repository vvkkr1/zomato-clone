import React from 'react'
import './breadCrumb.css'

const BreadCrumb = () => {
  return (
    <div className='max-width breadcrumb-wrapper'>
        <div className = 'breadcrumb-anchor-container-one' style={{fontSize:"16px"}}><a href="index.html" style={{textDecoration:"none", color: "rgb(130, 130, 130)",fontSize:"12px"}}><span >Home &nbsp;/</span></a></div>
        <div className = 'breadcrumb-anchor-container-one' style={{fontSize:"16px"}}><a href="index.html" style={{textDecoration:"none", color: "rgb(130, 130, 130)",fontSize:"12px"}}><span >&nbsp; India /</span></a></div>
        <div className = 'breadcrumb-anchor-container-one' style={{fontSize:"16px"}}><a href="index.html" style={{textDecoration:"none", color: "rgb(130, 130, 130)",fontSize:"12px",pointerEvents:"none", color:"rgb(207, 207, 207)"}}><span >&nbsp; Bengaluru Restaurants</span></a></div>
    </div>
  )
}

export default BreadCrumb;