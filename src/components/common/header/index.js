import React from 'react'
import './headerStyle.css'

const Header = () => {
  return (
    <div className='header max-width'>
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
             className='header-logo'
             alt='Zomato.logo' />

        <div className='header-right'>

            <div className='header-location-search-container'>
              
              <div className='location-wrapper'>
                <div className='location-icon-name'>
                    <i class="fi fi-rr-marker absolute-center location-icon"></i>
                    <div>Bangalore</div>
                </div>
                <i class="fi fi-rr-caret-down absolute-center"></i>
              </div>
              
              {/* search  */}
              <div className='location-search-separator'></div>
              <div className='header-searchBar'>
                 <i className="fi fi-rr-search absolute-center search-icon"></i>
                 <input placeholder='Search for restaurant. cuisineor a dish'
                        className='search-input'/> 
              </div>

            </div>
            
            {/* Log out profile  */}
            <div className='profile-wrapper'>
                 
                 <li>
                     <a className='login-btn' href="index.html">Log in</a>
                 </li>
                 <li >
                     <a className='signup-btn' href="index.html">Sign up</a>
                 </li>
                 
            </div>

        </div>
    </div>
  )
}

export default Header