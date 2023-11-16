import React from 'react';
import './testimonialsStyle.css';

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className='max-width testimonials-wrapper'>
            <div className='testimonials-title'>Explore options near me</div>
            
            {/* <div className='testimonials-drop-down'> */}
                
                <div className='drop-down-wrap'>
                    <div className='drop-down'>
                        <div className='drop-down-title'>Popular cuisines near me</div>
                        <i className="fi fi-sr-caret-down"></i>
                    </div>
                </div>
               
                <div className='drop-down-wrap'>
                    <div className='drop-down'>
                        <div className='drop-down-title'>Popular restaurant types near me</div>
                        <i class="fi fi-sr-caret-down"></i>
                    </div>
                </div>
               
                <div className='drop-down-wrap'>
                    <div className='drop-down'>
                        <div className='drop-down-title'>Top Restaurant Chains</div>
                        <i class="fi fi-sr-caret-down"></i>
                    </div>
                </div>
               
                <div className='drop-down-wrap'>
                    <div className='drop-down'>
                        <div className='drop-down-title'>Cities We Deliver To</div>
                        <i class="fi fi-sr-caret-down"></i>
                    </div>
                </div>

            </div>

        </div>
    // </div>
  )
}

export default Testimonials