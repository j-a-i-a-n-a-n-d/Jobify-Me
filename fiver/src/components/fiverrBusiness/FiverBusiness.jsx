import React from 'react';
import './fiverbusiness.scss';
const FiverBusiness = () => {
  return (
    <div className='whyfiverr'>
      <div className='container'>
        <div className='leftSide'>
          <h1 className='heading'>
            A whole world of freelance talent at your fingertips
          </h1>
          <div className='content'>
            <div className='contentElement'>
              <span className='contentElementInner'>
                <img src='./Layersvgs/circle.svg' />
                <div>The best for every budget</div>
              </span>
              <div>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </div>
            </div>
            <div className='contentElement'>
              <span className='contentElementInner'>
                <img src='./Layersvgs/circle.svg' />
                <div>Quality work done quickly</div>
              </span>
              <div>
                Find the right freelancer to begin working on your project
                within minutes.
              </div>
            </div>
            <div className='contentElement'>
              <span className='contentElementInner'>
                <img src='./Layersvgs/circle.svg' />
                <div>Protected payments, every time</div>
              </span>
              <div>
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </div>
            </div>
            <div className='contentElement'>
              <span className='contentElementInner'>
                <img src='./Layersvgs/circle.svg' />
                <div>24/7 support</div>
              </span>
              <div>
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </div>
            </div>
          </div>
        </div>
        <div className='rightSide'>
          <div className='conImage'>
            <img src='./images/man.png' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiverBusiness;
