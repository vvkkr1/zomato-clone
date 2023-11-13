import React from 'react'
import './breadCrumb.css'

const BreadCrumb = () => {
  return (
    <div className='max-width ' style={{display:"flex"}}>
        <div style={{fontSize:"16px"}}><a href="index.html" style={{textDecoration:"none", color: "rgb(130, 130, 130)",fontSize:"12px"}}><span >Home &nbsp;/</span></a></div>
        <div style={{fontSize:"16px"}}><a href="index.html" style={{textDecoration:"none", color: "rgb(130, 130, 130)",fontSize:"12px"}}><span >&nbsp; India /</span></a></div>
        <div style={{fontSize:"16px"}}><a href="index.html" style={{textDecoration:"none", color: "rgb(130, 130, 130)",fontSize:"12px",pointerEvents:"none"}}><span >&nbsp; Bengaluru Restaurants</span></a></div>
    </div>
  )
}

export default BreadCrumb;