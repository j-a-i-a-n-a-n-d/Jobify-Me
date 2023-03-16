import React from 'react';
import './fiverbusiness.scss';
const FiverBusiness = () => {
  return (
    <div className='fiverrbusiness'>
      <div className='container'>
        <div className='leftSide'>
          <h1 className='heading1'>
            <span className='fiverrHeading'>fiverr</span>business.
            <span>new</span>
          </h1>
          <h1 className='heading'>A business solution designed for teams</h1>
          <div className='content'>
            <div className='contentElement'>
              <span className='contentElementInner'>
                <img src='./Layersvgs/fiverbusinessCheckCircle.png' />
                <div>The best for every budget</div>
              </span>
              <div>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </div>
            </div>
          </div>
        </div>
        <div className='rightSide'>
          <div className='conImage'>
            <img src='./Layersvgs/fiverrbusinesswebp.webp' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiverBusiness;
