import React from 'react';
import './gigstickycomponent.scss';

const GigStickyComponent = () => {
  return (
    <div className='right2'>
      <div className='price'>
        <h3>1 AI generated image</h3>
        <h2>$ 59.99</h2>
      </div>
      <p>
        I will create a unique high quality AI generated image based on a
        description that you give me
      </p>
      <div className='details'>
        <div className='item'>
          <img src='../images/clock.png' alt='' />
          <span>2 Days Delivery</span>
        </div>
        <div className='item'>
          <img src='../images/recycle.png' alt='' />
          <span>3 Revisions</span>
        </div>
      </div>
      <div className='features'>
        <div className='item'>
          <img src='../images/greencheck.png' alt='' />
          <span>Prompt writing</span>
        </div>
        <div className='item'>
          <img src='../images/greencheck.png' alt='' />
          <span>Artwork delivery</span>
        </div>
        <div className='item'>
          <img src='../images/greencheck.png' alt='' />
          <span>Image upscaling</span>
        </div>
        <div className='item'>
          <img src='../images/greencheck.png' alt='' />
          <span>Additional design</span>
        </div>
      </div>
      <button>Continue</button>
    </div>
  );
};

export default GigStickyComponent;
