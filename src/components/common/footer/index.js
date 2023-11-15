import React from 'react'
import './footerStyle.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='max-width footer-wrap'>
          
          {/* head of footer  */}
          <div className='head-wrap'>
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

          {/* main of footer  */}
          <div className='main-wrap'>
            
            <div className='about-zomato'>
               <div className='about-title'>About zomato</div> 
                  <div className='about-zomato-wrap'>
                    <div><a style={{textDecoration:"none",fontSize:"14px",lineHeight:"21px",color:"rgb(105, 105, 105)",margin:"5px 0px"}} target="_blank" href="https://www.zomato.com/who-we-are" className='who-we-are'>Who We Are</a></div>
                    <div><a style={{textDecoration:"none",fontSize:"14px",lineHeight:"21px",color:"rgb(105, 105, 105)",margin:"5px 0px"}} target="_blank" href="https://blog.zomato.com/">Blog</a></div>
                    <div><a style={{textDecoration:"none",fontSize:"14px",lineHeight:"21px",color:"rgb(105, 105, 105)",margin:"5px 0px"}} target="_blank" href="https://www.zomato.com/careers">Work With Us</a></div>
                    <div><a style={{textDecoration:"none",fontSize:"14px",lineHeight:"21px",color:"rgb(105, 105, 105)",margin:"5px 0px"}} target="_blank" href="https://www.zomato.com/investor-relations">Investor Relations</a></div>
                    <div><a style={{textDecoration:"none",fontSize:"14px",lineHeight:"21px",color:"rgb(105, 105, 105)",margin:"5px 0px"}} target="_blank" href="https://www.zomato.com/report-fraud">Report Fraud</a></div>
                    <div><a style={{textDecoration:"none",fontSize:"14px",lineHeight:"21px",color:"rgb(105, 105, 105)",margin:"5px 0px"}} target="_blank" href="https://blog.zomato.com/press-kit">Press Kid</a></div>
                    <div><a style={{textDecoration:"none",fontSize:"14px",lineHeight:"21px",color:"rgb(105, 105, 105)",margin:"5px 0px"}} target="_blank" href="https://www.zomato.com/contact">Contact Us</a></div>
                  </div>  
            </div>

            <div className='zomaverse'>
              <div className='zomaverse-title'>Zomaverse</div>
              <div className='zomaverse-wrap'>
                  <div><a style={{textDecoration:"none",fontSize:"14px",lineHeight:"21px",color:"rgb(105, 105, 105)",margin:"5px 0px"}} target="_blank" href="https://www.zomato.com/who-we-are" className='who-we-are'>Zomato</a></div>
                  <div><a style={{textDecoration:"none",fontSize:"14px",lineHeight:"21px",color:"rgb(105, 105, 105)",margin:"5px 0px"}} target="_blank" href="https://blog.zomato.com/">Blinkit</a></div>
                  <div><a style={{textDecoration:"none",fontSize:"14px",lineHeight:"21px",color:"rgb(105, 105, 105)",margin:"5px 0px"}} target="_blank" href="https://www.zomato.com/careers">Feeding India</a></div>
                  <div><a style={{textDecoration:"none",fontSize:"14px",lineHeight:"21px",color:"rgb(105, 105, 105)",margin:"5px 0px"}} target="_blank" href="https://www.zomato.com/investor-relations">Hyperpure</a></div>
                  <div><a style={{textDecoration:"none",fontSize:"14px",lineHeight:"21px",color:"rgb(105, 105, 105)",margin:"5px 0px"}} target="_blank" href="https://www.zomato.com/report-fraud">Zomaland</a></div>
              </div>
            </div>
            <div>For Restaurants</div>
            <div>Learn More</div>
            <div>Social Links</div>

          </div>
          
          {/* bottom of footer  */}

      </div>
    </div>
  )
}

export default Footer