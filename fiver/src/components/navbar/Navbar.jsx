import React, { useState } from 'react';
import './navbar.scss';

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={active ? 'navbar active' : 'navbar'}>
      <div className='container'>
        <div className='logo'>
          <span className='text'>fiverr</span>
          <span className='dot'>.</span>
        </div>
        <div className='rightSide'>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>

      <hr />
      <div className='menu'>
        <span>Test1</span>
        <span>Test2</span>
        <span>Test3</span>
        <span>Test4</span>
        <span>Test5</span>
        <span>Test6</span>
      </div>
    </div>
  );
};

export default Navbar;
