import React from 'react';
import { Link } from 'react-router-dom';
import './component8.scss';

const Component8 = () => {
  return (
    <div className='component8'>
      <div className='container'>
        <Link to='/' className='link con'>
          <img src='./Component8/graphics&design.svg' />
          <div>Graphics Design</div>
        </Link>
        <Link to='/' className='link con'>
          <img src='./Component8/digitalmarketing.svg' />
          <div>Digital Marketing</div>
        </Link>
        <Link to='/' className='link con'>
          <img src='./Component8/writingtranslation.svg' />
          <div>Writing Translation</div>
        </Link>
        <Link to='/' className='link con'>
          <img src='./Component8/video&animation.svg' />
          <div>Video Animation</div>
        </Link>
        <Link to='/' className='link con'>
          <img src='./Component8/music&audio.svg' />
          <div>Music/ Audio</div>
        </Link>
        <Link to='/' className='link con'>
          <img src='./Component8/programming&tech.svg' />
          <div>Prog. & Tech</div>
        </Link>
        <Link to='/' className='link con'>
          <img src='./Component8/business.svg' />
          <div>Business</div>
        </Link>
        <Link to='/' className='link con'>
          <img src='./Component8/lifestyle.svg' />
          <div>Lifestyle</div>
        </Link>
        <Link to='/' className='link con'>
          <img src='./Component8/data.svg' />
          <div>Data</div>
        </Link>
        <Link to='/' className='link con'>
          <img src='./Component8/photography.svg' />
          <div>Photography</div>
        </Link>
      </div>
    </div>
  );
};

export default Component8;
