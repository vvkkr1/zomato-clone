import React from 'react'
import './footerStyle.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='max-width footer-wrap'>
          <div className='footer-container'>
              <div className='footer-image-container'>
                  <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*'
                       className='footer-img'
                       alt='zomato-logo'
                      />
              </div>
              
              <div className='footer-right'>

                <div className='footer-country'>
                    <div className='india-icon-container'>
                       <div className='india-icon'></div>
                       <div className='india-title'>India</div>
                       <div>
                         <i class="fi fi-tr-caret-down"></i>
                       </div> 
                    </div>

                  

                  <div className='english-icon-container'>
                    <div><i class="fi fi-sr-globe english-icon"></i></div>
                    <div className='english-title'>English</div>
                  </div>
                </div>

              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer