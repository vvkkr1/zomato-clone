import React from 'react'

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
              background:"white",
              borderRadius:"50%",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              padding:"4px",
              // fontSize:"0px",
              // height:"34px",
              // width:"34px",
              // boxShadow:"rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px",
              // zIndex:"2",
              // top:"58px",
              // right:"0px",
              // border:"4px solid transparent",
              // alignSelf:"center"
            }}
        onClick={onClick}
      />
    );
    }
export default NextArrow