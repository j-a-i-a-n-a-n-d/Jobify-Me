import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

const Card = ({ key, title, desc, img }) => {
  return (
    <Link to='/' className='link'>
      <div className='card'>
        <img className='image' src={img} alt={title} />
        <span className='description'>{desc}</span>
        <span className='title'>{title}</span>
      </div>
    </Link>
  );
};

export default Card;
