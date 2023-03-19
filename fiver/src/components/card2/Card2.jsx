import React from 'react';
import { Link } from 'react-router-dom';
import './card2.scss';

const Card2 = ({ key, username, cat, img, pp }) => {
  console.log(cat);
  console.log(username);
  return (
    <Link to='/' className='link'>
      <div className='card2'>
        <img className='top' src={img} alt={username} />
        <div className='bottom'>
          <img src={pp} alt='' className='pp' />
          <div className='bottomright'>
            <div className='cat'>{cat} by</div>
            <div className='username'>{username}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card2;
