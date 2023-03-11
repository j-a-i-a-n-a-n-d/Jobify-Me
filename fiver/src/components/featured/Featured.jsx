import React from 'react';
import './featured.scss';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='container'>
        <div className='left'>
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex iusto
            distinctio dolorem vel. Incidunt a
          </h1>
          <div className='search'>
            <div className='searchInput'>
              <img src='./images/search.png' alt='Image not available' />
              <input type='text' placeholder='Search ....' />
            </div>
            <button>Search Button</button>
          </div>
          <div className='popular'>
            <span>Popular:</span>
            <button>Web</button>
            <button>Lorem</button>
            <button>Graphics</button>
            <button>media</button>
          </div>
        </div>
        <div className='right'>
          <img src='./images/woman1.png' />
        </div>
      </div>
    </div>
  );
};

export default Featured;
