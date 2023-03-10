import React, { useEffect, useState } from 'react';
import './navbar.scss';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const activeFunction = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', activeFunction);
    //cleanup function while using useEffect
    () => {
      window.removeEventListener('scroll', activeFunction);
    };
  }, []);

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

      {active && (
        <React.Fragment>
          <hr />
          <div className='menu'>
            <span>Test1</span>
            <span>Test2</span>
            <span>Test3</span>
            <span>Test4</span>
            <span>Test5</span>
            <span>Test6</span>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Navbar;
