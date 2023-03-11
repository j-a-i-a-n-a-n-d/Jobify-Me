import React, { useEffect, useState } from 'react';
import './navbar.scss';
//import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const [open, Isopen] = useState(false);
  //console.log(open);

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

  const userInfo = {
    $id: 69,
    $name: 'Papa',
    $seller: true,
  };
  return (
    <div className={active ? 'navbar active' : 'navbar'}>
      <div className='container'>
        <a className='link' href='/'>
          <div className='logo'>
            <span className='text'>fiverr</span>
            <span className='dot'>.</span>
          </div>
        </a>
        <div className='rightSide'>
          <a className='link' href='/'>
            Fiverr Business
          </a>
          <a className='link' href='/'>
            Explore
          </a>
          <a className='link' href='/'>
            English
          </a>
          <a className='link' href='/'>
            Sign In
          </a>
          {!userInfo.$seller && (
            <a className='link' href='/'>
              Become a Seller
            </a>
          )}
          {!userInfo && <button>Join</button>}
          {userInfo && (
            <React.Fragment>
              <div className='user' onClick={() => Isopen(!open)}>
                <img src='' />
                <span>{userInfo.$name}</span>
                {open && (
                  <div className='options'>
                    {userInfo.$seller ? (
                      <React.Fragment>
                        <a className='link' href='/'>
                          Gigs
                        </a>
                        <a className='link' href='/'>
                          Add New Gigs
                        </a>
                      </React.Fragment>
                    ) : (
                      <React.Fragment></React.Fragment>
                    )}
                    <>
                      <a className='link' href='/'>
                        Orders
                      </a>
                      <a className='link' href='/'>
                        Messages
                      </a>
                      <a className='link' href='/'>
                        logout
                      </a>
                    </>
                  </div>
                )}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>

      {active && (
        <React.Fragment>
          <hr />
          <div className='menu'>
            <a className='link' href='/'>
              Test1
            </a>
            <a className='link' href='/'>
              Test2
            </a>
            <a className='link' href='/'>
              Test3
            </a>
            <a className='link' href='/'>
              Test4
            </a>
            <a className='link' href='/'>
              Test5
            </a>
            <a className='link' href='/'>
              Test6
            </a>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Navbar;
